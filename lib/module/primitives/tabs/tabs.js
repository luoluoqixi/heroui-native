"use strict";

import { createContext, forwardRef, useContext, useId } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const TabsContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  value,
  onValueChange,
  ...viewProps
}, ref) => {
  const nativeID = useId();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(TabsContext.Provider, {
    value: {
      value,
      onValueChange,
      nativeID
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});
Root.displayName = 'HeroUINative.Primitive.Tabs.Root';
function useRootContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components cannot be rendered outside the Tabs component');
  }
  return context;
}

// --------------------------------------------------

const List = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "tablist",
    ...props
  });
});
List.displayName = 'HeroUINative.Primitive.Tabs.List';

// --------------------------------------------------

const Indicator = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "presentation",
    "aria-hidden": true,
    ...props
  });
});
Indicator.displayName = 'HeroUINative.Primitive.Tabs.Indicator';

// --------------------------------------------------

const TriggerContext = /*#__PURE__*/createContext(null);
const Trigger = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  disabled,
  value: tabValue,
  ...props
}, ref) => {
  const {
    onValueChange,
    value: rootValue,
    nativeID
  } = useRootContext();
  function onPress(ev) {
    if (disabled) return;
    onValueChange(tabValue);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  const tabNativeID = `${nativeID}-tab-${tabValue}`;
  const isSelected = rootValue === tabValue;
  return /*#__PURE__*/_jsx(TriggerContext.Provider, {
    value: {
      value: tabValue,
      nativeID: tabNativeID,
      isSelected
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      nativeID: tabNativeID,
      "aria-disabled": !!disabled,
      "aria-selected": isSelected,
      role: "tab",
      onPress: onPress,
      accessibilityState: {
        selected: isSelected,
        disabled: !!disabled
      },
      disabled: !!disabled,
      ...props
    })
  });
});
Trigger.displayName = 'HeroUINative.Primitive.Tabs.Trigger';
function useTriggerContext() {
  const context = useContext(TriggerContext);
  if (!context) {
    throw new Error('Tabs.Trigger compound components cannot be rendered outside the Tabs.Trigger component');
  }
  return context;
}

// --------------------------------------------------

const Label = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const {
    nativeID
  } = useTriggerContext();
  const Component = asChild ? Slot.Text : Text;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    nativeID: `${nativeID}-label`,
    "aria-labelledby": nativeID,
    ...props
  });
});
Label.displayName = 'HeroUINative.Primitive.Tabs.Label';

// --------------------------------------------------

const Content = /*#__PURE__*/forwardRef(({
  asChild,
  forceMount,
  value: tabValue,
  ...props
}, ref) => {
  const {
    value: rootValue,
    nativeID
  } = useRootContext();
  if (!forceMount) {
    if (rootValue !== tabValue) {
      return null;
    }
  }
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-hidden": !(forceMount || rootValue === tabValue),
    "aria-labelledby": `${nativeID}-tab-${tabValue}`,
    role: "tabpanel",
    ...props
  });
});
Content.displayName = 'HeroUINative.Primitive.Tabs.Content';
export { Content, Indicator, Label, List, Root, Trigger, useRootContext, useTriggerContext };
//# sourceMappingURL=tabs.js.map