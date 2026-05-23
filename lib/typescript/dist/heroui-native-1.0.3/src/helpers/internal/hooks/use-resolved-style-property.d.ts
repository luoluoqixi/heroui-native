import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
/**
 * Combined style type from React Native
 */
type Style = ViewStyle | TextStyle | ImageStyle;
/**
 * Parameters for single property resolution
 */
interface UseResolvedStylePropertyParamsSingle<K extends keyof Style> {
    /** The className string to resolve styles from */
    className?: string;
    /** The style prop (can be object, array, or null) */
    style?: StyleProp<ViewStyle> | StyleProp<TextStyle> | StyleProp<ImageStyle>;
    /** The name of the style property to resolve */
    propertyName: K;
}
/**
 * Parameters for multiple properties resolution
 */
interface UseResolvedStylePropertyParamsMultiple<K extends keyof Style> {
    /** The className string to resolve styles from */
    className?: string;
    /** The style prop (can be object, array, or null) */
    style?: StyleProp<ViewStyle> | StyleProp<TextStyle> | StyleProp<ImageStyle>;
    /** Array of style property names to resolve */
    propertyNames: readonly K[];
}
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
declare function useResolvedStyleProperty<K extends keyof Style>(params: UseResolvedStylePropertyParamsSingle<K>): Style[K] | undefined;
declare function useResolvedStyleProperty<K extends keyof Style>(params: UseResolvedStylePropertyParamsMultiple<K>): (Style[K] | undefined)[];
export { useResolvedStyleProperty };
//# sourceMappingURL=use-resolved-style-property.d.ts.map