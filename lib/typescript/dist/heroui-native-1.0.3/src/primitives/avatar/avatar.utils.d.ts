import type { ImageSourcePropType } from 'react-native';
/**
 * Validates whether an image source is valid and can be loaded.
 *
 * @param source - The image source to validate. Can be a require() statement,
 *                 URI object, or array of URI objects.
 * @returns `true` if the source is valid and contains loadable content, `false` otherwise.
 *
 * @example
 * ```ts
 * // Valid sources
 * isValidSource(require('./avatar.png')); // true (returns a number)
 * isValidSource({ uri: 'https://example.com/avatar.jpg' }); // true
 * isValidSource([{ uri: 'https://example.com/avatar.jpg' }]); // true
 *
 * // Invalid sources
 * isValidSource(undefined); // false
 * isValidSource({ uri: '' }); // false
 * isValidSource([{ uri: '' }, { uri: null }]); // false
 * ```
 */
export declare function isValidSource(source?: ImageSourcePropType): boolean;
/**
 * Compares two image sources to determine if they represent the same image.
 * Performs deep comparison of source values, not just reference equality.
 *
 * @param source1 - First image source to compare
 * @param source2 - Second image source to compare
 * @returns `true` if both sources represent the same image, `false` otherwise
 *
 * @example
 * ```ts
 * // Same sources (different object references)
 * isSameSource({ uri: 'https://example.com/img.jpg' }, { uri: 'https://example.com/img.jpg' }); // true
 *
 * // Different sources
 * isSameSource({ uri: 'https://example.com/img1.jpg' }, { uri: 'https://example.com/img2.jpg' }); // false
 *
 * // Same require() values
 * isSameSource(require('./img.png'), require('./img.png')); // true (if same number)
 * ```
 */
export declare function isSameSource(source1?: ImageSourcePropType, source2?: ImageSourcePropType): boolean;
//# sourceMappingURL=avatar.utils.d.ts.map