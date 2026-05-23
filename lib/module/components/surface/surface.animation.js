"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
/**
 * Animation hook for Surface root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useSurfaceRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=surface.animation.js.map