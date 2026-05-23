import type { ScrollShadowOrientation, ScrollShadowRootAnimation, ScrollShadowVisibility } from './scroll-shadow.types';
/**
 * Animation hook for ScrollShadow root component
 * Handles cascading animation disabled state and all animation logic
 */
export declare function useScrollShadowRootAnimation(options: {
    animation: ScrollShadowRootAnimation | undefined;
    orientation: ScrollShadowOrientation;
    size: number;
    visibility: ScrollShadowVisibility;
    isEnabled: boolean;
}): {
    scrollOffset: import("react-native-reanimated").SharedValue<number>;
    contentSize: import("react-native-reanimated").SharedValue<number>;
    containerSize: import("react-native-reanimated").SharedValue<number>;
    localScrollHandler: import("react-native-reanimated").ScrollHandlerProcessed<Record<string, unknown>>;
    topShadowStyle: {
        opacity: number;
    };
    bottomShadowStyle: {
        opacity: number;
    };
    isAllAnimationsDisabled: boolean;
};
//# sourceMappingURL=scroll-shadow.animation.d.ts.map