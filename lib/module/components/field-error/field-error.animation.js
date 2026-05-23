"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
import { getAnimationValueProperty, getIsAnimationDisabledValue, getRootAnimationState } from "../../helpers/internal/utils/index.js";
import { ENTERING_ANIMATION_CONFIG, EXITING_ANIMATION_CONFIG } from "./field-error.constants.js";
// --------------------------------------------------

/**
 * Animation hook for FieldError root component
 * Handles entering and exiting animations for error messages
 */
export function useFieldErrorRootAnimation(options) {
  const {
    animation
  } = options;
  const {
    animationConfig,
    isAnimationDisabled
  } = getRootAnimationState(animation);
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });
  const enteringValue = getAnimationValueProperty({
    animationValue: animationConfig?.entering,
    property: 'value',
    defaultValue: ENTERING_ANIMATION_CONFIG
  });
  const exitingValue = getAnimationValueProperty({
    animationValue: animationConfig?.exiting,
    property: 'value',
    defaultValue: EXITING_ANIMATION_CONFIG
  });
  return {
    entering: isAnimationDisabledValue ? undefined : enteringValue,
    exiting: isAnimationDisabledValue ? undefined : exitingValue
  };
}
//# sourceMappingURL=field-error.animation.js.map