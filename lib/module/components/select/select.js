"use strict";

import { forwardRef, useLayoutEffect, useMemo, useRef } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { cn } from "../../helpers/external/utils/index.js";
import { BottomSheetContent, CheckIcon, ChevronDownIcon, FullWindowOverlay, HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider, useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { usePopupDialogContentAnimation, usePopupOverlayAnimation, usePopupPopoverContentAnimation, usePopupRootAnimation } from "../../helpers/internal/hooks/index.js";
import * as SelectPrimitives from "../../primitives/select/index.js";
import { CloseButton } from "../close-button/index.js";
import { SelectAnimationProvider, useSelectAnimation, useSelectTriggerIndicatorAnimation } from "./select.animation.js";
import { DEFAULT_ALIGN_OFFSET, DEFAULT_ICON_SIZE, DEFAULT_INSETS, DEFAULT_OFFSET, DISPLAY_NAME } from "./select.constants.js";
import { selectClassNames, selectStyleSheet } from "./select.styles.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const AnimatedOverlay = Animated.createAnimatedComponent(SelectPrimitives.Overlay);
const AnimatedPopoverContent = Animated.createAnimatedComponent(SelectPrimitives.PopoverContent);
const AnimatedTriggerIndicator = Animated.createAnimatedComponent(SelectPrimitives.TriggerIndicator);
const useSelect = SelectPrimitives.useRootContext;
const useSelectItem = SelectPrimitives.useItemContext;

// --------------------------------------------------

function SelectRoot({
  children,
  ref,
  isOpen,
  isDefaultOpen,
  onOpenChange,
  animation,
  ...props
}) {
  const {
    progress,
    isDragging,
    isGestureReleaseAnimationRunning,
    isAllAnimationsDisabled
  } = usePopupRootAnimation({
    animation
  });
  const animationContextValue = useMemo(() => ({
    progress,
    isDragging,
    isGestureReleaseAnimationRunning
  }), [progress, isDragging, isGestureReleaseAnimationRunning]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(SelectAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(SelectPrimitives.Root, {
        ref: ref,
        isOpen: isOpen,
        isDefaultOpen: isDefaultOpen,
        onOpenChange: onOpenChange,
        ...props,
        children: children
      })
    })
  });
}

// --------------------------------------------------

const SelectTrigger = /*#__PURE__*/forwardRef(({
  variant = 'default',
  isDisabled: isDisabledProp,
  className,
  ...props
}, ref) => {
  const {
    isDisabled
  } = useSelect();
  const triggerClassName = selectClassNames.trigger({
    variant,
    isDisabled: isDisabledProp || isDisabled,
    className
  });
  return /*#__PURE__*/_jsx(SelectPrimitives.Trigger, {
    ref: ref,
    className: triggerClassName,
    ...props
  });
});

// --------------------------------------------------

const SelectValue = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  const {
    value
  } = useSelect();
  const isSelected = Array.isArray(value) ? value.length > 0 : Boolean(value?.value);
  const valueClassName = selectClassNames.value({
    isSelected,
    className
  });
  return /*#__PURE__*/_jsx(SelectPrimitives.Value, {
    ref: ref,
    className: valueClassName,
    ...props
  });
});

// --------------------------------------------------

const SelectTriggerIndicator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    iconProps,
    animation,
    isAnimatedStyleActive = true,
    style,
    ...restProps
  } = props;
  const {
    isOpen
  } = useSelect();
  const themeColorForeground = useThemeColor('foreground');
  const triggerIndicatorClassName = selectClassNames.triggerIndicator({
    className
  });
  const {
    rContainerStyle
  } = useSelectTriggerIndicatorAnimation({
    animation,
    isOpen
  });
  const triggerIndicatorStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  return /*#__PURE__*/_jsx(AnimatedTriggerIndicator, {
    ref: ref,
    className: triggerIndicatorClassName,
    style: triggerIndicatorStyle,
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(ChevronDownIcon, {
      size: iconProps?.size ?? DEFAULT_ICON_SIZE,
      color: iconProps?.color ?? themeColorForeground
    })
  });
});

// --------------------------------------------------

