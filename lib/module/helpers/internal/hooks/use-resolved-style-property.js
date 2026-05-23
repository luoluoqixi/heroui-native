"use strict";

import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResolveClassNames } from 'uniwind';

/**
 * Combined style type from React Native
 */

/**
 * Parameters for single property resolution
 */

/**
 * Parameters for multiple properties resolution
 */

/**
 * A hook that resolves specific style properties from both className and style props.
 * The style prop takes precedence over className.
 *
 * This is useful when you need to extract specific style values (like width, height)
 * that might come from either Tailwind classes or inline styles.
 *
 * @param params - Configuration object with className, style, and propertyName(s)
 * @returns The resolved style property value(s) or undefined if not found
 *
 * @example Single property
 * ```tsx
 * const width = useResolvedStyleProperty({
 *   className: 'w-10 h-8',
 *   style: { width: 50 },
 *   propertyName: 'width',
 * });
 * // Returns: 50 (from style, takes precedence)
 * ```
 *
 * @example Multiple properties
 * ```tsx
 * const [width, left] = useResolvedStyleProperty({
 *   className: 'w-10 left-2',
 *   propertyNames: ['width', 'left'],
 * });
 * // Returns: [40, 8] (from className)
 * ```
 */

function useResolvedStyleProperty(params) {
  const {
    className,
    style
  } = params;
  const resolvedClassName = useResolveClassNames(className ?? '');
  const resolvedStyle = useMemo(() => style ? StyleSheet.flatten(style) : undefined, [style]);
  return useMemo(() => {
    // Check if we're resolving multiple properties
    if ('propertyNames' in params) {
      return params.propertyNames.map(propertyName => {
        // Style prop takes precedence over className
        if (resolvedStyle && propertyName in resolvedStyle) {
          return resolvedStyle[propertyName];
        }

        // Fall back to className-resolved styles
        if (resolvedClassName && propertyName in resolvedClassName) {
          return resolvedClassName[propertyName];
        }
        return undefined;
      });
    }

    // Single property resolution
    const propertyName = params.propertyName;

    // Style prop takes precedence over className
    if (resolvedStyle && propertyName in resolvedStyle) {
      return resolvedStyle[propertyName];
    }

    // Fall back to className-resolved styles
    if (resolvedClassName && propertyName in resolvedClassName) {
      return resolvedClassName[propertyName];
    }
    return undefined;
  }, [resolvedStyle, resolvedClassName, params]);
}
export { useResolvedStyleProperty };
//# sourceMappingURL=use-resolved-style-property.js.map