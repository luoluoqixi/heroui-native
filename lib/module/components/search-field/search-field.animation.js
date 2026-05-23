"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
/**
 * Animation hook for SearchField root component
 * Handles root-level animation configuration and provides context for child components
 */
export function useSearchFieldRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=search-field.animation.js.map