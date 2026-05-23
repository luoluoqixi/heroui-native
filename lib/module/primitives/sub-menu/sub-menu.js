"use strict";

import { forwardRef, useId } from 'react';
import { Pressable, View } from 'react-native';
import { useControllableState } from "../../helpers/internal/hooks/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import * as Slot from "../../primitives/slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [SubMenuProvider, useSubMenuContext] = createContext({
  strict: false
});

// --------------------------------------------------

const Root = /*#__PURE__*/forwardRef(({
  asChild,
  isOpen: isOpenProp,
  isDefaultOpen,
  onOpenChange: onOpenChangeProp,
  isDisabled = false,
  ...viewProps
}, ref) => {
  const [isOpen = false, onOpenChange] = useControllableState({
    prop: isOpenProp,
    defaultProp: isDefaultOpen,
    onChange: onOpenChangeProp
  });
  const nativeID = useId();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(SubMenuProvider, {
    value: {
      isOpen,
      onOpenChange,
      isDisabled,
      nativeID
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});

// --------------------------------------------------

const Trigger = /*#__PURE__*/forwardRef(({
  asChild,
  textValue,
  onPress: onPressProp,
  isDisabled: isDisabledProp = false,
  ...props
}, ref) => {
  const {
    nativeID,
    isOpen,
    onOpenChange,
    isDisabled: isDisabledRoot
  } = useSubMenuContext();
  const isDisabled = isDisabledProp || isDisabledRoot;
  function onPress(ev) {
    if (isDisabled) return;
    onOpenChange(!isOpen);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-valuetext": textValue,
    role: "menuitem",
    "aria-expanded": isOpen,
    accessibilityState: {
      expanded: isOpen,
      disabled: isDisabled
    },
    nativeID: nativeID,
    onPress: onPress,
    disabled: isDisabled,
    "aria-disabled": isDisabled,
    ...props
  });
});

// --------------------------------------------------

const Content = /*#__PURE__*/forwardRef(({
  asChild = false,
  forceMount,
  ...props
}, ref) => {
  const {
    isOpen,
    nativeID
  } = useSubMenuContext();
  if (!forceMount) {
    if (!isOpen) {
      return null;
    }
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "group",
    "aria-labelledby": nativeID,
    ...props
  });
});

// --------------------------------------------------

Root.displayName = 'HeroUINative.SubMenu.Root';
Trigger.displayName = 'HeroUINative.SubMenu.Trigger';
Content.displayName = 'HeroUINative.SubMenu.Content';
export { Content, Root, Trigger, useSubMenuContext };
//# sourceMappingURL=sub-menu.js.map