"use strict";

import { forwardRef, useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { createContext, getElementWithDefault } from "../../helpers/internal/utils/index.js";
import * as ActivityIndicatorPrimitives from "../../primitives/activity-indicator/index.js";
import { SpinnerIcon } from "./spinner-icon.js";
import { useSpinnerIndicatorAnimation, useSpinnerRootAnimation } from "./spinner.animation.js";
import { DISPLAY_NAME, SPINNER_SIZE_MAP } from "./spinner.constants.js";
import { spinnerClassNames } from "./spinner.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedRoot = Animated.createAnimatedComponent(ActivityIndicatorPrimitives.Root);
const AnimatedIndicator = Animated.createAnimatedComponent(ActivityIndicatorPrimitives.Indicator);
const [SpinnerProvider, useSpinnerContext] = createContext({
  name: 'SpinnerContext'
});
const SpinnerRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    size = 'md',
    color = 'default',
    isLoading = true,
    className,
    animation,
    ...restProps
  } = props;
  const rootClassName = spinnerClassNames.root({
    size,
    className
  });
  const {
    entering,
    exiting,
    isAllAnimationsDisabled
  } = useSpinnerRootAnimation({
    animation
  });
  const indicatorElement = useMemo(() => getElementWithDefault(children, DISPLAY_NAME.INDICATOR, /*#__PURE__*/_jsx(SpinnerIndicator, {})), [children]);
  const contextValue = useMemo(() => ({
    size,
    color,
    isLoading
  }), [size, color, isLoading]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(SpinnerProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(AnimatedRoot, {
        ref: ref,
        entering: entering,
        exiting: exiting,
        isLoading: isLoading,
        className: rootClassName,
        ...restProps,
        children: children || indicatorElement
      })
    })
  });
});

// --------------------------------------------------

const SpinnerIndicator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    style,
    iconProps,
    animation,
    isAnimatedStyleActive = true,
    ...restProps
  } = props;
  const {
    size,
    color,
    isLoading
  } = useSpinnerContext();
  const [themeColorAccent, themeColorSuccess, themeColorWarning, themeColorDanger] = useThemeColor(['accent', 'success', 'warning', 'danger']);
  const indicatorClassName = spinnerClassNames.indicator({
    className
  });
  const iconSize = SPINNER_SIZE_MAP[size];
  const colorMap = {
    default: themeColorAccent,
    success: themeColorSuccess,
    warning: themeColorWarning,
    danger: themeColorDanger
  };
  const iconColor = colorMap[color] || color;
  const {
    rContainerStyle
  } = useSpinnerIndicatorAnimation({
    animation,
    isLoading
  });
  const indicatorStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  if (!isLoading) {
    return null;
  }
  return /*#__PURE__*/_jsx(AnimatedIndicator, {
    ref: ref,
    className: indicatorClassName,
    style: indicatorStyle,
    ...restProps,
    children: children || /*#__PURE__*/_jsx(SpinnerIcon, {
      width: iconProps?.width ?? iconSize,
      height: iconProps?.height ?? iconSize,
      color: iconProps?.color ?? iconColor
    })
  });
});

// --------------------------------------------------

SpinnerRoot.displayName = DISPLAY_NAME.ROOT;
SpinnerIndicator.displayName = DISPLAY_NAME.INDICATOR;

/**
 * Compound Spinner component with sub-components
 *
 * @component Spinner - Main container that controls loading state, size, and color.
 * Renders a default animated indicator if no children provided.
 *
 * @component Spinner.Indicator - Optional sub-component for customizing animation configuration
 * and icon appearance. Accepts custom children to replace the default icon.
 * When omitted, Spinner uses a default indicator with standard animation settings.
 *
 * Props flow from Spinner to Indicator via context (size, color, isLoading).
 * The indicator only renders when isLoading is true.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/spinner
 */
const CompoundSpinner = Object.assign(SpinnerRoot, {
  /** @optional Customize animation configuration and icon appearance */
  Indicator: SpinnerIndicator
});
export default CompoundSpinner;
//# sourceMappingURL=spinner.js.map