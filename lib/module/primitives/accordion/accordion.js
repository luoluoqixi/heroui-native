"use strict";

import { createContext, forwardRef, useContext, useId } from 'react';
import { Pressable, View } from 'react-native';
import { useControllableState } from "../../helpers/internal/hooks/index.js";
import * as Slot from "../slot/index.js";
import { isItemSelected, toStringArray } from "./accordion.utils.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AccordionContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  selectionMode = 'single',
  isDisabled,
  isCollapsible = true,
  value: valueProp,
  onValueChange: onValueChangeProps,
  defaultValue,
  ...viewProps
}, ref) => {
  const [value = selectionMode === 'multiple' ? [] : undefined, onValueChange] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChangeProps
  });
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(AccordionContext.Provider, {
    value: {
      selectionMode,
      isDisabled,
      isCollapsible,
      value,
      onValueChange
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});
Root.displayName = 'HeroUINative.Primitive.Accordion.Root';
function useRootContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion compound components cannot be rendered outside the Accordion component');
  }
  return context;
}

// --------------------------------------------------

const AccordionItemContext = /*#__PURE__*/createContext(null);
const Item = /*#__PURE__*/forwardRef(({
  asChild,
  value,
  isDisabled,
  ...viewProps
}, ref) => {
  const {
    value: rootValue
  } = useRootContext();
  const nativeID = useId();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(AccordionItemContext.Provider, {
    value: {
      value,
      isDisabled,
      nativeID,
      isExpanded: isItemSelected(rootValue, value)
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});
Item.displayName = 'HeroUINative.Primitive.Accordion.Item';
function useItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionItem compound components cannot be rendered outside the AccordionItem component');
  }
  return context;
}

// --------------------------------------------------

const Header = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const {
    isDisabled: rootDisabled
  } = useRootContext();
  const {
    isDisabled: itemDisabled,
    isExpanded
  } = useItemContext();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "heading",
    "aria-expanded": isExpanded,
    "aria-disabled": rootDisabled ?? itemDisabled,
    ...props
  });
});
Header.displayName = 'HeroUINative.Primitive.Accordion.Header';

// --------------------------------------------------

const Trigger = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  isDisabled: disabledProp,
  ...props
}, ref) => {
  const {
    isDisabled: rootDisabled,
    selectionMode,
    onValueChange,
    value: rootValue,
    isCollapsible
  } = useRootContext();
  const {
    nativeID,
    isDisabled: itemDisabled,
    value,
    isExpanded
  } = useItemContext();
  function onPress(ev) {
    if (rootDisabled || itemDisabled) return;
    if (selectionMode === 'single') {
      const newValue = isCollapsible ? value === rootValue ? undefined : value : value;
      onValueChange(newValue);
    }
    if (selectionMode === 'multiple') {
      const rootToArray = toStringArray(rootValue);
      const newValue = isCollapsible ? rootToArray.includes(value) ? rootToArray.filter(val => val !== value) : rootToArray.concat(value) : [...new Set(rootToArray.concat(value))];
      // @ts-ignore - `newValue` is of type `string[]` which is OK
      onValueChange(newValue);
    }
    onPressProp?.(ev);
  }
  const isTriggerDisabled = disabledProp || rootDisabled || itemDisabled;
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    nativeID: nativeID,
    "aria-disabled": isTriggerDisabled,
    role: "button",
    onPress: onPress,
    accessibilityState: {
      expanded: isExpanded,
      disabled: isTriggerDisabled
    },
    disabled: isTriggerDisabled,
    ...props
  });
});
Trigger.displayName = 'HeroUINative.Primitive.Accordion.Trigger';

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
Indicator.displayName = 'HeroUINative.Primitive.Accordion.Indicator';

// --------------------------------------------------

const Content = /*#__PURE__*/forwardRef(({
  asChild,
  forceMount,
  ...props
}, ref) => {
  const {
    selectionMode
  } = useRootContext();
  const {
    nativeID,
    isExpanded
  } = useItemContext();
  if (!forceMount) {
    if (!isExpanded) {
      return null;
    }
  }
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-hidden": !(forceMount || isExpanded),
    "aria-labelledby": nativeID,
    role: selectionMode === 'single' ? 'region' : 'summary',
    ...props
  });
});
Content.displayName = 'HeroUINative.Primitive.Accordion.Content';
export { Content, Header, Indicator, Item, Root, Trigger, useItemContext, useRootContext };
//# sourceMappingURL=accordion.js.map