import type { AnimationRootDisableAll } from '../../helpers/internal/types';
import type { InputOTPSlotCaretAnimation, InputOTPSlotValueAnimation } from './input-otp.types';
/**
 * Animation hook for InputOTP root component
 * Handles root-level animation configuration and provides context for child components
 */
export declare function useInputOTPRootAnimation(options: {
    animation: AnimationRootDisableAll | undefined;
}): {
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for InputOTP.SlotCaret component
 * Handles opacity and height animations for the caret indicator
 */
export declare function useInputOTPSlotCaretAnimation(options: {
    animation: InputOTPSlotCaretAnimation | undefined;
}): {
    rContainerStyle: {
        opacity: number;
        height: number;
    };
};
/**
 * Animation hook for InputOTP.SlotValue component
 * Handles wrapper (fade) and text (flip) animations for entering/exiting
 */
export declare function useInputOTPSlotValueAnimation(options: {
    animation: InputOTPSlotValueAnimation | undefined;
}): {
    wrapperEntering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    wrapperExiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    textEntering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    textExiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=input-otp.animation.d.ts.map