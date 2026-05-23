import { useCSSVariable } from 'uniwind';

type BrowserStyleHost = {
  appendChild: (element: unknown) => void;
};

type BrowserProbeElement = {
  style: Record<string, string>;
};

type BrowserCanvasImageData = {
  data: {
    [index: number]: number | undefined;
  };
};

type BrowserCanvasContext = {
  clearRect: (x: number, y: number, width: number, height: number) => void;
  fillRect: (x: number, y: number, width: number, height: number) => void;
  getImageData: (
    x: number,
    y: number,
    width: number,
    height: number
  ) => BrowserCanvasImageData;
  fillStyle: string;
};

type BrowserCanvasElement = {
  width: number;
  height: number;
  getContext: (
    contextId: '2d',
    options?: { willReadFrequently?: boolean }
  ) => BrowserCanvasContext | null;
};

type BrowserGlobals = {
  document?: {
    body?: BrowserStyleHost;
    documentElement?: BrowserStyleHost;
    createElement?: (tagName: string) => BrowserProbeElement;
  };
  window?: {
    getComputedStyle?: (element: unknown) => {
      color?: unknown;
    };
  };
};

let webColorProbe: BrowserProbeElement | undefined;
let webColorCanvasContext: BrowserCanvasContext | undefined;

function getWebColorProbe(): BrowserProbeElement | undefined {
  const browser = globalThis as BrowserGlobals;
  const document = browser.document;
  const host = document?.body ?? document?.documentElement;

  if (!host || !document?.createElement) {
    return undefined;
  }

  if (!webColorProbe) {
    const probe = document.createElement('div');
    const { style } = probe;

    style.position = 'absolute';
    style.visibility = 'hidden';
    style.pointerEvents = 'none';
    style.opacity = '0';
    style.color = 'transparent';

    host.appendChild(probe);
    webColorProbe = probe;
  }

  return webColorProbe;
}

function getWebColorCanvasContext(): BrowserCanvasContext | undefined {
  const browser = globalThis as BrowserGlobals;
  const document = browser.document;

  if (!document?.createElement) {
    return undefined;
  }

  if (!webColorCanvasContext) {
    const canvas = document.createElement(
      'canvas'
    ) as unknown as BrowserCanvasElement;

    canvas.width = 1;
    canvas.height = 1;

    webColorCanvasContext =
      canvas.getContext('2d', { willReadFrequently: true }) ?? undefined;
  }

  return webColorCanvasContext;
}

