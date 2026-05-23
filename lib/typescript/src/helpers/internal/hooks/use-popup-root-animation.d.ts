import type { AnimationRootDisableAll } from '../types/animation';
/**
 * Root animation hook for popup-like components (Dialog, Select, etc.)
 * Manages component state transitions and animation coordination
 */
export declare function usePopupRootAnimation(options: {
    animation?: AnimationRootDisableAll;
}): {
    isAllAnimationsDisabled: boolean;
    progress: import("react-native-reanimated").SharedValue<number>;
    isDragging: import("react-native-reanimated").SharedValue<boolean>;
    isGestureReleaseAnimationRunning: import("react-native-reanimated").SharedValue<boolean>;
};
//# sourceMappingURL=use-popup-root-animation.d.ts.map