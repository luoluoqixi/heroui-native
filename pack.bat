@echo off
setlocal

cd /d "%~dp0"
node scripts\package-release.js %*
exit /b %ERRORLEVEL%