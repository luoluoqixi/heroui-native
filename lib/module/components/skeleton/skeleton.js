"use strict";

import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import LinearGradientComponent from "./linear-gradient.js";
import { SkeletonAnimationProvider, useSkeletonAnimation, useSkeletonPulseAnimation, useSkeletonRootAnimation, useSkeletonShimmerAnimation } from "./skeleton.animation.js";
import { DISPLAY_NAME } from "./skeleton.constants.js";
import { skeletonClassNames, skeletonStyleSheet } from "./skeleton.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const ShimmerAnimation = ({
  animation,
  isAnimatedStyleActive = true
}) => {
  const {
    rContainerStyle,
    gradientColors
  } = useSkeletonShimmerAnimation({
    animation
  });
  const shimmerStyle = isAnimatedStyleActive ? [StyleSheet.absoluteFill, skeletonStyleSheet.borderCurve, rContainerStyle] : [StyleSheet.absoluteFill, skeletonStyleSheet.borderCurve];
  return /*#__PURE__*/_jsx(Animated.View, {
    style: shimmerStyle,
    children: /*#__PURE__*/_jsx(LinearGradientComponent, {
      colors: gradientColors
    })
  });
};

// --------------------------------------------------

const PulseAnimation = ({
  children,
  animation,
  isAnimatedStyleActive = true
}) => {
  const {
    variant
  } = useSkeletonAnimation();
  const {
    rContainerStyle
  } = useSkeletonPulseAnimation({
    animation
  });
  if (variant === 'pulse') {
    const pulseStyle = isAnimatedStyleActive ? rContainerStyle : undefined;
    return /*#__PURE__*/_jsx(Animated.View, {
      style: pulseStyle,
      children: children
    });
  }
  return children;
};

// --------------------------------------------------

const Skeleton = props => {
  const {
    children,
    isLoading = true,
    variant = 'shimmer',
    animation,
    isAnimatedStyleActive = true,
    className,
    style,
    ...restProps
  } = props;
  const [componentWidth, setComponentWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const progress = useSharedValue(0);
  const {
    width: screenWidth
  } = useWindowDimensions();
  const {
    isAllAnimationsDisabled,
    entering,
    exiting
  } = useSkeletonRootAnimation({
    animation,
    isLoading,
    variant,
    progress
  });
  const rootClassName = skeletonClassNames.root({
    className
  });
  const handleLayout = useCallback(event => {
    if (componentWidth === 0) {
      const {
        width,
        x
      } = event.nativeEvent.layout;
      setComponentWidth(width);
      setOffset(x);
    }
  }, [componentWidth]);
  const animationContextValue = useMemo(() => ({
    isLoading,
    variant,
    progress,
    componentWidth,
    offset,
    screenWidth
  }), [isLoading, variant, progress, componentWidth, offset, screenWidth]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  if (!isLoading) {
    return /*#__PURE__*/_jsx(Animated.View, {
      entering: entering,
      exiting: exiting,
      children: children
    }, "content");
  }
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(SkeletonAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(PulseAnimation, {
        animation: animation,
        isAnimatedStyleActive: isAnimatedStyleActive,
        children: /*#__PURE__*/_jsx(Animated.View, {
          entering: entering,
          exiting: exiting,
          onLayout: handleLayout,
          style: [skeletonStyleSheet.borderCurve, style],
          className: rootClassName,
          ...restProps,
          children: variant === 'shimmer' && componentWidth > 0 && /*#__PURE__*/_jsx(ShimmerAnimation, {
            animation: animation,
            isAnimatedStyleActive: isAnimatedStyleActive
          })
        }, "skeleton")
      })
    })
  });
};

// --------------------------------------------------

Skeleton.displayName = DISPLAY_NAME.SKELETON;

/**
 * Skeleton component for displaying loading placeholders
 *
 * @component Skeleton - Animated loading placeholder that can display shimmer or pulse effects.
 * Shows skeleton state when isLoading is true, otherwise displays children content.
 * Supports customizable animations through the animation prop with shimmer and pulse configurations.
 * Shape and size are controlled via className for maximum flexibility.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/skeleton
 */
export default Skeleton;
//# sourceMappingURL=skeleton.js.map