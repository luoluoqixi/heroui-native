import type { AnimationRootDisableAll } from '../../helpers/internal/types';
import type { AvatarFallbackAnimation, AvatarImageAnimation } from './avatar.types';
/**
 * Animation hook for Avatar root component
 * Handles root-level animation configuration and provides context for child components
 */
export declare function useAvatarRootAnimation(options: {
    animation: AnimationRootDisableAll | undefined;
}): {
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Avatar Image component
 * Handles opacity animation for the avatar image based on loading status
 */
export declare function useAvatarImageAnimation(options: {
    animation: AvatarImageAnimation | undefined;
}): {
    rImageStyle: {
        opacity: number;
    };
};
/**
 * Animation hook for Avatar Fallback component
 * Handles entering animation for the avatar fallback
 */
export declare function useAvatarFallbackAnimation(options: {
    animation: AvatarFallbackAnimation | undefined;
    delayMs?: number;
}): {
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=avatar.animation.d.ts.map