"use strict";

import { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { FullWindowOverlay, HeroText, BottomSheetContent as InternalBottomSheetContent } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider, useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { usePopupOverlayAnimation, usePopupRootAnimation } from "../../helpers/internal/hooks/index.js";
import * as BottomSheetPrimitives from "../../primitives/bottom-sheet/index.js";
import { CloseButton } from "../close-button/index.js";
import { BottomSheetAnimationProvider, useBottomSheetAnimation } from "./bottom-sheet.animation.js";
import { DISPLAY_NAME } from "./bottom-sheet.constants.js";
import { bottomSheetClassNames, bottomSheetStyleSheet } from "./bottom-sheet.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedOverlay = Animated.createAnimatedComponent(BottomSheetPrimitives.Overlay);
const useBottomSheet = BottomSheetPrimitives.useRootContext;

// --------------------------------------------------

const BottomSheetRoot = /*#__PURE__*/forwardRef(({
  children,
  isOpen,
  isDefaultOpen,
  onOpenChange,
  animation,
  ...props
}, ref) => {
  const {
    progress,
    isDragging,
    isAllAnimationsDisabled
  } = usePopupRootAnimation({
    animation
  });
  const animationContextValue = useMemo(() => ({
    progress,
    isDragging
  }), [progress, isDragging]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(BottomSheetAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(BottomSheetPrimitives.Root, {
        ref: ref,
        isOpen: isOpen,
        isDefaultOpen: isDefaultOpen,
        onOpenChange: onOpenChange,
        ...props,
        children: children
      })
    })
  });
});

// --------------------------------------------------

const BottomSheetTrigger = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/_jsx(BottomSheetPrimitives.Trigger, {
    ref: ref,
    ...props
  });
});

// --------------------------------------------------

const BottomSheetPortal = ({
  children,
  disableFullWindowOverlay = false,
  unstable_accessibilityContainerViewIsModal,
  ...props
}) => {
  const animationSettingsContext = useAnimationSettings();
  const animationContext = useBottomSheetAnimation();
  return /*#__PURE__*/_jsx(BottomSheetPrimitives.Portal, {
    ...props,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContext,
      children: /*#__PURE__*/_jsx(BottomSheetAnimationProvider, {
        value: animationContext,
        children: /*#__PURE__*/_jsx(FullWindowOverlay, {
          disableFullWindowOverlay: disableFullWindowOverlay,
          unstable_accessibilityContainerViewIsModal: unstable_accessibilityContainerViewIsModal,
          children: /*#__PURE__*/_jsx(Animated.View, {
            style: StyleSheet.absoluteFill,
            pointerEvents: "box-none",
            children: children
          })
        })
      })
    })
  });
};

// --------------------------------------------------

const BottomSheetOverlay = /*#__PURE__*/forwardRef(({
  className,
  style,
  animation,
  isAnimatedStyleActive = true,
  ...props
}, ref) => {
  const {
    isOpen
  } = useBottomSheet();
  const {
    progress
  } = useBottomSheetAnimation();
  const isDragging = useSharedValue(false);
  const overlayClassName = bottomSheetClassNames.overlay({
    className
  });
  const {
    rContainerStyle
  } = usePopupOverlayAnimation({
    progress,
    isDragging,
    animation
  });
  if (!isOpen) {
    return null;
  }
  const overlayStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  return /*#__PURE__*/_jsx(AnimatedOverlay, {
    ref: ref,
    className: overlayClassName,
    style: overlayStyle,
    pointerEvents: isOpen ? 'auto' : 'none',
    ...props
  });
});

// --------------------------------------------------

