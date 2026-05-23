import type { UseToastRootAnimationOptions } from './toast.types';
export declare const enteringTop: import("react-native-reanimated").ComplexAnimationBuilder;
export declare const exitingTop: import("react-native-reanimated").ReanimatedKeyframe;
export declare const enteringBottom: import("react-native-reanimated").ComplexAnimationBuilder;
export declare const exitingBottom: import("react-native-reanimated").ReanimatedKeyframe;
/**
 * Animation hook for Toast root component
 * Handles opacity, translateY, and scale animations based on toast index and placement
 * Also handles gesture-based swipe to dismiss and rubber-band drag effects
 */
export declare function useToastRootAnimation(options: UseToastRootAnimationOptions): {
    rContainerStyle: {
        height: number | undefined;
        pointerEvents: "auto" | "none";
        opacity: number;
        transform: ({
            translateY: number;
            scale?: undefined;
        } | {
            scale: number;
            translateY?: undefined;
        })[];
    };
    isAllAnimationsDisabled: boolean;
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    panGesture: import("react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture").PanGesture;
};
//# sourceMappingURL=toast.animation.d.ts.map