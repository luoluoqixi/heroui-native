"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
/**
 * Animation hook for ControlField root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useControlFieldRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=control-field.animation.js.map