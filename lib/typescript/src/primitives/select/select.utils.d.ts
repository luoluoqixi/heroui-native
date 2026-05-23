import type { SelectOption } from './select.types';
/**
 * Formats an array of labels into a human-readable string with "and" before the last item.
 * - 0 labels: returns `undefined`
 * - 1 label: "Apple"
 * - 2 labels: "Apple and Banana"
 * - 3+ labels: "Apple, Banana and Cherry"
 */
declare function formatSelectedLabels(labels: string[]): string | undefined;
/**
 * Checks whether a specific item value exists in the current selection.
 * Works for both single and multiple selection modes.
 */
declare function isItemSelected(value: SelectOption | SelectOption[], itemValue: string): boolean;
export { formatSelectedLabels, isItemSelected };
//# sourceMappingURL=select.utils.d.ts.map