import type { SharedValue } from 'react-native-reanimated';
import type { PopupOverlayAnimation } from '../types/animation';
/**
 * Animation hook for popup overlay components (Dialog, Select, BottomSheet, Popover, etc.)
 * Handles both progress-based opacity animation and entering/exiting animations
 */
export declare function usePopupOverlayAnimation(options: {
    /** Animation progress shared value (0=idle, 1=open, 2=close) */
    progress?: SharedValue<number>;
    /** Dragging state shared value */
    isDragging?: SharedValue<boolean>;
    /** Gesture release animation running state shared value (optional, for components with swipe gestures) */
    isGestureReleaseAnimationRunning?: SharedValue<boolean>;
    /** Animation configuration for overlay */
    animation?: PopupOverlayAnimation;
}): {
    /** Progress-based animated style (for bottom-sheet/dialog) */
    rContainerStyle: {
        opacity?: undefined;
    } | {
        opacity: number;
    };
    /** Entering animation (for popover presentation) */
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    /** Exiting animation (for popover presentation) */
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=use-popup-overlay-animation.d.ts.map