import type { AnimationRootDisableAll } from '../../helpers/internal/types';
import type { SliderThumbAnimation } from './slider.types';
/**
 * Animation hook for Slider root component.
 * Handles root-level animation configuration and provides
 * cascading disable-all state for child components.
 */
export declare function useSliderRootAnimation(options: {
    animation: AnimationRootDisableAll | undefined;
}): {
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Slider.Thumb knob scale effect.
 * Animates scale between idle and dragging states using spring physics,
 * driven by the `isThumbDragging` state from the slider context.
 */
export declare function useSliderThumbAnimation(options: {
    animation: SliderThumbAnimation | undefined;
    isDragging: boolean;
}): {
    rKnobStyle: {
        transform: {
            scale: number;
        }[];
    };
};
//# sourceMappingURL=slider.animation.d.ts.map