function serializeBrowserColorValue(color: string): string {
  const context = getWebColorCanvasContext();

  if (!context) {
    return color;
  }

  context.clearRect(0, 0, 1, 1);
  context.fillStyle = '#000000';
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);

  const imageData = context.getImageData(0, 0, 1, 1).data;
  const red = imageData[0] ?? 0;
  const green = imageData[1] ?? 0;
  const blue = imageData[2] ?? 0;
  const alphaChannel = imageData[3] ?? 255;

  if (alphaChannel === 255) {
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const alpha = Number((alphaChannel / 255).toFixed(3));

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function resolveBrowserColorValue(color: string): string {
  if (color.trim().length === 0) {
    return color;
  }

  const browser = globalThis as BrowserGlobals;
  const probe = getWebColorProbe();

  if (!probe || !browser.window?.getComputedStyle) {
    return color;
  }

  const { style } = probe;

  style.color = '';
  style.color = color;

  if (style.color.length === 0) {
    return color;
  }

  const computedColor = browser.window.getComputedStyle(probe).color;

  return typeof computedColor === 'string' && computedColor.length > 0
    ? serializeBrowserColorValue(computedColor)
    : color;
}

/**
 * Unique brand symbol used to prevent accidental array destructuring of a
 * single theme color value returned from `useThemeColor`.
 */
declare const _colorValueBrand: unique symbol;

/**
 * A resolved theme color string.
 *
 * This type intentionally removes `[Symbol.iterator]` so that TypeScript
 * surfaces a `never`-typed element when the value is array-destructured,
 * making the misuse visible in the IDE immediately.
 *
 * @example
 * // ✅ Correct – single value
 * const color = useThemeColor('muted');
 *
 * @example
 * // ✅ Correct – multiple values
 * const [primary, bg] = useThemeColor(['accent', 'background']);
 *
 * @example
 * // ❌ Wrong – destructuring a single-color result yields `never`
 * const [color] = useThemeColor('muted');
 */
export type ThemeColorValue = string & {
  readonly [_colorValueBrand]: void;
  /** Removed to prevent accidental array destructuring. */
  readonly [Symbol.iterator]: never;
};

/**
 * Theme colors as const array for efficient mapping
 * Ordered to match the order in src/styles/theme.css
 */
const THEME_COLORS = [
  'background',
  'foreground',
  'surface',
  'surface-foreground',
  'surface-hover',
  'overlay',
  'overlay-foreground',
  'overlay-backdrop',
  'muted',
  'accent',
  'accent-foreground',
  'segment',
  'segment-foreground',
  'border',
  'separator',
  'focus',
  'link',
  'default',
  'default-foreground',
  'success',
  'success-foreground',
  'warning',
  'warning-foreground',
  'danger',
  'danger-foreground',
  'field',
  'field-foreground',
  'field-placeholder',
  'field-border',
  'background-secondary',
  'background-tertiary',
  'background-inverse',
  'default-hover',
  'accent-hover',
  'success-hover',
  'warning-hover',
  'danger-hover',
  'field-hover',
  'field-focus',
  'field-border-hover',
  'field-border-focus',
  'accent-soft',
  'accent-soft-foreground',
  'accent-soft-hover',
  'danger-soft',
  'danger-soft-foreground',
  'danger-soft-hover',
  'warning-soft',
  'warning-soft-foreground',
  'warning-soft-hover',
  'success-soft',
  'success-soft-foreground',
  'success-soft-hover',
  'surface-secondary',
  'surface-tertiary',
  'on-surface',
  'on-surface-foreground',
  'on-surface-hover',
  'on-surface-focus',
  'on-surface-secondary',
  'on-surface-secondary-foreground',
  'on-surface-secondary-hover',
  'on-surface-secondary-focus',
  'on-surface-tertiary',
  'on-surface-tertiary-foreground',
  'on-surface-tertiary-hover',
  'on-surface-tertiary-focus',
  'separator-secondary',
  'separator-tertiary',
  'border-secondary',
  'border-tertiary',
] as const;

/**
 * Theme colors type derived from THEME_COLORS array
 */
export type ThemeColor = (typeof THEME_COLORS)[number];

/**
 * Helper type to create a tuple of strings with the same length as the input array
 */
type CreateStringTuple<
  N extends number,
  TAcc extends string[] = [],
> = TAcc['length'] extends N ? TAcc : CreateStringTuple<N, [...TAcc, string]>;

/**
 * Hook to retrieve theme color values from CSS variables.
 * Supports both single color and multiple colors for efficient batch retrieval.
 *
 * @param themeColor - Single theme color name or array of theme color names
 * @returns `ThemeColorValue` for a single name, or a string tuple/array for multiple names.
 *
 * @example
 * // Single color – returns `ThemeColorValue` (not destructurable)
 * const primaryColor = useThemeColor('accent');
 *
 * @example
 * // Multiple colors – returns a typed string tuple (destructurable)
 * const [primaryColor, backgroundColor] = useThemeColor(['accent', 'background']);
 */
export function useThemeColor(themeColor: ThemeColor): ThemeColorValue;
export function useThemeColor<T extends readonly [ThemeColor, ...ThemeColor[]]>(
  themeColor: T
): CreateStringTuple<T['length']>;
export function useThemeColor(themeColor: ThemeColor[]): string[];
export function useThemeColor(
  themeColor: ThemeColor | ThemeColor[]
): ThemeColorValue | string[] {
  const isArray = Array.isArray(themeColor);
  const cssVariables = isArray
    ? themeColor.map((color) => `--color-${color}`)
    : [`--color-${themeColor}`];

  const resolvedColors = useCSSVariable(cssVariables);

  const processedColors: string[] = resolvedColors.map((color) => {
    if (typeof color === 'string') {
      return resolveBrowserColorValue(color);
    }
    if (typeof color === 'number') {
      return String(color);
    }
    return 'invalid';
  });

  if (isArray) {
    return processedColors;
  }

  /** `cssVariables` always contains one entry when `isArray` is false, so index 0 is always defined. */
  return (processedColors[0] ?? 'invalid') as ThemeColorValue;
}
