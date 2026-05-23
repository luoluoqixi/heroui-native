import type { ViewStyle } from 'react-native';
import type { SwitchAnimationContextValue, SwitchRootAnimation, SwitchThumbAnimation } from './switch.types';
declare const SwitchAnimationProvider: import("react").Provider<SwitchAnimationContextValue>, useSwitchAnimation: () => SwitchAnimationContextValue;
export { SwitchAnimationProvider, useSwitchAnimation };
/**
 * Animation hook for Switch root component
 * Handles scale and background color animations and provides context for child components
 */
export declare function useSwitchRootAnimation(options: {
    animation: SwitchRootAnimation | undefined;
    isSelected: boolean | undefined;
}): {
    rContainerStyle: {
        backgroundColor: string;
        transform?: undefined;
    } | {
        backgroundColor: string;
        transform: {
            scale: number;
        }[];
    };
    isSwitchPressed: import("react-native-reanimated").SharedValue<boolean>;
    contentContainerWidth: import("react-native-reanimated").SharedValue<number>;
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Switch thumb component
 * Handles thumb position (left) and background color animations
 */
export declare function useSwitchThumbAnimation(options: {
    animation: SwitchThumbAnimation | undefined;
    style: ViewStyle | undefined;
    className: string;
    isSelected: boolean | undefined;
}): {
    rContainerStyle: {
        right: number;
        backgroundColor: string;
        left?: undefined;
    } | {
        left: number;
        backgroundColor: string;
        right?: undefined;
    };
};
//# sourceMappingURL=switch.animation.d.ts.map