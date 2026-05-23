"use strict";

import { createContext, forwardRef, use, useMemo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { cn } from "../../helpers/external/utils/index.js";
import { BottomSheetContent, FullWindowOverlay, HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider, useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { usePopupOverlayAnimation, usePopupPopoverContentAnimation, usePopupRootAnimation } from "../../helpers/internal/hooks/index.js";
import * as PopoverPrimitives from "../../primitives/popover/index.js";
import { CloseButton } from "../close-button/index.js";
import { ArrowSvg } from "./arrow-svg.js";
import { PopoverAnimationProvider, usePopoverAnimation } from "./popover.animation.js";
import { DEFAULT_ALIGN_OFFSET, DEFAULT_INSETS, DEFAULT_OFFSET, DISPLAY_NAME } from "./popover.constants.js";
import { popoverClassNames, popoverStyleSheet } from "./popover.styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AnimatedOverlay = Animated.createAnimatedComponent(PopoverPrimitives.Overlay);
const AnimatedContent = Animated.createAnimatedComponent(PopoverPrimitives.Content);
const usePopover = PopoverPrimitives.useRootContext;
const PopoverContentContext = /*#__PURE__*/createContext({
  placement: undefined
});

// --------------------------------------------------

const PopoverRoot = /*#__PURE__*/forwardRef(({
  children,
  isOpen: isOpenProp,
  isDefaultOpen,
  onOpenChange: onOpenChangeProp,
  presentation = 'popover',
  animation,
  ...props
}, ref) => {
  const {
    isAllAnimationsDisabled,
    progress,
    isDragging
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
    children: /*#__PURE__*/_jsx(PopoverAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(PopoverPrimitives.Root, {
        ref: ref,
        presentation: presentation,
        isOpen: isOpenProp,
        isDefaultOpen: isDefaultOpen,
        onOpenChange: onOpenChangeProp,
        ...props,
        children: children
      })
    })
  });
});

// --------------------------------------------------

const PopoverTrigger = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/_jsx(PopoverPrimitives.Trigger, {
    ref: ref,
    ...props
  });
});

// --------------------------------------------------

const PopoverPortal = ({
  className,
  children,
  disableFullWindowOverlay = false,
  unstable_accessibilityContainerViewIsModal,
  ...props
}) => {
  const animationSettingsContext = useAnimationSettings();
  const animationContext = usePopoverAnimation();
  const portalClassName = popoverClassNames.portal({
    className
  });
  return /*#__PURE__*/_jsx(PopoverPrimitives.Portal, {
    ...props,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContext,
      children: /*#__PURE__*/_jsx(PopoverAnimationProvider, {
        value: animationContext,
        children: /*#__PURE__*/_jsx(FullWindowOverlay, {
          disableFullWindowOverlay: disableFullWindowOverlay,
          unstable_accessibilityContainerViewIsModal: unstable_accessibilityContainerViewIsModal,
          children: /*#__PURE__*/_jsx(View, {
            className: portalClassName,
            pointerEvents: "box-none",
            children: children
          })
        })
      })
    })
  });
};

// --------------------------------------------------

const PopoverOverlay = /*#__PURE__*/forwardRef(({
  className,
  style,
  animation,
  isAnimatedStyleActive = true,
  ...props
}, ref) => {
  const {
    isOpen,
    presentation
  } = usePopover();
  const {
    progress,
    isDragging
  } = usePopoverAnimation();
  const overlayClassName = popoverClassNames.overlay({
    className
  });
  const {
    rContainerStyle,
    entering,
    exiting
  } = usePopupOverlayAnimation({
    progress: presentation === 'bottom-sheet' ? progress : undefined,
    isDragging: presentation === 'bottom-sheet' ? isDragging : undefined,
    animation
  });
  const overlayStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  return /*#__PURE__*/_jsx(Animated.View, {
    entering: entering,
    exiting: exiting,
    style: StyleSheet.absoluteFill,
    pointerEvents: "box-none",
    children: /*#__PURE__*/_jsx(AnimatedOverlay, {
      ref: ref,
      className: overlayClassName,
      style: overlayStyle,
      forceMount: presentation === 'bottom-sheet' ? true : undefined,
      pointerEvents: isOpen ? 'auto' : 'none',
      ...props
    })
  });
});

// --------------------------------------------------

