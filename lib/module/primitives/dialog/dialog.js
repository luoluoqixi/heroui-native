"use strict";

import { createContext, forwardRef, useContext, useEffect, useId } from 'react';
import { BackHandler, Pressable, Text, View } from 'react-native';
import { useControllableState } from "../../helpers/internal/hooks/index.js";
import { Portal as PortalPrimitive } from "../portal/index.js";
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const DialogContext = /*#__PURE__*/createContext(null);
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  isOpen: isOpenProp,
  isDefaultOpen,
  onOpenChange: onOpenChangeProp,
  ...viewProps
}, ref) => {
  const [isOpen = false, onOpenChange] = useControllableState({
    prop: isOpenProp,
    defaultProp: isDefaultOpen,
    onChange: onOpenChangeProp
  });
  const nativeID = useId();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(DialogContext.Provider, {
    value: {
      isOpen,
      onOpenChange,
      nativeID
    },
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});
function useRootContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog compound components cannot be rendered outside the Dialog component');
  }
  return context;
}
Root.displayName = 'HeroUINative.Primitive.Dialog.Root';

// --------------------------------------------------

const Trigger = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  disabled = false,
  ...props
}, ref) => {
  const {
    isOpen,
    onOpenChange
  } = useRootContext();
  function onPress(ev) {
    if (disabled) return;
    const newValue = !isOpen;
    onOpenChange(newValue);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-disabled": disabled ?? undefined,
    role: "button",
    onPress: onPress,
    disabled: disabled ?? undefined,
    ...props
  });
});
Trigger.displayName = 'HeroUINative.Primitive.Dialog.Trigger';

// --------------------------------------------------

/**
 * @warning when using a custom `<PortalHost />`, you might have to adjust the Content's offset to account for nav elements like headers.
 */
function Portal({
  forceMount,
  hostName,
  children
}) {
  const value = useRootContext();
  if (!forceMount) {
    if (!value.isOpen) {
      return null;
    }
  }
  return /*#__PURE__*/_jsx(PortalPrimitive, {
    hostName: hostName,
    name: `${value.nativeID}_portal`,
    children: /*#__PURE__*/_jsx(DialogContext.Provider, {
      value: value,
      children: children
    })
  });
}

// --------------------------------------------------

const Overlay = /*#__PURE__*/forwardRef(({
  asChild,
  forceMount,
  isCloseOnPress = true,
  onPress: OnPressProp,
  ...props
}, ref) => {
  const {
    isOpen,
    onOpenChange
  } = useRootContext();
  function onPress(ev) {
    if (isCloseOnPress) {
      onOpenChange(!isOpen);
    }
    OnPressProp?.(ev);
  }
  if (!forceMount) {
    if (!isOpen) {
      return null;
    }
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    onPress: onPress,
    ...props
  });
});
Overlay.displayName = 'HeroUINative.Primitive.Dialog.Overlay';

// --------------------------------------------------

const Content = /*#__PURE__*/forwardRef(({
  asChild,
  forceMount,
  ...props
}, ref) => {
  const {
    isOpen,
    nativeID,
    onOpenChange
  } = useRootContext();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onOpenChange(false);
      return true;
    });
    return () => {
      backHandler.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!forceMount) {
    if (!isOpen) {
      return null;
    }
  }
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: "dialog",
    nativeID: nativeID,
    "aria-labelledby": `${nativeID}_label`,
    "aria-describedby": `${nativeID}_desc`,
    "aria-modal": true,
    ...props
  });
});
Content.displayName = 'HeroUINative.Primitive.Dialog.Content';

// --------------------------------------------------

const Close = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  disabled = false,
  ...props
}, ref) => {
  const {
    onOpenChange
  } = useRootContext();
  function onPress(ev) {
    if (disabled) return;
    onOpenChange(false);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    "aria-disabled": disabled ?? undefined,
    role: "button",
    onPress: onPress,
    disabled: disabled ?? undefined,
    ...props
  });
});
Close.displayName = 'HeroUINative.Primitive.Dialog.Close';

// --------------------------------------------------

const Title = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    nativeID
  } = useRootContext();
  return /*#__PURE__*/_jsx(Text, {
    ref: ref,
    role: "heading",
    nativeID: `${nativeID}_label`,
    ...props
  });
});
Title.displayName = 'HeroUINative.Primitive.Dialog.Title';

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
Description.displayName = 'HeroUINative.Primitive.Dialog.Description';

// --------------------------------------------------

export { Close, Content, Description, Overlay, Portal, Root, Title, Trigger, useRootContext };
//# sourceMappingURL=dialog.js.map