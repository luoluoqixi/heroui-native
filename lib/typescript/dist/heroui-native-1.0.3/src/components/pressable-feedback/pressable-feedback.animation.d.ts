import type { GestureResponderEvent } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import type { PressableFeedbackHighlightAnimation, PressableFeedbackRippleAnimation, PressableFeedbackRootAnimation, PressableFeedbackRootAnimationContextValue, PressableFeedbackScaleAnimation } from './pressable-feedback.types';
declare const PressableFeedbackRootAnimationProvider: import("react").Provider<PressableFeedbackRootAnimationContextValue>, usePressableFeedbackRootAnimationContext: () => PressableFeedbackRootAnimationContextValue;
export { PressableFeedbackRootAnimationProvider, usePressableFeedbackRootAnimationContext, };
/**
 * Animation hook for PressableFeedback root component.
 * Manages press state and container dimensions for child compound parts.
 * Produces the built-in scale animated style by default.
 * Use `animation.scale` to customize, or `animation={false}` to disable.
 */
export declare function usePressableFeedbackRootAnimation(options: {
    animation?: PressableFeedbackRootAnimation;
}): {
    isAllAnimationsDisabled: boolean;
    animationOnPressIn: () => void;
    animationOnPressOut: () => void;
    isPressed: SharedValue<boolean>;
    containerWidth: SharedValue<number>;
    containerHeight: SharedValue<number>;
    hasRootScale: boolean;
    rScaleStyle: {
        transform: {
            scale: number;
        }[];
    };
};
/**
 * Animation hook for PressableFeedback.Scale compound part.
 * Used when applying scale to a specific child element instead of the root.
 * Reads the root's press state via context and delegates to the shared `useScaleAnimatedStyle` hook.
 */
export declare function usePressableFeedbackScaleAnimation(options: {
    animation?: PressableFeedbackScaleAnimation;
}): {
    rContainerStyle: {
        transform: {
            scale: number;
        }[];
    };
};
/**
 * Animation hook for PressableFeedback highlight overlay
 * Handles opacity and background color animations for the highlight effect
 */
export declare function usePressableFeedbackHighlightAnimation(options: {
    animation?: PressableFeedbackHighlightAnimation;
}): {
    rContainerStyle: {
        backgroundColor?: undefined;
        opacity?: undefined;
    } | {
        backgroundColor: string;
        opacity: number;
    };
};
/**
 * Animation hook for PressableFeedback ripple effect.
 * Uses a two-layer alternating buffer so a new press can start on a fresh layer
 * while the previous ripple continues its fade-out, preventing visual blinks on rapid presses.
 */
export declare function usePressableFeedbackRippleAnimation(options: {
    animation?: PressableFeedbackRippleAnimation;
}): {
    rLayer0Style: {};
    rLayer1Style: {};
    backgroundColor: string;
    animationOnTouchStart: (event: GestureResponderEvent) => void;
    animationOnTouchEnd: () => void;
};
//# sourceMappingURL=pressable-feedback.animation.d.ts.map