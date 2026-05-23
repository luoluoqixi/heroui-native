"use strict";

import { cloneElement, createElement, forwardRef, isValidElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useComposedEventHandler } from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { colorKit } from "../../helpers/external/utils/index.js";
import { easeGradient } from "../../helpers/internal/utils/index.js";
import { useScrollShadowRootAnimation } from "./scroll-shadow.animation.js";
import { DEFAULT_SCROLL_EVENT_THROTTLE, DEFAULT_SHADOW_SIZE, SCROLL_SHADOW_DISPLAY_NAME } from "./scroll-shadow.constants.js";
import { scrollShadowClassNames, scrollShadowStyleSheet } from "./scroll-shadow.styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Cache for animated components to prevent remounting on every render.
 * Using WeakMap ensures components are garbage collected when no longer referenced.
 */
const animatedComponentCache = new WeakMap();

/**
 * Gets or creates a cached animated component for the given component type.
 * This prevents creating new component types on every render, which would cause
 * React to treat them as different components and trigger unmount/remount cycles.
 *
 * @param ComponentType - The original component type to create an animated version of
 * @returns The cached animated component type
 */
function getAnimatedComponent(ComponentType) {
  let cached = animatedComponentCache.get(ComponentType);
  if (!cached) {
    try {
      cached = Animated.createAnimatedComponent(ComponentType);
      animatedComponentCache.set(ComponentType, cached);
    } catch (error) {
      throw new Error(`ScrollShadow: Failed to create animated component: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return cached;
}
const ScrollShadowRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    size = DEFAULT_SHADOW_SIZE,
    orientation: orientationProp,
    visibility = 'auto',
    color,
    isEnabled = true,
    className,
    style,
    LinearGradientComponent,
    animation,
    ...restProps
  } = props;
  const themeColorBackground = useThemeColor('background');
  const shadowColor = color || themeColorBackground;
  const rootClassName = scrollShadowClassNames.root({
    className
  });
  const childHorizontal = children?.props && typeof children?.props === 'object' && 'horizontal' in children.props ? children.props.horizontal : false;
  const orientation = orientationProp || (childHorizontal ? 'horizontal' : 'vertical');
  const inverted = children?.props && typeof children?.props === 'object' && 'inverted' in children.props ? children.props.inverted : false;

  // Get all animation logic from root hook
  const {
    contentSize,
    containerSize,
    localScrollHandler,
    topShadowStyle,
    bottomShadowStyle
  } = useScrollShadowRootAnimation({
    animation,
    orientation,
    size,
    visibility,
    isEnabled
  });

  // When inverted, swap which animated style drives each visual edge so that
  // shadows appear at the correct edge from the user's perspective.
  const topEdgeShadowStyle = inverted ? bottomShadowStyle : topShadowStyle;
  const bottomEdgeShadowStyle = inverted ? topShadowStyle : bottomShadowStyle;
  const onContentSizeChange = (w, h) => {
    const contentDimension = orientation === 'vertical' ? h : w;
    contentSize.set(contentDimension);
    children.props?.onContentSizeChange?.(w, h);
  };
  const onLayout = event => {
    const {
      width,
      height
    } = event.nativeEvent.layout;
    const containerDimension = orientation === 'vertical' ? height : width;
    containerSize.set(containerDimension);
    children.props?.onLayout?.(event);
  };
  const outerScrollHandler = children.props?.onScroll;
  const handlers = outerScrollHandler ? [localScrollHandler, outerScrollHandler] : [localScrollHandler];
  const onScroll = useComposedEventHandler(handlers);
  const scrollEventThrottle = children.props?.scrollEventThrottle || DEFAULT_SCROLL_EVENT_THROTTLE;
  if (! /*#__PURE__*/isValidElement(children)) {
    return null;
  }
  const isAnimatedComponent = children.type?.displayName?.includes('AnimatedComponent') || children.type?.__isAnimatedComponent;
  const enhancedChild = isAnimatedComponent ? /*#__PURE__*/cloneElement(children, {
    onContentSizeChange,
    onLayout,
    scrollEventThrottle,
    onScroll
  }) : /*#__PURE__*/createElement(getAnimatedComponent(children.type), {
    ...children.props,
    onContentSizeChange,
    onLayout,
    scrollEventThrottle,
    onScroll
  });
  const {
    colors: topLeftColors,
    locations: topLeftLocations
  } = easeGradient({
    colorStops: {
      0: {
        color: colorKit.setAlpha(shadowColor, 1).hex()
      },
      1: {
        color: colorKit.setAlpha(shadowColor, 0).hex()
      }
    }
  });
  const {
    colors: bottomRightColors,
    locations: bottomRightLocations
  } = easeGradient({
    colorStops: {
      0: {
        color: colorKit.setAlpha(shadowColor, 0).hex()
      },
      1: {
        color: colorKit.setAlpha(shadowColor, 1).hex()
      }
    }
  });
  return /*#__PURE__*/_jsxs(View, {
    ref: ref,
    className: rootClassName,
    style: style,
    ...restProps,
    children: [enhancedChild, orientation === 'vertical' ? /*#__PURE__*/_jsx(Animated.View, {
      style: [scrollShadowStyleSheet.topShadow, {
        height: size
      }, topEdgeShadowStyle],
      children: /*#__PURE__*/_jsx(LinearGradientComponent, {
        colors: topLeftColors,
        locations: topLeftLocations,
        style: StyleSheet.absoluteFill
      })
    }) : /*#__PURE__*/_jsx(Animated.View, {
      style: [scrollShadowStyleSheet.leftShadow, {
        width: size
      }, topEdgeShadowStyle],
      children: /*#__PURE__*/_jsx(LinearGradientComponent, {
        colors: topLeftColors,
        locations: topLeftLocations,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0
        },
        style: StyleSheet.absoluteFill
      })
    }), orientation === 'vertical' ? /*#__PURE__*/_jsx(Animated.View, {
      style: [scrollShadowStyleSheet.bottomShadow, {
        height: size
      }, bottomEdgeShadowStyle],
      children: /*#__PURE__*/_jsx(LinearGradientComponent, {
        colors: bottomRightColors,
        locations: bottomRightLocations,
        style: StyleSheet.absoluteFill
      })
    }) : /*#__PURE__*/_jsx(Animated.View, {
      style: [scrollShadowStyleSheet.rightShadow, {
        width: size
      }, bottomEdgeShadowStyle],
      children: /*#__PURE__*/_jsx(LinearGradientComponent, {
        colors: bottomRightColors,
        locations: bottomRightLocations,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0
        },
        style: StyleSheet.absoluteFill
      })
    })]
  });
});
ScrollShadowRoot.displayName = SCROLL_SHADOW_DISPLAY_NAME.ROOT;

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
//# sourceMappingURL=scroll-shadow.js.map