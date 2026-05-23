"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
export function useInputGroupRootAnimation(options) {
  const {
    animation
  } = options;
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=input-group.animation.js.map