const BottomSheetContent = /*#__PURE__*/forwardRef(({
  children,
  index: initialIndex,
  backgroundClassName,
  handleIndicatorClassName,
  contentContainerClassName: contentContainerClassNameProp,
  contentContainerProps,
  animationConfigs,
  animation,
  ...restProps
}, ref) => {
  const {
    isOpen,
    onOpenChange
  } = useBottomSheet();
  const {
    progress,
    isDragging
  } = useBottomSheetAnimation();
  return /*#__PURE__*/_jsx(InternalBottomSheetContent, {
    ref: ref,
    index: initialIndex,
    backgroundClassName: backgroundClassName,
    handleIndicatorClassName: handleIndicatorClassName,
    contentContainerClassName: contentContainerClassNameProp,
    contentContainerProps: contentContainerProps,
    animation: animation,
    animationConfigs: animationConfigs,
    backgroundStyle: [bottomSheetStyleSheet.contentContainer, restProps.backgroundStyle],
    isOpen: isOpen,
    progress: progress,
    isDragging: isDragging,
    onOpenChange: onOpenChange,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const BottomSheetClose = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    onPress: onPressProp,
    ...restProps
  } = props;
  const {
    onOpenChange
  } = useBottomSheet();
  const onPress = ev => {
    onOpenChange(false);
    if (typeof onPressProp === 'function') {
      onPressProp(ev);
    }
  };
  return /*#__PURE__*/_jsx(CloseButton, {
    ref: ref,
    onPress: onPress,
    ...restProps
  });
});

// --------------------------------------------------

const BottomSheetTitle = /*#__PURE__*/forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const {
    nativeID
  } = useBottomSheet();
  const titleClassName = bottomSheetClassNames.label({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    role: "heading",
    accessibilityRole: "header",
    nativeID: `${nativeID}_label`,
    className: titleClassName,
    ...props,
    children: children
  });
});

// --------------------------------------------------

const BottomSheetDescription = /*#__PURE__*/forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const {
    nativeID
  } = useBottomSheet();
  const descriptionClassName = bottomSheetClassNames.description({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    accessibilityRole: "text",
    nativeID: `${nativeID}_desc`,
    className: descriptionClassName,
    ...props,
    children: children
  });
});

// --------------------------------------------------

BottomSheetRoot.displayName = DISPLAY_NAME.ROOT;
BottomSheetTrigger.displayName = DISPLAY_NAME.TRIGGER;
BottomSheetPortal.displayName = DISPLAY_NAME.PORTAL;
BottomSheetOverlay.displayName = DISPLAY_NAME.OVERLAY;
BottomSheetContent.displayName = DISPLAY_NAME.CONTENT;
BottomSheetClose.displayName = DISPLAY_NAME.CLOSE;
BottomSheetTitle.displayName = DISPLAY_NAME.TITLE;
BottomSheetDescription.displayName = DISPLAY_NAME.DESCRIPTION;

/**
 * Compound BottomSheet component with sub-components
 *
 * @component BottomSheet.Root - Main container that manages open/close state.
 * Provides the bottom sheet context to child components.
 *
 * @component BottomSheet.Trigger - Button or element that opens the bottom sheet.
 * Accepts any pressable element as children.
 *
 * @component BottomSheet.Portal - Portal container for bottom sheet overlay and content.
 * Renders children in a portal with full window overlay.
 *
 * @component BottomSheet.Overlay - Background overlay that covers the screen.
 * Typically closes the bottom sheet when clicked.
 *
 * @component BottomSheet.Content - The bottom sheet content container.
 * Uses @gorhom/bottom-sheet for rendering. Contains the main bottom sheet UI elements.
 *
 * @component BottomSheet.Close - Close button for the bottom sheet.
 * Can accept custom children or uses default close icon.
 *
 * @component BottomSheet.Title - The bottom sheet title text.
 * Automatically linked for accessibility.
 *
 * @component BottomSheet.Description - The bottom sheet description text.
 * Automatically linked for accessibility.
 */
const BottomSheet = Object.assign(BottomSheetRoot, {
  /** @optional Trigger element to open the bottom sheet */
  Trigger: BottomSheetTrigger,
  /** @optional Portal container for overlay and content */
  Portal: BottomSheetPortal,
  /** @optional Background overlay */
  Overlay: BottomSheetOverlay,
  /** @optional Main bottom sheet content container */
  Content: BottomSheetContent,
  /** @optional Close button for the bottom sheet */
  Close: BottomSheetClose,
  /** @optional Bottom sheet title text */
  Title: BottomSheetTitle,
  /** @optional Bottom sheet description text */
  Description: BottomSheetDescription
});
export { useBottomSheet, useBottomSheetAnimation };
export default BottomSheet;
//# sourceMappingURL=bottom-sheet.js.map