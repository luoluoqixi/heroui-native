import type { CheckboxAnimationContextValue, CheckboxIndicatorAnimation, CheckboxRootAnimation } from './checkbox.types';
declare const CheckboxAnimationProvider: import("react").Provider<CheckboxAnimationContextValue>, useCheckboxAnimation: () => CheckboxAnimationContextValue;
export { CheckboxAnimationProvider, useCheckboxAnimation };
export declare function useCheckboxRootAnimation(options: {
    animation: CheckboxRootAnimation | undefined;
}): {
    rContainerStyle: {
        transform?: undefined;
    } | {
        transform: {
            scale: number;
        }[];
    };
    isCheckboxPressed: import("react-native-reanimated").SharedValue<boolean>;
    isAllAnimationsDisabled: boolean;
};
export declare function useCheckboxIndicatorAnimation(options: {
    animation: CheckboxIndicatorAnimation | undefined;
    isSelected: boolean | undefined;
}): {
    rContainerStyle: {
        opacity: number;
        borderRadius: number;
        transform: ({
            translateX: number;
            scale?: undefined;
        } | {
            scale: number;
            translateX?: undefined;
        })[];
    };
    isAnimationDisabled: boolean;
};
//# sourceMappingURL=checkbox.animation.d.ts.map