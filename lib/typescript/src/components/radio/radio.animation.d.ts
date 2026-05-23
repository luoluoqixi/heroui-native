import type { AnimationRootDisableAll } from '../../helpers/internal/types';
import type { RadioIndicatorThumbAnimation } from './radio.types';
/**
 * Animation hook for Radio root component.
 * Handles cascading animation disabled state to child components (Indicator, IndicatorThumb).
 */
export declare function useRadioRootAnimation(options: {
    animation: AnimationRootDisableAll | undefined;
}): {
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Radio.IndicatorThumb component.
 * Handles scale animation based on selection state.
 */
export declare function useRadioIndicatorThumbAnimation(options: {
    animation: RadioIndicatorThumbAnimation | undefined;
    isSelected: boolean | undefined;
}): {
    rContainerStyle: {
        transform: {
            scale: number;
        }[];
    };
};
//# sourceMappingURL=radio.animation.d.ts.map