const PopoverContentPopover = /*#__PURE__*/forwardRef(({
  placement = 'bottom',
  align = 'center',
  avoidCollisions = true,
  offset = DEFAULT_OFFSET,
  alignOffset = DEFAULT_ALIGN_OFFSET,
  className,
  children,
  style,
  animation,
  ...props
}, ref) => {
  const {
    contentLayout
  } = usePopover();
  const safeAreaInsets = useSafeAreaInsets();
  const {
    height: screenHeight
  } = useWindowDimensions();

  // Initially useRelativePosition returns { position: 'absolute', opacity: 0, top: dimensions.height }
  // So we need to wait for the content to be ready before showing it
  const isReady = Boolean(contentLayout?.y && contentLayout.y < screenHeight);
  const insets = {
    top: DEFAULT_INSETS.top + safeAreaInsets.top,
    bottom: DEFAULT_INSETS.bottom + safeAreaInsets.bottom,
    left: DEFAULT_INSETS.left + safeAreaInsets.left,
    right: DEFAULT_INSETS.right + safeAreaInsets.right
  };
  const contentClassName = popoverClassNames.content({
    className
  });
  const {
    entering,
    exiting
  } = usePopupPopoverContentAnimation({
    placement,
    offset,
    animation
  });
  return /*#__PURE__*/_jsxs(PopoverContentContext, {
    value: {
      placement
    },
    children: [isReady && /*#__PURE__*/_jsx(AnimatedContent, {
      ref: ref,
      entering: entering,
      exiting: exiting,
      placement: placement,
      align: align,
      avoidCollisions: avoidCollisions,
      offset: offset,
      alignOffset: alignOffset,
      insets: insets,
      className: contentClassName,
      style: [popoverStyleSheet.contentContainer, style],
      ...props,
      children: children
    }), /*#__PURE__*/_jsx(AnimatedContent, {
      placement: placement,
      accessible: false,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no",
      pointerEvents: "none",
      collapsable: false,
      align: align,
      avoidCollisions: avoidCollisions,
      offset: offset,
      alignOffset: alignOffset,
      insets: insets,
      className: cn(contentClassName, 'absolute opacity-0'),
      style: [popoverStyleSheet.contentContainer, style],
      ...props,
      children: children
    })]
  });
});

// --------------------------------------------------

const PopoverContentBottomSheet = /*#__PURE__*/forwardRef(({
  children,
  index: initialIndex,
  backgroundClassName,
  handleIndicatorClassName,
  contentContainerClassName: contentContainerClassNameProp,
  contentContainerProps,
  animation,
  animationConfigs,
  ...restProps
}, ref) => {
  const {
    isOpen,
    onOpenChange
  } = usePopover();
  const {
    progress,
    isDragging
  } = usePopoverAnimation();
  return /*#__PURE__*/_jsx(BottomSheetContent, {
    ref: ref,
    index: initialIndex,
    backgroundClassName: backgroundClassName,
    handleIndicatorClassName: handleIndicatorClassName,
    contentContainerClassName: contentContainerClassNameProp,
    contentContainerProps: contentContainerProps,
    animation: animation,
    animationConfigs: animationConfigs,
    backgroundStyle: [popoverStyleSheet.contentContainer, restProps.backgroundStyle],
    isOpen: isOpen,
    progress: progress,
    isDragging: isDragging,
    onOpenChange: onOpenChange,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const PopoverContent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    presentation: contextPresentation
  } = usePopover();
  if (__DEV__) {
    if (props.presentation !== contextPresentation) {
      throw new Error(`Popover.Content presentation prop ("${props.presentation}") does not match Popover.Root presentation prop ("${contextPresentation}"). They must be the same.`);
    }
  }
  if (props.presentation === 'bottom-sheet') {
    return /*#__PURE__*/_jsx(PopoverContentBottomSheet, {
      ref: ref,
      ...props
    });
  }
  return /*#__PURE__*/_jsx(PopoverContentPopover, {
    ref: ref,
    ...props
  });
});

// --------------------------------------------------

const PopoverClose = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    onPress: onPressProp,
    ...restProps
  } = props;
  const {
    onOpenChange
  } = usePopover();
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

const PopoverTitle = /*#__PURE__*/forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const titleClassName = popoverClassNames.label({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    role: "heading",
    accessibilityRole: "header",
    className: titleClassName,
    ...props,
    children: children
  });
});

// --------------------------------------------------

const PopoverDescription = /*#__PURE__*/forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const descriptionClassName = popoverClassNames.description({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    accessibilityRole: "text",
    className: descriptionClassName,
    ...props,
    children: children
  });
});

// --------------------------------------------------

