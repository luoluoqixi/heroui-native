"use strict";

import { forwardRef, useMemo } from 'react';
import { ReduceMotion } from 'react-native-reanimated';
import { withUniwind } from 'uniwind';
import { useBottomSheetContentAnimation } from "../../../components/bottom-sheet/bottom-sheet.animation.js";
import { bottomSheetClassNames } from "../../../components/bottom-sheet/bottom-sheet.styles.js";
import GorhomBottomSheetPackage from "../../../optional/gorhom-bottom-sheet.js";
import { BottomSheetIsDraggingProvider } from "../contexts/index.js";
import { useBottomSheetGestureHandlers } from "../hooks/index.js";
import { usePopupBottomSheetContentAnimation } from "../hooks/use-popup-bottom-sheet-content-animation.js";
import { BottomSheetContentContainer } from "./bottom-sheet-content-container.js";
import { jsx as _jsx } from "react/jsx-runtime";
const StyledBottomSheet = withUniwind(GorhomBottomSheetPackage?.default);

/**
 * Props for the reusable BottomSheetContent component
 */

/**
 * Reusable BottomSheetContent component
 *
 * This component provides a reusable bottom sheet content wrapper used across
 * Popover, Select, and other components when using bottom-sheet presentation.
 * It handles animation coordination, styling, and gesture handling.
 *
 * @example
 * ```tsx
 * <BottomSheetContent
 *   isOpen={isOpen}
 *   progress={progress}
 *   isDragging={isDragging}
 *   onOpenChange={onOpenChange}
 *   index={0}
 * >
 *   {children}
 * </BottomSheetContent>
 * ```
 */
export const BottomSheetContent = /*#__PURE__*/forwardRef(({
  children,
  index: initialIndex,
  backgroundClassName,
  handleIndicatorClassName,
  contentContainerClassName: contentContainerClassNameProp,
  contentContainerProps,
  animation,
  animationConfigs,
  backgroundStyle,
  isOpen,
  progress,
  isDragging,
  onOpenChange,
  ...restProps
}, ref) => {
  const {
    isAnimationDisabledValue
  } = useBottomSheetContentAnimation({
    animation
  });
  const {
    animatedIndex,
    isClosingOnSwipe,
    isPanActivated
  } = usePopupBottomSheetContentAnimation({
    progress,
    isDragging
  });
  const contentBackgroundClassName = bottomSheetClassNames.contentBackground({
    className: backgroundClassName
  });
  const contentHandleIndicatorClassName = bottomSheetClassNames.contentHandleIndicator({
    className: handleIndicatorClassName
  });
  const contentContainerClassName = bottomSheetClassNames.contentContainer({
    className: contentContainerClassNameProp
  });
  const mergedAnimationConfigs = useMemo(() => ({
    ...animationConfigs,
    reduceMotion: isAnimationDisabledValue ? ReduceMotion.Always : animationConfigs?.reduceMotion
  }), [animationConfigs, isAnimationDisabledValue]);
  return /*#__PURE__*/_jsx(BottomSheetIsDraggingProvider, {
    value: {
      isDragging
    },
    children: /*#__PURE__*/_jsx(StyledBottomSheet, {
      ref: ref,
      index: -1,
      backgroundClassName: contentBackgroundClassName,
      backgroundStyle: backgroundStyle,
      handleIndicatorClassName: contentHandleIndicatorClassName,
      enablePanDownToClose: restProps.enablePanDownToClose ?? true,
      animatedIndex: animatedIndex ?? restProps.animatedIndex,
      animationConfigs: mergedAnimationConfigs,
      gestureEventsHandlersHook: useBottomSheetGestureHandlers,
      ...restProps,
      children: /*#__PURE__*/_jsx(BottomSheetContentContainer, {
        initialIndex: initialIndex ?? 0,
        isOpen: isOpen,
        progress: progress,
        isDragging: isDragging,
        isPanActivated: isPanActivated,
        isClosingOnSwipe: isClosingOnSwipe,
        contentContainerClassName: contentContainerClassName,
        contentContainerProps: contentContainerProps,
        onOpenChange: onOpenChange,
        enablePanDownToClose: restProps.enablePanDownToClose ?? true,
        children: children
      })
    })
  });
});
BottomSheetContent.displayName = 'HeroUINative.BottomSheetContent';
//# sourceMappingURL=bottom-sheet-content.js.map