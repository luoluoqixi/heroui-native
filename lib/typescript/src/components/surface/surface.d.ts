import { View } from 'react-native';
import type { SurfaceContextValue, SurfaceRootProps } from './surface.types';
declare const useSurface: () => SurfaceContextValue;
declare const Surface: import("react").ForwardRefExoticComponent<SurfaceRootProps & import("react").RefAttributes<View>>;
/**
 * Surface component
 *
 * @component Surface - Container component that provides elevation and background styling.
 * Used as a base for other components like Card. Supports different visual variants
 * for various elevation levels and styling needs.
 * - Polymorphic via `asChild` prop (Slot.View merges surface styling onto the child)
 *
 * @see Full documentation: https://heroui.com/docs/native/components/surface
 */
export default Surface;
export { useSurface };
//# sourceMappingURL=surface.d.ts.map