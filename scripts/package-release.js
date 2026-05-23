#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const packageJsonPath = path.join(repoRoot, 'package.json');
const yarnConfigPath = path.join(repoRoot, '.yarnrc.yml');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const yarnConfig = fs.readFileSync(yarnConfigPath, 'utf8');
const yarnPathMatch = yarnConfig.match(/yarnPath:\s*(.+)\s*$/m);
const yarnPath = yarnPathMatch
  ? path.resolve(repoRoot, yarnPathMatch[1].trim())
  : null;
const packageName = packageJson.name;
const version = packageJson.version;
const branchName = `${packageName}-${version}`;
const distDir = path.join(repoRoot, 'dist');
const tarballName = `${packageName}-${version}.tgz`;
const tarballPath = path.join(distDir, tarballName);
const releaseRepoDir = path.join(distDir, branchName);
const releaseExtractDir = path.join(distDir, `${branchName}-extract`);
const npmPs1Path = path.join(path.dirname(process.execPath), 'npm.ps1');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: false,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')}`);
  }
}

function runCapture(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    shell: false,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const stderr = (result.stderr || '').trim();
    throw new Error(stderr || `${command} ${args.join(' ')}`);
  }

  return (result.stdout || '').trim();
}

function tryRunCapture(command, args, options = {}) {
  try {
    return runCapture(command, args, options);
  } catch {
    return '';
  }
}

function runYarn(args) {
  if (yarnPath) {
    run('node', [yarnPath, ...args]);
    return;
  }

  run(process.platform === 'win32' ? 'yarn.cmd' : 'yarn', args);
}

function runNpm(args) {
  if (process.platform === 'win32' && fs.existsSync(npmPs1Path)) {
    run('powershell.exe', [
      '-NoProfile',
      '-ExecutionPolicy',
      'Bypass',
      '-File',
      npmPs1Path,
      ...args,
    ]);
    return;
  }

  run(process.platform === 'win32' ? 'npm.cmd' : 'npm', args);
}

function currentBranch(cwd) {
  return tryRunCapture('git', ['symbolic-ref', '--quiet', '--short', 'HEAD'], {
    cwd,
  });
}

function branchExists(cwd, name) {
  const result = spawnSync(
    'git',
    ['show-ref', '--verify', '--quiet', `refs/heads/${name}`],
    {
      cwd,
      stdio: 'ignore',
      shell: false,
    }
  );

  return result.status === 0;
}

function clearDirectory(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDirectoryContents(sourceDir, targetDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });
  }
}

function ensureGitIdentity(cwd) {
  const userName = tryRunCapture('git', ['config', 'user.name'], { cwd });
  const userEmail = tryRunCapture('git', ['config', 'user.email'], { cwd });

  run('git', ['config', 'user.name', userName || 'release-bot'], { cwd });
  run(
    'git',
    ['config', 'user.email', userEmail || 'release-bot@example.invalid'],
    { cwd }
  );
}

function ensureReleaseRepo() {
  const gitDirPath = path.join(releaseRepoDir, '.git');

  if (!fs.existsSync(releaseRepoDir)) {
    run('git', ['clone', '--no-local', repoRoot, releaseRepoDir], {
      cwd: distDir,
    });
  } else if (!fs.existsSync(gitDirPath)) {
    throw new Error(
      `Release repo directory exists but is not a git repository: ${releaseRepoDir}`
    );
  }

  ensureGitIdentity(releaseRepoDir);
}

function resetReleaseRepoBranch() {
  const activeBranch = currentBranch(releaseRepoDir);

  if (activeBranch === branchName) {
    run('git', ['switch', '--detach'], { cwd: releaseRepoDir });
  }

  if (branchExists(releaseRepoDir, branchName)) {
    run('git', ['branch', '-D', branchName], { cwd: releaseRepoDir });
  }

  run('git', ['switch', '--orphan', branchName], { cwd: releaseRepoDir });
  run('git', ['rm', '-rf', '.', '--ignore-unmatch'], { cwd: releaseRepoDir });
  run('git', ['clean', '-fdx'], { cwd: releaseRepoDir });
}

function preferredPushRemote() {
  const remoteNames = tryRunCapture('git', ['remote'])
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);

  if (remoteNames.includes('origin')) {
    return 'origin';
  }

  return remoteNames[0] || '';
}

function buildTarball() {
  let exportsBackedUp = false;

  console.log('[1/7] Cleaning previous build output...');
  runYarn(['clean']);

  try {
    console.log('[2/7] Updating exports for pack...');
    run('node', ['scripts/update-exports.js', 'prepack']);
    exportsBackedUp = true;

    console.log('[3/7] Building library output...');
    runYarn(['prepare']);

    console.log('[4/7] Creating tarball...');
    fs.mkdirSync(distDir, { recursive: true });
    fs.rmSync(tarballPath, { force: true });
    runNpm(['pack', '--pack-destination', distDir, '--ignore-scripts']);
  } finally {
    if (exportsBackedUp) {
      console.log('[5/7] Restoring package.json...');
      run('node', ['scripts/update-exports.js', 'postpack']);
    }
  }

  if (!fs.existsSync(tarballPath)) {
    throw new Error(`Tarball not found: ${tarballPath}`);
  }
}

function createReleaseBranchInDistRepo() {
  console.log('[6/7] Creating release commit in the dist workspace...');
  clearDirectory(releaseExtractDir);
  ensureReleaseRepo();
  resetReleaseRepoBranch();

  run('tar', ['-xzf', tarballPath, '-C', releaseExtractDir], {
    cwd: distDir,
  });

  const extractedPackageDir = path.join(releaseExtractDir, 'package');
  if (!fs.existsSync(extractedPackageDir)) {
    throw new Error(
      `Extracted package directory not found: ${extractedPackageDir}`
    );
  }

  copyDirectoryContents(extractedPackageDir, releaseRepoDir);
  run('git', ['add', '-A'], { cwd: releaseRepoDir });
  run('git', ['commit', '-m', `chore(release): ${branchName}`], {
    cwd: releaseRepoDir,
  });

  fs.rmSync(releaseExtractDir, { recursive: true, force: true });

  return releaseRepoDir;
}

function updateLocalBranchFromTempRepo(tempRepoDir) {
  console.log('[7/7] Updating the local release branch without switching...');
  run(
    'git',
    [
      'fetch',
      '--force',
      tempRepoDir,
      `refs/heads/${branchName}:refs/heads/${branchName}`,
    ],
    { cwd: repoRoot }
  );
}

function main() {
  const startingBranch = currentBranch(repoRoot);
  const pushRemote = preferredPushRemote();

  if (startingBranch === branchName) {
    console.error(
      `Current branch is already ${branchName}. Switch to another branch before running this script.`
    );
    process.exit(1);
  }

  try {
    buildTarball();
    const tempRepoDir = createReleaseBranchInDistRepo();
    updateLocalBranchFromTempRepo(tempRepoDir);

    const endingBranch = currentBranch(repoRoot);
    if (endingBranch !== startingBranch) {
      throw new Error('Current workspace branch changed unexpectedly.');
    }

    console.log('Done.');
    console.log(`Current branch: ${endingBranch || '(detached HEAD)'}`);
    console.log(`Release branch: ${branchName}`);
    console.log(`Tarball: ${tarballPath}`);
    console.log(`Release repo: ${releaseRepoDir}`);
    console.log(
      `Push command: git push -u ${pushRemote || '<remote>'} ${branchName}`
    );
  } catch (error) {
    console.error('Build failed.');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
