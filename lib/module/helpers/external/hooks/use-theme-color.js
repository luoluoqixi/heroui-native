"use strict";

import { useCSSVariable } from 'uniwind';

/**
 * Unique brand symbol used to prevent accidental array destructuring of a
 * single theme color value returned from `useThemeColor`.
 */

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

/**
 * Theme colors as const array for efficient mapping
 * Ordered to match the order in src/styles/theme.css
 */
const THEME_COLORS = ['background', 'foreground', 'surface', 'surface-foreground', 'surface-hover', 'overlay', 'overlay-foreground', 'overlay-backdrop', 'muted', 'accent', 'accent-foreground', 'segment', 'segment-foreground', 'border', 'separator', 'focus', 'link', 'default', 'default-foreground', 'success', 'success-foreground', 'warning', 'warning-foreground', 'danger', 'danger-foreground', 'field', 'field-foreground', 'field-placeholder', 'field-border', 'background-secondary', 'background-tertiary', 'background-inverse', 'default-hover', 'accent-hover', 'success-hover', 'warning-hover', 'danger-hover', 'field-hover', 'field-focus', 'field-border-hover', 'field-border-focus', 'accent-soft', 'accent-soft-foreground', 'accent-soft-hover', 'danger-soft', 'danger-soft-foreground', 'danger-soft-hover', 'warning-soft', 'warning-soft-foreground', 'warning-soft-hover', 'success-soft', 'success-soft-foreground', 'success-soft-hover', 'surface-secondary', 'surface-tertiary', 'on-surface', 'on-surface-foreground', 'on-surface-hover', 'on-surface-focus', 'on-surface-secondary', 'on-surface-secondary-foreground', 'on-surface-secondary-hover', 'on-surface-secondary-focus', 'on-surface-tertiary', 'on-surface-tertiary-foreground', 'on-surface-tertiary-hover', 'on-surface-tertiary-focus', 'separator-secondary', 'separator-tertiary', 'border-secondary', 'border-tertiary'];

/**
 * Theme colors type derived from THEME_COLORS array
 */

/**
 * Helper type to create a tuple of strings with the same length as the input array
 */

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

export function useThemeColor(themeColor) {
  const isArray = Array.isArray(themeColor);
  const cssVariables = isArray ? themeColor.map(color => `--color-${color}`) : [`--color-${themeColor}`];
  const resolvedColors = useCSSVariable(cssVariables);
  const processedColors = resolvedColors.map(color => {
    if (typeof color === 'string') {
      return color;
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
  return processedColors[0] ?? 'invalid';
}
//# sourceMappingURL=use-theme-color.js.map