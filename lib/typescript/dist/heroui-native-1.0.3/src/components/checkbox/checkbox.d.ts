import { View } from 'react-native';
import * as CheckboxPrimitives from '../../primitives/checkbox';
import type { CheckboxIndicatorProps, CheckboxProps } from './checkbox.types';
declare const useCheckbox: typeof CheckboxPrimitives.useCheckboxContext;
/**
 * Compound Checkbox component with sub-components
 *
 * @component Checkbox - Main container that handles selection state and user interaction.
 * Renders default indicator with checkmark if no children provided.
 * Animates background and border color based on selection state.
 *
 * @component Checkbox.Indicator - Optional checkmark container that scales in when selected.
 * Renders default check icon if no children provided. Handles enter/exit animations
 * and can be replaced with custom indicators.
 *
 * Props flow from Checkbox to sub-components via context (isSelected).
 * The checkbox supports controlled and uncontrolled modes through isSelected/onSelectedChange.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/checkbox
 */
declare const CompoundCheckbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<View>> & {
    /** @optional Custom indicator with scale animations */
    Indicator: import("react").ForwardRefExoticComponent<CheckboxIndicatorProps & import("react").RefAttributes<View>>;
};
export { useCheckbox };
export default CompoundCheckbox;
//# sourceMappingURL=checkbox.d.ts.map