const PopoverArrow = /*#__PURE__*/forwardRef(({
  children,
  style,
  className,
  height = 12,
  width = 20,
  fill,
  stroke,
  strokeWidth = 1,
  placement: placementLocal,
  strokeBaselineInset = 1
}, ref) => {
  const [themeColorOverlay, themeColorBorder] = useThemeColor(['overlay', 'border']);
  const {
    triggerPosition,
    contentLayout
  } = usePopover();
  const {
    placement: placementContext
  } = use(PopoverContentContext);
  const placement = placementLocal || placementContext;
  const arrowClassName = popoverClassNames.arrow({
    className
  });
  if (!triggerPosition || !contentLayout || contentLayout.x === 0 || contentLayout.y === 0 || !placement) {
    return null;
  }
  const arrowFill = fill || themeColorOverlay;
  const arrowStroke = stroke || themeColorBorder;
  const getArrowPosition = () => {
    const triggerCenterX = triggerPosition.pageX + triggerPosition.width / 2;
    const triggerCenterY = triggerPosition.pageY + triggerPosition.height / 2;
    const baseStyle = {
      position: 'absolute'
    };
    switch (placement) {
      case 'top':
        return {
          ...baseStyle,
          bottom: -height + strokeBaselineInset,
          left: Math.min(Math.max(12, triggerCenterX - contentLayout.x - width / 2), contentLayout.width - width - 12)
        };
      case 'bottom':
        return {
          ...baseStyle,
          top: -height + strokeBaselineInset,
          left: Math.min(Math.max(12, triggerCenterX - contentLayout.x - width / 2), contentLayout.width - width - 12)
        };
      case 'left':
        return {
          ...baseStyle,
          right: -height + strokeBaselineInset,
          top: Math.min(Math.max(12, triggerCenterY - contentLayout.y - width / 2), contentLayout.height - width - 12)
        };
      case 'right':
        return {
          ...baseStyle,
          left: -height + strokeBaselineInset,
          top: Math.min(Math.max(12, triggerCenterY - contentLayout.y - width / 2), contentLayout.height - width - 12)
        };
      default:
        return baseStyle;
    }
  };
  const arrowPositionStyle = getArrowPosition();
  return /*#__PURE__*/_jsx(Animated.View, {
    ref: ref,
    className: arrowClassName,
    style: [arrowPositionStyle, style],
    pointerEvents: "none",
    children: children ? children : /*#__PURE__*/_jsx(ArrowSvg, {
      width: width,
      height: height,
      placement: placement,
      fill: arrowFill,
      stroke: arrowStroke,
      strokeWidth: strokeWidth
    })
  });
});

// --------------------------------------------------

PopoverRoot.displayName = DISPLAY_NAME.ROOT;
PopoverTrigger.displayName = DISPLAY_NAME.TRIGGER;
PopoverPortal.displayName = DISPLAY_NAME.PORTAL;
PopoverOverlay.displayName = DISPLAY_NAME.OVERLAY;
PopoverContent.displayName = DISPLAY_NAME.CONTENT;
PopoverClose.displayName = DISPLAY_NAME.CLOSE;
PopoverTitle.displayName = DISPLAY_NAME.TITLE;
PopoverDescription.displayName = DISPLAY_NAME.DESCRIPTION;
PopoverArrow.displayName = DISPLAY_NAME.ARROW;

/**
 * Compound Popover component with sub-components
 *
 * @component Popover - Main container that manages open/close state, positioning,
 * and provides context to child components. Handles placement, alignment, and collision detection.
 *
 * @component Popover.Trigger - Clickable element that toggles the popover visibility.
 * Wraps any child element with press handlers.
 *
 * @component Popover.Portal - Renders popover content in a portal layer above other content.
 * Ensures proper stacking and positioning.
 *
 * @component Popover.Overlay - Optional background overlay. Can be transparent or
 * semi-transparent to capture outside clicks.
 *
 * @component Popover.Content - Container for popover content with two presentation modes:
 * default floating popover with positioning and collision detection, or bottom sheet modal.
 * Supports arrow indicators and custom animations.
 *
 * @component Popover.Arrow - Optional arrow indicator pointing to the trigger element.
 * Automatically positions itself based on popover placement.
 *
 * @component Popover.Close - Close button for the popover.
 * Can accept custom children or uses default close icon.
 *
 * @component Popover.Title - Optional title text with pre-styled typography.
 *
 * @component Popover.Description - Optional description text with muted styling.
 *
 * Props flow from Popover to sub-components via context (placement, align, offset, etc.).
 * The popover automatically positions itself relative to the trigger element.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/popover
 */
const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Overlay: PopoverOverlay,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
  Title: PopoverTitle,
  Description: PopoverDescription
});
export { usePopover, usePopoverAnimation };
export default Popover;
//# sourceMappingURL=popover.js.map