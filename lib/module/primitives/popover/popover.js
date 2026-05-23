"use strict";

import React, { forwardRef, useContext, useEffect, useId, useState } from 'react';
import { BackHandler, Pressable, View } from 'react-native';
import { useAugmentedRef, useControllableState, useRelativePosition } from "../../helpers/internal/hooks/index.js";
import { Portal as PrimitivePortal } from "../portal/index.js";
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const RootContext = /*#__PURE__*/React.createContext(null);
const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('Popover compound components cannot be rendered outside the Popover component');
  }
  return context;
};
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  isOpen: isOpenProp,
  isDefaultOpen,
  onOpenChange: onOpenChangeProp,
  isDisabled,
  presentation = 'popover',
  ...viewProps
}, ref) => {
  const [isOpen = false, onOpenChange] = useControllableState({
    prop: isOpenProp,
    defaultProp: isDefaultOpen,
    onChange: onOpenChangeProp
  });
  const [triggerPosition, setTriggerPosition] = useState(null);
  const [contentLayout, setContentLayout] = useState(null);
  const nativeID = useId();
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(RootContext.Provider, {
    value: {
      isOpen,
      onOpenChange,
      isDisabled,
      contentLayout,
      nativeID,
      setContentLayout,
      setTriggerPosition,
      triggerPosition,
      isDefaultOpen,
      presentation
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
  onPress: onPressProp,
  isDisabled = false,
  ...props
}, ref) => {
  const {
    onOpenChange,
    isOpen,
    isDisabled: isDisabledRoot,
    setTriggerPosition,
    setContentLayout,
    isDefaultOpen,
    triggerPosition
  } = useRootContext();
  const isDisabledValue = isDisabled ?? isDisabledRoot ?? undefined;
  const augmentedRef = useAugmentedRef({
    ref,
    methods: {
      open: () => {
        augmentedRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
          setTriggerPosition({
            width,
            pageX,
            pageY: pageY,
            height
          });
        });
        onOpenChange(true);
      },
      close: () => {
        onOpenChange(false);
        setTriggerPosition(null);
        setContentLayout(null);
      }
    },
    deps: [isOpen]
  });

  // Open popover on mount if isDefaultOpen is true
  useEffect(() => {
    if ((isDefaultOpen || isOpen) && !triggerPosition) {
      // Use setTimeout to ensure the component is mounted and can be measured
      const timeoutId = setTimeout(() => {
        augmentedRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
          setTriggerPosition({
            width,
            pageX,
            pageY: pageY,
            height
          });
          if (isDefaultOpen) {
            onOpenChange(true);
          }
        });
      }, 0);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onPress(ev) {
    augmentedRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
      setTriggerPosition({
        width,
        pageX,
        pageY,
        height
      });
    });
    onOpenChange(!isOpen);
    onPressProp?.(ev);
  }
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: augmentedRef,
    "aria-disabled": isDisabledValue,
    role: "button",
    onPress: onPress,
    disabled: isDisabledValue,
    ...props
  });
});

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
  const isBottomSheet = value.presentation === 'bottom-sheet';
  if (!value.triggerPosition && !isBottomSheet) {
    return null;
  }
  if (!forceMount && !isBottomSheet) {
    if (!value.isOpen) {
      return null;
    }
  }
  return /*#__PURE__*/_jsx(PrimitivePortal, {
    hostName: hostName,
    name: `${value.nativeID}_portal`,
    children: /*#__PURE__*/_jsx(RootContext.Provider, {
      value: value,
      children: children
    })
  });
}

// --------------------------------------------------

const Overlay = /*#__PURE__*/forwardRef(({
  asChild,
  forceMount,
  onPress: OnPressProp,
  closeOnPress = true,
  ...props
}, ref) => {
  const {
    isOpen,
    onOpenChange,
    setTriggerPosition,
    setContentLayout
  } = useRootContext();
  function onPress(ev) {
    if (closeOnPress) {
      onOpenChange(false);
      setTriggerPosition(null);
      setContentLayout(null);
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

// --------------------------------------------------

/**
 * @info `position`, `top`, `left`, and `maxWidth` style properties are controlled internally. Opt out of this behavior by setting `disablePositioningStyle` to `true`.
 */
const Content = /*#__PURE__*/forwardRef(({
  asChild = false,
  forceMount,
  align = 'start',
  placement = 'bottom',
  offset = 0,
  alignOffset = 0,
  avoidCollisions = true,
  onLayout: onLayoutProp,
  insets,
  style,
  disablePositioningStyle,
  width = 'content-fit',
  ...props
}, ref) => {
  const {
    isOpen,
    onOpenChange,
    contentLayout,
    nativeID,
    setContentLayout,
    setTriggerPosition,
    triggerPosition
  } = useRootContext();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onOpenChange(false);
      setTriggerPosition(null);
      setContentLayout(null);
      return true;
    });
    return () => {
      setContentLayout(null);
      backHandler.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const positionStyle = useRelativePosition({
    align,
    avoidCollisions,
    triggerPosition,
    contentLayout,
    alignOffset,
    insets,
    offset,
    placement,
    disablePositioningStyle
  });

  // Calculate content width based on width prop
  const widthStyle = {};
  if (width === 'trigger' && triggerPosition) {
    widthStyle.width = triggerPosition.width;
  } else if (width === 'full') {
    widthStyle.width = '100%';
  } else if (typeof width === 'number') {
    widthStyle.width = width;
  }
  // 'content-fit' is default - no explicit width set

  function onLayout(event) {
    setContentLayout(event.nativeEvent.layout);
    onLayoutProp?.(event);
  }
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
    "aria-modal": true,
    style: [positionStyle, widthStyle, style],
    onLayout: onLayout,
    ...props
  });
});

// --------------------------------------------------

const Close = /*#__PURE__*/forwardRef(({
  asChild,
  onPress: onPressProp,
  disabled = false,
  ...props
}, ref) => {
  const {
    onOpenChange,
    setContentLayout,
    setTriggerPosition
  } = useRootContext();
  function onPress(ev) {
    if (disabled) return;
    onOpenChange(false);
    setTriggerPosition(null);
    setContentLayout(null);
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

// --------------------------------------------------

Root.displayName = 'HeroUINative.Popover.Root';
Trigger.displayName = 'HeroUINative.Popover.Trigger';
Overlay.displayName = 'HeroUINative.Popover.Overlay';
Content.displayName = 'HeroUINative.Popover.Content';
Close.displayName = 'HeroUINative.Popover.Close';
export { Close, Content, Overlay, Portal, Root, Trigger, useRootContext };
//# sourceMappingURL=popover.js.map