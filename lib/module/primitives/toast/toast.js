"use strict";

import { createContext, forwardRef, useContext, useId } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const ToastContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  id,
  ...viewProps
}, ref) => {
  const generatedId = useId();
  const nativeID = id || generatedId;
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(ToastContext.Provider, {
    value: {
      nativeID
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": true,
      nativeID: nativeID,
      ...viewProps
    })
  });
});
function useRootContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast compound components cannot be rendered outside the Toast component');
  }
  return context;
}
Root.displayName = 'HeroUINative.Primitive.Toast.Root';

// --------------------------------------------------

const Title = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    nativeID
  } = useRootContext();
  return /*#__PURE__*/_jsx(Text, {
    ref: ref,
    role: "heading",
    "aria-level": 3,
    nativeID: `${nativeID}_label`,
    ...props
  });
});
Title.displayName = 'HeroUINative.Primitive.Toast.Title';

// --------------------------------------------------

const Description = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    nativeID
  } = useRootContext();
  return /*#__PURE__*/_jsx(Text, {
    ref: ref,
    nativeID: `${nativeID}_desc`,
    ...props
  });
});
Description.displayName = 'HeroUINative.Primitive.Toast.Description';

// --------------------------------------------------

const Action = /*#__PURE__*/forwardRef(({
  asChild,
  altText,
  disabled = false,
  ...props
}, ref) => {
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "button",
    "aria-disabled": disabled ?? undefined,
    "aria-label": altText,
    disabled: disabled ?? undefined,
    ...props
  });
});
Action.displayName = 'HeroUINative.Primitive.Toast.Action';

// --------------------------------------------------

const Close = /*#__PURE__*/forwardRef(({
  asChild,
  disabled = false,
  onPress: onPressProp,
  ...props
}, ref) => {
  function onPress(ev) {
    if (disabled) return;
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "button",
    "aria-label": "Close",
    "aria-disabled": disabled ?? undefined,
    onPress: onPress,
    disabled: disabled ?? undefined,
    ...props
  });
});
Close.displayName = 'HeroUINative.Primitive.Toast.Close';

// --------------------------------------------------

export { Action, Close, Description, Root, Title, useRootContext };
//# sourceMappingURL=toast.js.map