const SelectPortal = ({
  className,
  children,
  disableFullWindowOverlay = false,
  unstable_accessibilityContainerViewIsModal,
  ...props
}) => {
  const animationSettingsContext = useAnimationSettings();
  const animationContext = useSelectAnimation();
  const portalClassName = selectClassNames.portal({
    className
  });
  return /*#__PURE__*/_jsx(SelectPrimitives.Portal, {
    ...props,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContext,
      children: /*#__PURE__*/_jsx(SelectAnimationProvider, {
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

const SelectOverlay = /*#__PURE__*/forwardRef(({
  className,
  style,
  animation,
  isAnimatedStyleActive = true,
  ...props
}, ref) => {
  const {
    isOpen,
    presentation
  } = useSelect();
  const {
    progress,
    isDragging,
    isGestureReleaseAnimationRunning
  } = useSelectAnimation();
  const overlayClassName = selectClassNames.overlay({
    className
  });
  const {
    rContainerStyle,
    entering,
    exiting
  } = usePopupOverlayAnimation({
    progress: presentation !== 'popover' ? progress : undefined,
    isDragging: presentation === 'popover' ? isDragging : undefined,
    isGestureReleaseAnimationRunning: presentation === 'dialog' ? isGestureReleaseAnimationRunning : undefined,
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

const SelectContentPopover = /*#__PURE__*/forwardRef(({
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
  } = useSelect();
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
  const contentClassName = selectClassNames.content({
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [isReady && /*#__PURE__*/_jsx(AnimatedPopoverContent, {
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
      style: [selectStyleSheet.contentContainer, style],
      ...props,
      children: children
    }), /*#__PURE__*/_jsx(AnimatedPopoverContent, {
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
      style: [selectStyleSheet.contentContainer, style],
      ...props,
      children: children
    })]
  });
});

// --------------------------------------------------

const SelectContentBottomSheet = /*#__PURE__*/forwardRef(({
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
  } = useSelect();
  const {
    progress,
    isDragging
  } = useSelectAnimation();
  return /*#__PURE__*/_jsx(BottomSheetContent, {
    ref: ref,
    index: initialIndex,
    backgroundClassName: backgroundClassName,
    handleIndicatorClassName: handleIndicatorClassName,
    contentContainerClassName: contentContainerClassNameProp,
    contentContainerProps: contentContainerProps,
    animation: animation,
    animationConfigs: animationConfigs,
    backgroundStyle: [selectStyleSheet.contentContainer, restProps.backgroundStyle],
    isOpen: isOpen,
    progress: progress,
    isDragging: isDragging,
    onOpenChange: onOpenChange,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const SelectContentDialog = /*#__PURE__*/forwardRef(({
  classNames,
  styles,
  style,
  children,
  animation,
  isSwipeable = true,
  ...props
}, ref) => {
  const {
    isOpen,
    onOpenChange
  } = useSelect();
  const {
    progress,
    isDragging,
    isGestureReleaseAnimationRunning
  } = useSelectAnimation();
  const {
    wrapper,
    content
  } = selectClassNames.dialogContent();
  const wrapperClassName = wrapper({
    className: classNames?.wrapper
  });
  const contentClassName = content({
    className: classNames?.content
  });
  const dragContainerRef = useRef(null);
  const {
    contentY,
    contentHeight,
    panGesture,
    rDragContainerStyle,
    entering,
    exiting
  } = usePopupDialogContentAnimation({
    progress,
    isDragging,
    isGestureReleaseAnimationRunning,
    isOpen,
    onOpenChange,
    animation,
    isSwipeable
  });
  useLayoutEffect(() => {
    dragContainerRef.current?.measure((_x, _y, _width, height, _pageX, pageY) => {
      contentY.set(pageY);
      contentHeight.set(height);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_jsx(View, {
    className: wrapperClassName,
    style: styles?.wrapper,
    children: /*#__PURE__*/_jsx(GestureDetector, {
      gesture: panGesture,
      children: /*#__PURE__*/_jsx(Animated.View, {
        ref: dragContainerRef,
        entering: entering,
        exiting: exiting,
        children: /*#__PURE__*/_jsx(Animated.View, {
          style: rDragContainerStyle,
          pointerEvents: "box-none",
          children: /*#__PURE__*/_jsx(SelectPrimitives.DialogContent, {
            ref: ref,
            className: contentClassName,
            style: [selectStyleSheet.contentContainer, styles?.content, style],
            ...props,
            children: children
          })
        })
      })
    })
  });
});

// --------------------------------------------------

const SelectContent = /*#__PURE__*/forwardRef((props, ref) => {
  const presentation = props.presentation || 'popover';
  const {
    presentation: contextPresentation
  } = useSelect();
  if (__DEV__) {
    if (presentation !== contextPresentation) {
      throw new Error(`Select.Content presentation prop ("${props.presentation}") does not match Select.Root presentation prop ("${contextPresentation}"). They must be the same.`);
    }
  }
  if (presentation === 'bottom-sheet') {
    return /*#__PURE__*/_jsx(SelectContentBottomSheet, {
      ref: ref,
      ...props
    });
  }
  if (presentation === 'dialog') {
    return /*#__PURE__*/_jsx(SelectContentDialog, {
      ref: ref,
      ...props
    });
  }
  return /*#__PURE__*/_jsx(SelectContentPopover, {
    ref: ref,
    ...props
  });
});

// --------------------------------------------------

const SelectClose = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    onPress: onPressProp,
    ...restProps
  } = props;
  const {
    onOpenChange
  } = useSelect();
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

const SelectItem = /*#__PURE__*/forwardRef(({
  children,
  className,
  disabled = false,
  value: itemValue,
  label,
  ...props
}, ref) => {
  const {
    value
  } = useSelect();
  const isSelected = Array.isArray(value) ? value.some(v => v?.value === itemValue) : value?.value === itemValue;
  const isDisabled = disabled ?? false;
  const itemClassName = selectClassNames.item({
    className
  });
  const renderProps = {
    isSelected,
    value: itemValue,
    isDisabled
  };
  const content = typeof children === 'function' ? children(renderProps) : children ?? /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(SelectItemLabel, {}), /*#__PURE__*/_jsx(SelectItemIndicator, {})]
  });
  return /*#__PURE__*/_jsx(SelectPrimitives.Item, {
    ref: ref,
    className: itemClassName,
    disabled: disabled,
    value: itemValue,
    label: label,
    ...props,
    children: content
  });
});

// --------------------------------------------------

const SelectItemLabel = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  const {
    label
  } = useSelectItem();
  const itemLabelClassName = selectClassNames.itemLabel({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    accessibilityRole: "text",
    className: itemLabelClassName,
    ...props,
    children: label
  });
});

// --------------------------------------------------

const SelectItemDescription = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  const itemDescriptionClassName = selectClassNames.itemDescription({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    accessibilityRole: "summary",
    className: itemDescriptionClassName,
    ...props
  });
});

// --------------------------------------------------

const SelectItemIndicator = /*#__PURE__*/forwardRef(({
  className,
  children,
  iconProps,
  ...props
}, ref) => {
  const themeColorAccent = useThemeColor('accent');
  const iconSize = iconProps?.size ?? 16;
  const iconColor = iconProps?.color ?? themeColorAccent;
  const itemIndicatorClassName = selectClassNames.itemIndicator({
    className
  });
  return /*#__PURE__*/_jsx(SelectPrimitives.ItemIndicator, {
    ref: ref,
    className: itemIndicatorClassName,
    ...props,
    children: children || /*#__PURE__*/_jsx(CheckIcon, {
      size: iconSize,
      color: iconColor
    })
  });
});

// --------------------------------------------------

const SelectListLabel = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  const listLabelClassName = selectClassNames.listLabel({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: listLabelClassName,
    accessibilityRole: "header",
    ...props
  });
});

// --------------------------------------------------

SelectRoot.displayName = DISPLAY_NAME.ROOT;
SelectTrigger.displayName = DISPLAY_NAME.TRIGGER;
SelectTriggerIndicator.displayName = DISPLAY_NAME.TRIGGER_INDICATOR;
SelectValue.displayName = DISPLAY_NAME.VALUE;
SelectPortal.displayName = DISPLAY_NAME.PORTAL;
SelectOverlay.displayName = DISPLAY_NAME.OVERLAY;
SelectContent.displayName = DISPLAY_NAME.CONTENT;
SelectClose.displayName = DISPLAY_NAME.CLOSE;
SelectItemDescription.displayName = DISPLAY_NAME.ITEM_DESCRIPTION;
SelectItem.displayName = DISPLAY_NAME.ITEM;
SelectItemLabel.displayName = DISPLAY_NAME.ITEM_LABEL;
SelectItemIndicator.displayName = DISPLAY_NAME.ITEM_INDICATOR;
SelectListLabel.displayName = DISPLAY_NAME.LIST_LABEL;

/**
 * Compound Select component with sub-components
 *
 * @component Select - Main container that manages open/close state, positioning,
 * value selection and provides context to child components. Handles placement, alignment, and collision detection.
 *
 * @component Select.Trigger - Clickable element that toggles the select visibility.
 * Wraps any child element with press handlers.
 *
 * @component Select.TriggerIndicator - Optional visual indicator showing open/close state.
 * Defaults to an animated chevron icon that rotates based on select state.
 * Supports custom animation configuration.
 *
 * @component Select.Value - Displays the selected value or placeholder text.
 * Automatically updates when selection changes.
 *
 * @component Select.Portal - Renders select content in a portal layer above other content.
 * Ensures proper stacking and positioning.
 *
 * @component Select.Overlay - Optional background overlay. Can be transparent or
 * semi-transparent to capture outside clicks.
 *
 * @component Select.Content - Container for select content with three presentation modes:
 * popover (default floating with positioning and collision detection), bottom sheet modal, or dialog modal.
 * Supports custom animations.
 *
 * @component Select.Item - Selectable option item. Handles selection state and press events.
 *
 * @component Select.ItemLabel - Displays the label text for an item.
 *
 * @component Select.ItemIndicator - Optional indicator shown for selected items.
 *
 * @component Select.ListLabel - Label for the list of items.
 *
 * @component Select.Close - Close button for the select.
 * Can accept custom children or uses default close icon.
 *
 * @component Select.ItemDescription - Optional description text for items with muted styling.
 *
 * Props flow from Select to sub-components via context (placement, align, offset, value, etc.).
 * The select automatically positions itself relative to the trigger element.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/select
 */
const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  /** @optional Visual indicator showing open/close state (defaults to chevron) */
  TriggerIndicator: SelectTriggerIndicator,
  Value: SelectValue,
  Portal: SelectPortal,
  Overlay: SelectOverlay,
  Content: SelectContent,
  Item: SelectItem,
  ItemLabel: SelectItemLabel,
  ItemDescription: SelectItemDescription,
  ItemIndicator: SelectItemIndicator,
  ListLabel: SelectListLabel,
  Close: SelectClose
});
export { useSelect, useSelectAnimation, useSelectItem };
export default Select;
//# sourceMappingURL=select.js.map