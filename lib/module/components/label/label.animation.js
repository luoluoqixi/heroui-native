"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
/**
 * Animation hook for Label root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useLabelRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=label.animation.js.map