"use strict";

import { FadeIn, FadeOut, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useAnimationSettings } from "../contexts/animation-settings-context.js";
import { getAnimationState, getAnimationValueProperty, getIsAnimationDisabledValue } from "../utils/animation.js";

/**
 * Animation hook for popup overlay components (Dialog, Select, BottomSheet, Popover, etc.)
 * Handles both progress-based opacity animation and entering/exiting animations
 */
export function usePopupOverlayAnimation(options) {
  const {
    progress,
    isDragging,
    isGestureReleaseAnimationRunning,
    animation
  } = options;
  const {
    isAllAnimationsDisabled
  } = useAnimationSettings();
  const {
    animationConfig,
    isAnimationDisabled
  } = getAnimationState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });

  // Opacity animation (progress-based, for bottom-sheet/dialog)
  const opacityValue = getAnimationValueProperty({
    animationValue: animationConfig?.opacity,
    property: 'value',
    defaultValue: [0, 1, 0]
  });
  const rContainerStyle = useAnimatedStyle(() => {
    if (progress?.get() === undefined) {
      return {};
    }
    if (isAnimationDisabledValue) {
      return {
        opacity: progress.get() > 0 ? 1 : 0
      };
    }
    if ((isDragging?.get() || isGestureReleaseAnimationRunning?.get()) && progress.get() <= 1) {
      return {
        opacity: 1
      };
    }
    return {
      opacity: interpolate(progress.get(), [0, 1, 2], opacityValue)
    };
  });

  // Entering/exiting animations (for popover presentation)
  const enteringValue = animationConfig?.entering ?? (isAnimationDisabledValue ? undefined : FadeIn.duration(200));
  const exitingValue = animationConfig?.exiting ?? (isAnimationDisabledValue ? undefined : FadeOut.duration(150));
  return {
    /** Progress-based animated style (for bottom-sheet/dialog) */
    rContainerStyle,
    /** Entering animation (for popover presentation) */
    entering: isAnimationDisabledValue ? undefined : enteringValue,
    /** Exiting animation (for popover presentation) */
    exiting: isAnimationDisabledValue ? undefined : exitingValue
  };
}
//# sourceMappingURL=use-popup-overlay-animation.js.map