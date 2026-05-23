"use strict";

import { createContext, forwardRef, useContext } from 'react';
import { Pressable, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const RadioGroupContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  value,
  onValueChange,
  isDisabled = false,
  isInvalid = false,
  variant,
  ...viewProps
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(RadioGroupContext.Provider, {
    value: {
      value,
      isDisabled,
      onValueChange,
      isInvalid,
      variant
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      role: "radiogroup",
      ...viewProps
    })
  });
});
Root.displayName = 'HeroUINative.Primitive.RadioGroup.Root';
function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioGroup compound components cannot be rendered outside the RadioGroup component');
  }
  return context;
}

// --------------------------------------------------

const Item = /*#__PURE__*/forwardRef(({
  asChild,
  value: itemValue,
  isDisabled: disabledProp = false,
  onPress: onPressProp,
  ...props
}, ref) => {
  const {
    isDisabled,
    value,
    onValueChange
  } = useRadioGroupContext();
  function onPress(ev) {
    if (isDisabled || disabledProp) return;
    onValueChange(itemValue);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "radio",
    onPress: onPress,
    "aria-checked": value === itemValue,
    disabled: (isDisabled || disabledProp) ?? false,
    accessibilityState: {
      disabled: (isDisabled || disabledProp) ?? false,
      checked: value === itemValue
    },
    ...props
  });
});
Item.displayName = 'HeroUINative.Primitive.RadioGroup.Item';

// --------------------------------------------------

const Indicator = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "presentation",
    ...props
  });
});
Indicator.displayName = 'HeroUINative.Primitive.RadioGroup.Indicator';
export { Indicator, Item, Root, useRadioGroupContext };
//# sourceMappingURL=radio-group.js.map