import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import * as RadioPrimitives from '../../primitives/radio';
import type { RadioIndicatorProps, RadioIndicatorThumbProps, RadioProps } from './radio.types';
declare const useRadio: typeof RadioPrimitives.useRadioContext;
/**
 * Compound Radio component with sub-components.
 *
 * @component Radio - Individual radio option that operates in two modes:
 * - **Standalone**: Uses `isSelected`/`onSelectedChange` directly.
 * - **Inside RadioGroupItem**: Automatically detects the parent context, derives
 *   `isSelected`/`isDisabled`/`isInvalid`/`variant` from it. Pressing selects this
 *   item in the group via the group's `onValueChange`.
 *
 * Renders a default indicator if no children are provided. Supports render function
 * children to access state (`isSelected`, `isInvalid`, `isDisabled`).
 *
 * @component Radio.Indicator - Optional container for the radio circle. Renders default thumb
 * if no children provided. Manages the visual selection state.
 *
 * @component Radio.IndicatorThumb - Optional inner circle that appears when selected. Animates
 * scale based on selection. Can be replaced with custom content.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/radio
 */
declare const CompoundRadio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<View>> & {
    /** @optional Custom radio indicator container */
    Indicator: import("react").ForwardRefExoticComponent<RadioIndicatorProps & import("react").RefAttributes<Animated.View>>;
    /** @optional Custom indicator thumb that appears when selected */
    IndicatorThumb: import("react").ForwardRefExoticComponent<RadioIndicatorThumbProps & import("react").RefAttributes<View>>;
};
export { useRadio };
export default CompoundRadio;
//# sourceMappingURL=radio.d.ts.map