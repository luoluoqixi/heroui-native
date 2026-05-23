"use strict";

import React, { cloneElement, forwardRef, useCallback, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { hasProp } from "../../helpers/internal/utils/index.js";
import { useSharedValue } from 'react-native-reanimated';
import { AnimationSettingsProvider, FormFieldProvider } from "../../helpers/internal/contexts/index.js";
import { Checkbox } from "../checkbox/index.js";
import { Radio } from "../radio/index.js";
import { Switch } from "../switch/index.js";
import { useControlFieldRootAnimation } from "./control-field.animation.js";
import { DISPLAY_NAME } from "./control-field.constants.js";
import { ControlFieldProvider, useControlField } from "./control-field.context.js";
import { controlFieldClassNames } from "./control-field.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const ControlField = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    isSelected,
    onSelectedChange,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    onPressIn,
    onPressOut,
    animation,
    ...restProps
  } = props;
  const renderProps = useMemo(() => ({
    isSelected,
    isDisabled: isDisabled ?? false,
    isInvalid: isInvalid ?? false
  }), [isSelected, isDisabled, isInvalid]);
  const content = typeof children === 'function' ? children(renderProps) : children;
  const rootClassName = controlFieldClassNames.root({
    className
  });
  const {
    isAllAnimationsDisabled
  } = useControlFieldRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const isPressed = useSharedValue(false);
  const handlePress = e => {
    if (!isDisabled && onSelectedChange && isSelected !== undefined) {
      onSelectedChange(!isSelected);
      if (props.onPress && typeof props.onPress === 'function') {
        props.onPress(e);
      }
    }
  };
  const handlePressIn = useCallback(e => {
    isPressed.set(true);
    if (onPressIn && typeof onPressIn === 'function') {
      onPressIn(e);
    }
  }, [isPressed, onPressIn]);
  const handlePressOut = useCallback(e => {
    isPressed.set(false);
    if (onPressOut && typeof onPressOut === 'function') {
      onPressOut(e);
    }
  }, [isPressed, onPressOut]);
  const contextValue = useMemo(() => ({
    isSelected,
    onSelectedChange,
    isDisabled,
    isInvalid,
    isPressed
  }), [isSelected, onSelectedChange, isDisabled, isInvalid, isPressed]);
  const formFieldContextValue = useMemo(() => ({
    isDisabled: isDisabled ?? false,
    isInvalid: isInvalid ?? false,
    isRequired: isRequired ?? false,
    hasFieldPadding: false
  }), [isDisabled, isInvalid, isRequired]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(FormFieldProvider, {
      value: formFieldContextValue,
      children: /*#__PURE__*/_jsx(ControlFieldProvider, {
        value: contextValue,
        children: /*#__PURE__*/_jsx(Pressable, {
          ref: ref,
          className: rootClassName,
          onPress: handlePress,
          onPressIn: handlePressIn,
          onPressOut: handlePressOut,
          disabled: isDisabled,
          ...restProps,
          children: content
        })
      })
    })
  });
});

// --------------------------------------------------

const ControlFieldIndicator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    variant = 'switch',
    ...restProps
  } = props;
  const {
    isSelected,
    onSelectedChange,
    isDisabled,
    isInvalid
  } = useControlField();
  const indicatorClassName = controlFieldClassNames.indicator({
    className
  });
  const enhancedChildren = useMemo(() => {
    if (children) {
      if (typeof children !== 'object') return children;
      const child = children;
      return /*#__PURE__*/cloneElement(child, {
        // Only pass props from context if child doesn't already have them
        ...(isSelected !== undefined && !hasProp(child, 'isSelected') && {
          isSelected
        }),
        ...(onSelectedChange && !hasProp(child, 'onSelectedChange') && {
          onSelectedChange
        }),
        ...(isDisabled !== undefined && !hasProp(child, 'isDisabled') && {
          isDisabled
        }),
        ...(isInvalid !== undefined && !hasProp(child, 'isInvalid') && {
          isInvalid
        })
      });
    }

    // Render default component based on variant when no children provided
    if (variant === 'checkbox') {
      return /*#__PURE__*/_jsx(Checkbox, {
        isSelected: isSelected,
        onSelectedChange: onSelectedChange,
        isDisabled: isDisabled,
        isInvalid: isInvalid
      });
    }
    if (variant === 'radio') {
      return /*#__PURE__*/_jsx(Radio, {
        isSelected: isSelected,
        onSelectedChange: onSelectedChange,
        isDisabled: isDisabled,
        isInvalid: isInvalid
      });
    }
    return /*#__PURE__*/_jsx(Switch, {
      isSelected: isSelected,
      onSelectedChange: onSelectedChange,
      isDisabled: isDisabled
    });
  }, [children, variant, isSelected, onSelectedChange, isDisabled, isInvalid]);
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: indicatorClassName,
    ...restProps,
    children: enhancedChildren
  });
});

// --------------------------------------------------

ControlField.displayName = DISPLAY_NAME.CONTROL_FIELD;
ControlFieldIndicator.displayName = DISPLAY_NAME.CONTROL_FIELD_INDICATOR;

/**
 * Compound ControlField component with sub-components
 *
 * @component ControlField - Wrapper that provides consistent layout and interaction for form controls.
 * Handles press events to toggle selection state and manages disabled states.
 *
 * @component ControlField.Indicator - Container for the control component (Switch, Checkbox, Radio).
 * Automatically passes down isSelected, onSelectedChange, isDisabled, and isInvalid props.
 *
 * Props flow from ControlField to sub-components via context.
 */
const CompoundControlField = Object.assign(ControlField, {
  /** @optional Container for control component */
  Indicator: ControlFieldIndicator
});
export { useControlField } from "./control-field.context.js";
export default CompoundControlField;
//# sourceMappingURL=control-field.js.map