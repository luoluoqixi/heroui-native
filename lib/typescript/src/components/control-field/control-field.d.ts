import React from 'react';
import { View } from 'react-native';
import type { ControlFieldIndicatorProps, ControlFieldProps } from './control-field.types';
/**
 * Compound ControlField component with sub-components
 *
 * @component ControlField - Wrapper that provides consistent layout and interaction for form controls.
 * Handles press events to toggle selection state and manages disabled states.
 *
 * @component ControlField.Indicator - Container for the control component (Switch, Checkbox, Radio).
 * Automatically passes down isSelected, onSelectedChange, isDisabled, and isInvalid props.
 *
 * Props flow from ControlField to sub-components via context.
 */
declare const CompoundControlField: React.ForwardRefExoticComponent<ControlFieldProps & React.RefAttributes<View>> & {
    /** @optional Container for control component */
    Indicator: React.ForwardRefExoticComponent<ControlFieldIndicatorProps & React.RefAttributes<View>>;
};
export { useControlField } from './control-field.context';
export default CompoundControlField;
//# sourceMappingURL=control-field.d.ts.map