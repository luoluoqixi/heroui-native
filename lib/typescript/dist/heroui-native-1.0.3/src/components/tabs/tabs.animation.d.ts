import type { AnimationRootDisableAll } from '../../helpers/internal/types';
import type { TabsIndicatorAnimation, TabsSeparatorAnimation } from './tabs.types';
/**
 * Animation hook for Tabs root component
 * Handles cascading animation disabled state to child components
 */
export declare function useTabsRootAnimation(options: {
    animation: AnimationRootDisableAll | undefined;
}): {
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Tabs Indicator component
 * Handles width, height, translateX position, and opacity animations
 */
export declare function useTabsIndicatorAnimation(options: {
    animation: TabsIndicatorAnimation | undefined;
}): {
    rContainerStyle: {
        width: number;
        height: number;
        transform: {
            translateX: number;
        }[];
        opacity: number;
    };
};
/**
 * Animation hook for Tabs Separator component
 * Handles opacity animation based on whether current tab value is between specified values
 */
export declare function useTabsSeparatorAnimation(options: {
    animation: TabsSeparatorAnimation | undefined;
    betweenValues: string[];
    isAlwaysVisible: boolean;
}): {
    rContainerStyle: {
        opacity: number;
    };
};
//# sourceMappingURL=tabs.animation.d.ts.map