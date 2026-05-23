import { View } from 'react-native';
import type { ScrollShadowProps } from './scroll-shadow.types';
declare const ScrollShadowRoot: import("react").ForwardRefExoticComponent<ScrollShadowProps & import("react").RefAttributes<View>>;
/**
 * Compound ScrollShadow component
 *
 * @component ScrollShadow - Main container that wraps any scrollable component and adds
 * dynamic gradient shadows at the edges. Automatically detects scroll position and content
 * overflow to show/hide shadows intelligently.
 *
 * The component intercepts scroll events from the child scrollable component and manages
 * shadow visibility based on scroll position and content size. Supports both vertical
 * and horizontal orientations.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/scroll-shadow
 */
export default ScrollShadowRoot;
//# sourceMappingURL=scroll-shadow.d.ts.map