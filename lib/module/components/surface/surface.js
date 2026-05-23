"use strict";

import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import * as Slot from "../../primitives/slot/index.js";
import { useSurfaceRootAnimation } from "./surface.animation.js";
import { DISPLAY_NAME } from "./surface.constants.js";
import { surfaceClassNames, surfaceStyleSheet } from "./surface.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [SurfaceProvider, useSurface] = createContext({
  name: 'SurfaceContext',
  strict: false
});
const Surface = /*#__PURE__*/forwardRef(({
  children,
  variant = 'default',
  className,
  style,
  animation,
  asChild = false,
  ...props
}, ref) => {
  const RootComponent = asChild ? Slot.View : View;
  const rootClassName = surfaceClassNames.root({
    variant,
    className
  });
  const {
    isAllAnimationsDisabled
  } = useSurfaceRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const contextValue = useMemo(() => ({
    variant
  }), [variant]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(SurfaceProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(RootComponent, {
        ref: ref,
        className: rootClassName,
        style: [surfaceStyleSheet.root, style],
        ...props,
        children: children
      })
    })
  });
});
Surface.displayName = DISPLAY_NAME.ROOT;

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
//# sourceMappingURL=surface.js.map