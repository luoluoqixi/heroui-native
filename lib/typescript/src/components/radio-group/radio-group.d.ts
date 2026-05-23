import * as RadioGroupPrimitives from '../../primitives/radio-group';
import type { RadioGroupItemProps, RadioGroupProps } from './radio-group.types';
declare const useRadioGroup: typeof RadioGroupPrimitives.useRadioGroupContext;
/**
 * Compound RadioGroup component with sub-components.
 *
 * @component RadioGroup - Container that manages the selection state of RadioGroupItem components.
 * Supports both horizontal and vertical orientations.
 *
 * @component RadioGroup.Item - Individual radio option within a RadioGroup. Must be used inside
 * RadioGroup. Handles selection state and renders a default `<Radio />` indicator if text children
 * are provided. Supports render function children to access state.
 *
 * Use the `Radio` component (and its sub-components `Radio.Indicator`, `Radio.IndicatorThumb`)
 * inside RadioGroup.Item for custom indicator rendering. The Radio component automatically detects
 * the RadioGroupItem context and derives selection state from it.
 *
 * Props flow from RadioGroup to RadioGroupItem to Radio via context (variant, value, isSelected).
 * RadioGroup manages the overall selection state and orientation.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/radio-group
 */
declare const CompoundRadioGroup: import("react").ForwardRefExoticComponent<RadioGroupProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Individual radio option within a RadioGroup */
    Item: import("react").ForwardRefExoticComponent<RadioGroupItemProps & import("react").RefAttributes<import("react-native").View>>;
};
export default CompoundRadioGroup;
export { useRadioGroup };
//# sourceMappingURL=radio-group.d.ts.map