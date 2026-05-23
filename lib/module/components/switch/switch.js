"use strict";

import { forwardRef, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import * as SwitchPrimitives from "../../primitives/switch/index.js";
import { SwitchAnimationProvider, useSwitchRootAnimation, useSwitchThumbAnimation } from "./switch.animation.js";
import { DISPLAY_NAME } from "./switch.constants.js";
import { switchClassNames, switchStyleSheet } from "./switch.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedSwitchRoot = Animated.createAnimatedComponent(SwitchPrimitives.Root);
const AnimatedSwitchThumb = Animated.createAnimatedComponent(SwitchPrimitives.Thumb);
const [SwitchProvider, useSwitch] = createContext({
  name: 'SwitchContext'
});

// --------------------------------------------------

const Switch = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    isDisabled,
    isSelected,
    onSelectedChange,
    className,
    style,
    animation,
    isAnimatedStyleActive = true,
    onPressIn,
    onPressOut,
    ...restProps
  } = props;
  const rootClassName = switchClassNames.root({
    isDisabled,
    className
  });
  const {
    rContainerStyle,
    isSwitchPressed,
    contentContainerWidth,
    isAllAnimationsDisabled
  } = useSwitchRootAnimation({
    animation,
    isSelected
  });
  const rootStyle = isAnimatedStyleActive ? [switchStyleSheet.borderCurve, rContainerStyle, style] : [switchStyleSheet.borderCurve, style];
  const contextValue = useMemo(() => ({
    isSelected,
    isDisabled
  }), [isSelected, isDisabled]);
  const animationContextValue = useMemo(() => ({
    isSwitchPressed,
    contentContainerWidth
  }), [isSwitchPressed, contentContainerWidth]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const handlePressIn = useCallback(event => {
    isSwitchPressed.set(true);
    onPressIn?.(event);
  }, [isSwitchPressed, onPressIn]);
  const handlePressOut = useCallback(event => {
    isSwitchPressed.set(false);
    onPressOut?.(event);
  }, [isSwitchPressed, onPressOut]);
  const renderProps = {
    isSelected,
    isDisabled: isDisabled ?? false
  };
  const content = typeof children === 'function' ? children(renderProps) : children ?? /*#__PURE__*/_jsx(SwitchThumb, {});
  return /*#__PURE__*/_jsx(SwitchProvider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContextValue,
      children: /*#__PURE__*/_jsx(SwitchAnimationProvider, {
        value: animationContextValue,
        children: /*#__PURE__*/_jsx(AnimatedSwitchRoot, {
          ref: ref,
          className: rootClassName,
          style: rootStyle,
          isSelected: isSelected,
          onSelectedChange: onSelectedChange,
          isDisabled: isDisabled,
          onPressIn: handlePressIn,
          onPressOut: handlePressOut,
          onLayout: e => {
            contentContainerWidth.set(e.nativeEvent.layout.width);
          },
          ...restProps,
          children: content
        })
      })
    })
  });
});

// --------------------------------------------------

const SwitchThumb = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    style,
    animation,
    isAnimatedStyleActive = true,
    ...restProps
  } = props;
  const {
    isSelected,
    isDisabled
  } = useSwitch();
  const thumbClassName = switchClassNames.thumb({
    className
  });
  const {
    rContainerStyle
  } = useSwitchThumbAnimation({
    animation,
    style: style,
    className: thumbClassName,
    isSelected
  });
  const thumbStyle = isAnimatedStyleActive ? [switchStyleSheet.borderCurve, rContainerStyle, style] : [switchStyleSheet.borderCurve, style];
  const renderProps = {
    isSelected,
    isDisabled: isDisabled ?? false
  };
  const content = typeof children === 'function' ? children(renderProps) : children;
  return /*#__PURE__*/_jsx(AnimatedSwitchThumb, {
    ref: ref,
    className: thumbClassName,
    style: thumbStyle,
    ...restProps,
    children: content
  });
});

// --------------------------------------------------

const SwitchStartContent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const startContentClassName = switchClassNames.startContent({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: startContentClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const SwitchEndContent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const endContentClassName = switchClassNames.endContent({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: endContentClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

Switch.displayName = DISPLAY_NAME.SWITCH_ROOT;
SwitchThumb.displayName = DISPLAY_NAME.SWITCH_THUMB;
SwitchStartContent.displayName = DISPLAY_NAME.SWITCH_START_CONTENT;
SwitchEndContent.displayName = DISPLAY_NAME.SWITCH_END_CONTENT;

/**
 * Compound Switch component with sub-components
 *
 * @component Switch - Main container that handles toggle state and user interaction.
 * Renders default thumb if no children provided. Animates scale (on press) and background
 * color based on selection state. Acts as a pressable area for toggling. Supports render
 * function children for dynamic content.
 *
 * @component Switch.Thumb - Optional sliding thumb element that moves between positions.
 * Uses spring animation for smooth transitions. Can contain custom content like icons
 * or be customized with different styles and animations. Supports render function children.
 *
 * @component Switch.StartContent - Optional content displayed on the left side of the switch.
 * Typically used for icons or text that appear when switch is off. Positioned absolutely
 * within the switch container.
 *
 * @component Switch.EndContent - Optional content displayed on the right side of the switch.
 * Typically used for icons or text that appear when switch is on. Positioned absolutely
 * within the switch container.
 *
 * Props flow from Switch to sub-components via context (isSelected, isDisabled).
 * The switch supports controlled and uncontrolled modes through isSelected/onSelectedChange.
 * Animations can be customized or disabled at both root and component levels.
 * Content components provide visual feedback without affecting the toggle functionality.
 * Integrates with ControlField for press state sharing and larger touch targets.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/switch
 */
const CompoundSwitch = Object.assign(Switch, {
  /** @optional Sliding thumb with spring animations */
  Thumb: SwitchThumb,
  /** @optional Content shown when switch is off (left side) */
  StartContent: SwitchStartContent,
  /** @optional Content shown when switch is on (right side) */
  EndContent: SwitchEndContent
});
export { useSwitch };
export default CompoundSwitch;
//# sourceMappingURL=switch.js.map