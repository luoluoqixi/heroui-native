import type { SelectAnimationContextValue, SelectTriggerIndicatorAnimation } from './select.types';
declare const SelectAnimationProvider: import("react").Provider<SelectAnimationContextValue>, useSelectAnimation: () => SelectAnimationContextValue;
export { SelectAnimationProvider, useSelectAnimation };
/**
 * Animation hook for Select Trigger Indicator component
 * Handles rotation animation for the chevron icon
 */
export declare function useSelectTriggerIndicatorAnimation(options: {
    animation: SelectTriggerIndicatorAnimation | undefined;
    isOpen: boolean;
}): {
    rContainerStyle: {
        transform: {
            rotate: string;
        }[];
    };
};
//# sourceMappingURL=select.animation.d.ts.map