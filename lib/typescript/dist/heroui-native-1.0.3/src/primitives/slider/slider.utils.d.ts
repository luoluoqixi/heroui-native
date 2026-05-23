/**
 * Clamps a number between min and max bounds
 * @param value - The value to clamp
 * @param min - Minimum bound
 * @param max - Maximum bound
 * @returns The clamped value
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Snaps a value to the nearest step increment
 * @param value - The raw value
 * @param min - Minimum value of the range
 * @param max - Maximum value of the range
 * @param step - Step increment
 * @returns The snapped value
 */
export declare function snapToStep(value: number, min: number, max: number, step: number): number;
/**
 * Converts a slider value to a ratio (0 to 1)
 * @param value - The slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @returns The ratio (0 to 1)
 */
export declare function valueToPercent(value: number, min: number, max: number): number;
/**
 * Formats a slider value using Intl.NumberFormat.
 * Values are passed directly to the formatter — consumers are responsible
 * for providing values in the scale the formatter expects (e.g. 0–1 for
 * `style: 'percent'`).
 * @param value - The numeric value
 * @param formatOptions - Intl.NumberFormat options
 * @returns The formatted string
 */
export declare function formatValue(value: number, formatOptions?: Intl.NumberFormatOptions): string;
/**
 * Normalizes a SliderValue to always be an array of numbers
 * @param value - Single number or array
 * @returns Array of numbers
 */
export declare function normalizeValue(value: number | number[]): number[];
/**
 * Denormalizes an array back to a SliderValue
 * @param values - Array of numbers
 * @param wasArray - Whether the original value was an array
 * @returns Single number or array
 */
export declare function denormalizeValue(values: number[], wasArray: boolean): number | number[];
//# sourceMappingURL=slider.utils.d.ts.map