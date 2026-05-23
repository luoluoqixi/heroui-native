import type { SharedValue } from 'react-native-reanimated';
import type { PopupDialogContentAnimation } from '../types/animation';
export interface UsePopupDialogContentAnimationProps {
    /**
     * Whether the dialog is open
     */
    isOpen: boolean;
    /**
     * Progress shared value (0 = closed, 1 = open, 2 = closing)
     */
    progress: SharedValue<number>;
    /**
     * Whether user is currently dragging
     */
    isDragging: SharedValue<boolean>;
    /**
     * Gesture release animation running state shared value
     */
    isGestureReleaseAnimationRunning: SharedValue<boolean>;
    /**
     * Callback when dialog open state changes
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Animation configuration for content
     */
    animation?: PopupDialogContentAnimation;
    /**
     * Whether the dialog content can be swiped to dismiss
     * @default true
     */
    isSwipeable?: boolean;
}
export declare const usePopupDialogContentAnimation: ({ isOpen, progress, isDragging, isGestureReleaseAnimationRunning, onOpenChange, animation, isSwipeable, }: UsePopupDialogContentAnimationProps) => {
    contentY: SharedValue<number>;
    contentHeight: SharedValue<number>;
    panGesture: import("react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture").PanGesture;
    rDragContainerStyle: {
        opacity: number;
        transform: ({
            translateY: number;
            scale?: undefined;
        } | {
            scale: number;
            translateY?: undefined;
        })[];
    } | {
        transform: ({
            translateY: number;
            scale?: undefined;
        } | {
            scale: number;
            translateY?: undefined;
        })[];
        opacity?: undefined;
    };
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=use-popup-dialog-content-animation.d.ts.map