"use strict";

import { useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { createContext, getAnimationState, getIsAnimationDisabledValue } from "../../helpers/internal/utils/index.js";
const [BottomSheetAnimationProvider, useBottomSheetAnimation] = createContext({
  name: 'BottomSheetAnimationContext'
});
export { BottomSheetAnimationProvider, useBottomSheetAnimation };

// --------------------------------------------------

/**
 * Animation hook for BottomSheet Content component
 * Handles animation disabled state based on local and global animation settings
 */
export function useBottomSheetContentAnimation(options) {
  const {
    animation
  } = options;

  // Read from global animation context (always available in compound parts)
  const {
    isAllAnimationsDisabled
  } = useAnimationSettings();
  const {
    isAnimationDisabled
  } = getAnimationState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });
  return {
    isAnimationDisabledValue
  };
}
//# sourceMappingURL=bottom-sheet.animation.js.map