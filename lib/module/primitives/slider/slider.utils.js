"use strict";

/**
 * Clamps a number between min and max bounds
 * @param value - The value to clamp
 * @param min - Minimum bound
 * @param max - Maximum bound
 * @returns The clamped value
 */
export function clamp(value, min, max) {
  'worklet';

  return Math.min(Math.max(value, min), max);
}

/**
 * Snaps a value to the nearest step increment
 * @param value - The raw value
 * @param min - Minimum value of the range
 * @param max - Maximum value of the range
 * @param step - Step increment
 * @returns The snapped value
 */
export function snapToStep(value, min, max, step) {
  'worklet';

  const snapped = Math.round((value - min) / step) * step + min;
  return clamp(snapped, min, max);
}

/**
 * Converts a slider value to a ratio (0 to 1)
 * @param value - The slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @returns The ratio (0 to 1)
 */
export function valueToPercent(value, min, max) {
  'worklet';

  if (max === min) {
    return 0;
  }
  return (value - min) / (max - min);
}

/**
 * Formats a slider value using Intl.NumberFormat.
 * Values are passed directly to the formatter — consumers are responsible
 * for providing values in the scale the formatter expects (e.g. 0–1 for
 * `style: 'percent'`).
 * @param value - The numeric value
 * @param formatOptions - Intl.NumberFormat options
 * @returns The formatted string
 */
export function formatValue(value, formatOptions) {
  if (formatOptions) {
    return new Intl.NumberFormat(undefined, formatOptions).format(value);
  }
  return String(value);
}

/**
 * Normalizes a SliderValue to always be an array of numbers
 * @param value - Single number or array
 * @returns Array of numbers
 */
export function normalizeValue(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * Denormalizes an array back to a SliderValue
 * @param values - Array of numbers
 * @param wasArray - Whether the original value was an array
 * @returns Single number or array
 */
export function denormalizeValue(values, wasArray) {
  if (wasArray) {
    return values;
  }
  return values[0] ?? 0;
}
//# sourceMappingURL=slider.utils.js.map