import type { SubMenuAnimationContextValue, SubMenuRootAnimation, SubMenuTriggerIndicatorAnimation } from './sub-menu.types';
declare const SubMenuAnimationProvider: import("react").Provider<SubMenuAnimationContextValue>, useSubMenuAnimation: () => SubMenuAnimationContextValue;
/**
 * Animation hook for SubMenu root component.
 * Handles root-level animation configuration and provides
 * the combined disabled state for child components.
 */
export declare function useSubMenuRootAnimation(options: {
    animation: SubMenuRootAnimation | undefined;
}): {
    isAllAnimationsDisabled: boolean;
    triggerHeight: import("react-native-reanimated").SharedValue<number>;
    contentHeight: import("react-native-reanimated").SharedValue<number>;
    contentPaddingTop: import("react-native-reanimated").SharedValue<number>;
};
/**
 * Hook providing animated styles for the SubMenu root content container.
 * Animates height, margins, and padding when the submenu opens/closes.
 * Uses getRootAnimationState to handle values and disabled state.
 *
 * @param options.animation - Root animation configuration
 * @returns Object with rOuterContainerStyle and rInnerContentStyle for the root content container
 */
export declare function useRootContentContainerAnimation(options: {
    animation: SubMenuRootAnimation | undefined;
}): {
    rOuterContainerStyle: {
        height: number | undefined;
    };
    rInnerContentStyle: {
        height: undefined;
        marginHorizontal?: undefined;
        marginVertical?: undefined;
        paddingHorizontal?: undefined;
        paddingTop?: undefined;
    } | {
        height: number;
        marginHorizontal: number;
        marginVertical: number;
        paddingHorizontal: number;
        paddingTop: number;
    };
};
/**
 * Animation hook for the SubMenu trigger indicator.
 * Handles rotation animation when the submenu opens/closes.
 */
export declare function useSubMenuTriggerIndicatorAnimation(options: {
    animation: SubMenuTriggerIndicatorAnimation | undefined;
    isOpen: boolean;
}): {
    rContainerStyle: {
        transform: {
            rotate: string;
        }[];
    };
};
export { SubMenuAnimationProvider, useSubMenuAnimation, type SubMenuAnimationContextValue, };
//# sourceMappingURL=sub-menu.animation.d.ts.map