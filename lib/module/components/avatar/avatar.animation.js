"use strict";

import { Easing, FadeIn, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
import { getAnimationState, getAnimationValueMergedConfig, getAnimationValueProperty, getIsAnimationDisabledValue } from "../../helpers/internal/utils/index.js";
import * as AvatarPrimitives from "../../primitives/avatar/index.js";
/**
 * Animation hook for Avatar root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useAvatarRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}

/**
 * Animation hook for Avatar Image component
 * Handles opacity animation for the avatar image based on loading status
 */
export function useAvatarImageAnimation(options) {
  const {
    animation
  } = options;

  // Read from global animation context (always available in compound parts)
  const {
    isAllAnimationsDisabled
  } = useAnimationSettings();
  const {
    status
  } = AvatarPrimitives.useRootContext();
  const {
    animationConfig,
    isAnimationDisabled
  } = getAnimationState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });

  // Opacity animation
  const opacityValue = getAnimationValueProperty({
    animationValue: animationConfig?.opacity,
    property: 'value',
    defaultValue: [0, 1]
  });
  const opacityTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.opacity,
    property: 'timingConfig',
    defaultValue: {
      duration: 200,
      easing: Easing.in(Easing.ease)
    }
  });
  const rImageStyle = useAnimatedStyle(() => {
    const isLoaded = status === 'loaded';
    const targetOpacity = isLoaded ? opacityValue[1] : opacityValue[0];
    if (isAnimationDisabledValue) {
      return {
        opacity: targetOpacity
      };
    }
    return {
      opacity: withTiming(targetOpacity, opacityTimingConfig)
    };
  });
  return {
    rImageStyle
  };
}

/**
 * Animation hook for Avatar Fallback component
 * Handles entering animation for the avatar fallback
 */
export function useAvatarFallbackAnimation(options) {
  const {
    animation,
    delayMs
  } = options;

  // Read from global animation context (always available in compound parts)
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

  // Entering animation
  const enteringValue = getAnimationValueProperty({
    animationValue: animationConfig?.entering,
    property: 'value',
    defaultValue: FadeIn.duration(200).easing(Easing.in(Easing.ease)).delay(delayMs ?? 0)
  });
  return {
    entering: isAnimationDisabledValue ? undefined : enteringValue
  };
}
//# sourceMappingURL=avatar.animation.js.map