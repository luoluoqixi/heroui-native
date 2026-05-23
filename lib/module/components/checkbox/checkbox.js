"use strict";

import { forwardRef, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useIsOnSurface, useThemeColor } from "../../helpers/external/hooks/index.js";
import { AnimatedCheckIcon, CheckIcon } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import * as CheckboxPrimitives from "../../primitives/checkbox/index.js";
import { CheckboxAnimationProvider, useCheckboxIndicatorAnimation, useCheckboxRootAnimation } from "./checkbox.animation.js";
import { DEFAULT_HIT_SLOP, DISPLAY_NAME } from "./checkbox.constants.js";
import { checkboxClassNames, checkboxStyleSheet } from "./checkbox.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedRootView = Animated.createAnimatedComponent(CheckboxPrimitives.Root);
const AnimatedIndicatorView = Animated.createAnimatedComponent(CheckboxPrimitives.Indicator);
const useCheckbox = CheckboxPrimitives.useCheckboxContext;

// --------------------------------------------------

const CheckboxRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    isSelected,
    onSelectedChange,
    isDisabled = false,
    isInvalid = false,
    variant,
    hitSlop = DEFAULT_HIT_SLOP,
    className,
    style,
    onPressIn,
    onPressOut,
    animation,
    isAnimatedStyleActive = true,
    ...restProps
  } = props;
  const isOnSurfaceAutoDetected = useIsOnSurface();
  const finalVariant = variant !== undefined ? variant : isOnSurfaceAutoDetected ? 'secondary' : 'primary';
  const rootClassName = checkboxClassNames.root({
    variant: finalVariant,
    isSelected,
    isDisabled,
    isInvalid,
    className
  });
  const {
    rContainerStyle,
    isCheckboxPressed,
    isAllAnimationsDisabled
  } = useCheckboxRootAnimation({
    animation
  });
  const rootStyle = isAnimatedStyleActive ? [rContainerStyle, checkboxStyleSheet.root, style] : [checkboxStyleSheet.root, style];
  const animationContextValue = useMemo(() => ({
    isCheckboxPressed
  }), [isCheckboxPressed]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const handlePressIn = useCallback(event => {
    isCheckboxPressed.set(true);
    onPressIn?.(event);
  }, [isCheckboxPressed, onPressIn]);
  const handlePressOut = useCallback(event => {
    isCheckboxPressed.set(false);
    onPressOut?.(event);
  }, [isCheckboxPressed, onPressOut]);
  const renderProps = {
    isSelected,
    isInvalid,
    isDisabled
  };
  const content = typeof children === 'function' ? children(renderProps) : children ?? /*#__PURE__*/_jsx(CheckboxIndicator, {});
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(CheckboxAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(AnimatedRootView, {
        ref: ref,
        className: rootClassName,
        isSelected: isSelected,
        onSelectedChange: onSelectedChange,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        hitSlop: hitSlop,
        onPressIn: handlePressIn,
        onPressOut: handlePressOut,
        style: rootStyle,
        ...restProps,
        children: content
      })
    })
  });
});

// --------------------------------------------------

const CheckboxIndicator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    iconProps,
    className,
    style,
    animation,
    isAnimatedStyleActive = true,
    ...restProps
  } = props;
  const {
    isSelected,
    isDisabled,
    isInvalid
  } = useCheckbox();
  const themeColorAccentForeground = useThemeColor('accent-foreground');
  const iconSize = iconProps?.size;
  const iconStrokeWidth = iconProps?.strokeWidth;
  const iconColor = iconProps?.color ?? themeColorAccentForeground;
  const iconEnterDuration = iconProps?.enterDuration;
  const iconExitDuration = iconProps?.exitDuration;
  const indicatorClassName = checkboxClassNames.indicator({
    isInvalid,
    className
  });
  const {
    rContainerStyle,
    isAnimationDisabled
  } = useCheckboxIndicatorAnimation({
    animation,
    isSelected
  });
  const indicatorStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  const renderProps = {
    isSelected,
    isInvalid: isInvalid ?? false,
    isDisabled: isDisabled ?? false
  };
  const content = typeof children === 'function' ? children(renderProps) : children ?? (isAnimationDisabled ? /*#__PURE__*/_jsx(View, {
    className: "translate-y-px",
    children: /*#__PURE__*/_jsx(CheckIcon, {
      size: iconSize,
      color: iconColor
    })
  }) : /*#__PURE__*/_jsx(AnimatedCheckIcon, {
    size: iconSize,
    strokeWidth: iconStrokeWidth,
    color: iconColor,
    isSelected: isSelected,
    enterDuration: iconEnterDuration,
    exitDuration: iconExitDuration
  }));
  return /*#__PURE__*/_jsx(AnimatedIndicatorView, {
    ref: ref,
    className: indicatorClassName,
    style: indicatorStyle,
    ...restProps,
    children: content
  });
});

// --------------------------------------------------

CheckboxRoot.displayName = DISPLAY_NAME.CHECKBOX_ROOT;
CheckboxIndicator.displayName = DISPLAY_NAME.CHECKBOX_INDICATOR;

/**
 * Compound Checkbox component with sub-components
 *
 * @component Checkbox - Main container that handles selection state and user interaction.
 * Renders default indicator with checkmark if no children provided.
 * Animates background and border color based on selection state.
 *
 * @component Checkbox.Indicator - Optional checkmark container that scales in when selected.
 * Renders default check icon if no children provided. Handles enter/exit animations
 * and can be replaced with custom indicators.
 *
 * Props flow from Checkbox to sub-components via context (isSelected).
 * The checkbox supports controlled and uncontrolled modes through isSelected/onSelectedChange.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/checkbox
 */
const CompoundCheckbox = Object.assign(CheckboxRoot, {
  /** @optional Custom indicator with scale animations */
  Indicator: CheckboxIndicator
});
export { useCheckbox };
export default CompoundCheckbox;
//# sourceMappingURL=checkbox.js.map