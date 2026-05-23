"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
/**
 * Animation hook for Chip root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useChipRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=chip.animation.js.map