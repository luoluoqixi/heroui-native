import { type ReactNode } from 'react';
import type { SharedValue } from 'react-native-reanimated';
/**
 * Converts React children to a string representation.
 * Handles cases where children might be an array of mixed types (strings, numbers, variables).
 *
 * @param children - React children that might be string, number, array, or React elements
 * @returns A string representation of the children or null if not convertible
 */
export declare function childrenToString(children: ReactNode | SharedValue<ReactNode>): string | null;
/**
 * Checks if React children can be converted to a string.
 *
 * @param children - React children to check
 * @returns True if children can be converted to string, false otherwise
 */
export declare function isStringifiableChildren(children: ReactNode): boolean;
//# sourceMappingURL=children-to-string.d.ts.map