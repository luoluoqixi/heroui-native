"use strict";

import { createContext, forwardRef, useContext } from 'react';
import { Pressable, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const CheckboxContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  isDisabled = false,
  isSelected,
  onSelectedChange,
  isInvalid = false,
  nativeID,
  ...props
}, ref) => {
  return /*#__PURE__*/_jsx(CheckboxContext.Provider, {
    value: {
      isDisabled,
      isSelected,
      onSelectedChange,
      isInvalid,
      nativeID
    },
    children: /*#__PURE__*/_jsx(Trigger, {
      ref: ref,
      ...props
    })
  });
});
Root.displayName = 'HeroUINative.Primitive.Checkbox.Root';
function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('Checkbox compound components cannot be rendered outside the Checkbox component');
  }
  return context;
}

// --------------------------------------------------

const Trigger = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  ...props
}, ref) => {
  const {
    isDisabled,
    isSelected,
    onSelectedChange,
    nativeID
  } = useCheckboxContext();
  function onPress(ev) {
    if (isDisabled) return;
    const newValue = !isSelected;
    onSelectedChange?.(newValue);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    nativeID: nativeID,
    "aria-disabled": isDisabled,
    role: "checkbox",
    "aria-checked": isSelected,
    onPress: onPress,
    accessibilityState: {
      checked: isSelected,
      disabled: isDisabled
    },
    disabled: isDisabled,
    ...props
  });
});
Trigger.displayName = 'HeroUINative.Primitive.Checkbox.Trigger';

// --------------------------------------------------

const Indicator = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const {
    isSelected,
    isDisabled
  } = useCheckboxContext();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-disabled": isDisabled,
    "aria-hidden": !isSelected,
    role: 'presentation',
    ...props
  });
});
Indicator.displayName = 'HeroUINative.Primitive.Checkbox.Indicator';
export { Indicator, Root, useCheckboxContext };
//# sourceMappingURL=checkbox.js.map