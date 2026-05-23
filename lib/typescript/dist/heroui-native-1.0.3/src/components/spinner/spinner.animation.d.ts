import type { SpinnerIndicatorAnimation, SpinnerRootAnimation } from './spinner.types';
/**
 * Animation hook for Spinner root component
 * Handles entering and exiting animations for the spinner container
 */
export declare function useSpinnerRootAnimation(options: {
    animation: SpinnerRootAnimation | undefined;
}): {
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Spinner Indicator component
 * Handles rotation animation for the spinner indicator
 */
export declare function useSpinnerIndicatorAnimation(options: {
    animation: SpinnerIndicatorAnimation | undefined;
    isLoading: boolean;
}): {
    rContainerStyle: {
        transform: {
            rotate: string;
        }[];
    };
};
//# sourceMappingURL=spinner.animation.d.ts.map