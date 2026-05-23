"use strict";

import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
import { getAnimationState, getAnimationValueMergedConfig, getAnimationValueProperty, getIsAnimationDisabledValue } from "../../helpers/internal/utils/index.js";
import { THUMB_SPRING_CONFIG } from "./slider.constants.js";
/**
 * Animation hook for Slider root component.
 * Handles root-level animation configuration and provides
 * cascading disable-all state for child components.
 */
export function useSliderRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}

// --------------------------------------------------

/**
 * Animation hook for Slider.Thumb knob scale effect.
 * Animates scale between idle and dragging states using spring physics,
 * driven by the `isThumbDragging` state from the slider context.
 */
export function useSliderThumbAnimation(options) {
  const {
    animation,
    isDragging
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
  const scaleValue = getAnimationValueProperty({
    animationValue: animationConfig?.scale,
    property: 'value',
    defaultValue: [1, 0.9]
  });
  const scaleSpringConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.scale,
    property: 'springConfig',
    defaultValue: THUMB_SPRING_CONFIG
  });
  const rKnobStyle = useAnimatedStyle(() => {
    if (isAnimationDisabledValue) {
      return {
        transform: [{
          scale: isDragging ? scaleValue[1] : scaleValue[0]
        }]
      };
    }
    return {
      transform: [{
        scale: withSpring(isDragging ? scaleValue[1] : scaleValue[0], scaleSpringConfig)
      }]
    };
  });
  return {
    rKnobStyle
  };
}
//# sourceMappingURL=slider.animation.js.map