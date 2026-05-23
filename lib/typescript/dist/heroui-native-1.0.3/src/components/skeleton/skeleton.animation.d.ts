import type { SharedValue } from 'react-native-reanimated';
import type { SkeletonAnimation, SkeletonAnimationContextValue, SkeletonRootAnimation } from './skeleton.types';
declare const SkeletonAnimationProvider: import("react").Provider<SkeletonAnimationContextValue>, useSkeletonAnimation: () => SkeletonAnimationContextValue;
export { SkeletonAnimationProvider, useSkeletonAnimation };
/**
 * Animation hook for Skeleton root component
 * Handles entering/exiting animations, cascades animation disabled state, and manages progress animation
 */
export declare function useSkeletonRootAnimation(options: {
    animation: SkeletonRootAnimation | undefined;
    isLoading: boolean;
    variant: SkeletonAnimation;
    progress: SharedValue<number>;
}): {
    isAllAnimationsDisabled: boolean;
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
/**
 * Animation hook for Skeleton shimmer component
 * Handles shimmer animation configuration and animated styles
 */
export declare function useSkeletonShimmerAnimation(options: {
    animation: SkeletonRootAnimation | undefined;
}): {
    rContainerStyle: {
        transform: {
            translateX: number;
        }[];
    };
    gradientColors: string[];
};
/**
 * Animation hook for Skeleton pulse component
 * Handles pulse animation configuration and animated styles
 */
export declare function useSkeletonPulseAnimation(options: {
    animation: SkeletonRootAnimation | undefined;
}): {
    rContainerStyle: {
        opacity: number;
    };
};
//# sourceMappingURL=skeleton.animation.d.ts.map