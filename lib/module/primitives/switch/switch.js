"use strict";

import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const Root = /*#__PURE__*/forwardRef(({
  asChild,
  isSelected,
  onSelectedChange,
  isDisabled,
  'onPress': onPressProp,
  'aria-valuetext': ariaValueText,
  ...props
}, ref) => {
  function onPress(ev) {
    if (isDisabled) return;
    const newValue = !isSelected;
    onSelectedChange?.(newValue);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-disabled": isDisabled,
    role: "switch",
    "aria-checked": isSelected,
    "aria-valuetext": ariaValueText ?? isSelected ? 'on' : 'off',
    onPress: onPress,
    accessibilityState: {
      checked: isSelected,
      disabled: isDisabled
    },
    disabled: isDisabled,
    ...props
  });
});
Root.displayName = 'HeroUINative.Primitive.Switch.Root';

// --------------------------------------------------

const Thumb = /*#__PURE__*/forwardRef(({
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
Thumb.displayName = 'HeroUINative.Primitive.Switch.Thumb';
export { Root, Thumb };
//# sourceMappingURL=switch.js.map