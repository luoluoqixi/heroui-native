"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
// --------------------------------------------------

/**
 * Animation hook for RadioGroup root component.
 * Handles cascading animation disabled state to child components.
 */
export function useRadioGroupRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=radio-group.animation.js.map