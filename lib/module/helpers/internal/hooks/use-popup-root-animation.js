"use strict";

import { useSharedValue } from 'react-native-reanimated';
import { useCombinedAnimationDisabledState } from "./use-combined-animation-disabled-state.js";

/**
 * Root animation hook for popup-like components (Dialog, Select, etc.)
 * Manages component state transitions and animation coordination
 */
export function usePopupRootAnimation(options) {
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(options.animation);
  const progress = useSharedValue(0);
  const isDragging = useSharedValue(false);
  const isGestureReleaseAnimationRunning = useSharedValue(false);
  return {
    isAllAnimationsDisabled,
    progress,
    isDragging,
    isGestureReleaseAnimationRunning
  };
}
//# sourceMappingURL=use-popup-root-animation.js.map