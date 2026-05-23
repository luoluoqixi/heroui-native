"use strict";

import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
import { getRootAnimationState } from "../../helpers/internal/utils/index.js";

/** Root animation hook for TagGroup */
export function useTagGroupRootAnimation(options) {
  const {
    animation
  } = options;
  getRootAnimationState(animation);
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  return {
    isAllAnimationsDisabled
  };
}
//# sourceMappingURL=tag-group.animation.js.map