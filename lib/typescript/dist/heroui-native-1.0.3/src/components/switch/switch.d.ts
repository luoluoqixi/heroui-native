import { View } from 'react-native';
import type { SwitchContentProps, SwitchContextValue, SwitchProps, SwitchThumbProps } from './switch.types';
declare const useSwitch: () => SwitchContextValue;
/**
 * Compound Switch component with sub-components
 *
 * @component Switch - Main container that handles toggle state and user interaction.
 * Renders default thumb if no children provided. Animates scale (on press) and background
 * color based on selection state. Acts as a pressable area for toggling. Supports render
 * function children for dynamic content.
 *
 * @component Switch.Thumb - Optional sliding thumb element that moves between positions.
 * Uses spring animation for smooth transitions. Can contain custom content like icons
 * or be customized with different styles and animations. Supports render function children.
 *
 * @component Switch.StartContent - Optional content displayed on the left side of the switch.
 * Typically used for icons or text that appear when switch is off. Positioned absolutely
 * within the switch container.
 *
 * @component Switch.EndContent - Optional content displayed on the right side of the switch.
 * Typically used for icons or text that appear when switch is on. Positioned absolutely
 * within the switch container.
 *
 * Props flow from Switch to sub-components via context (isSelected, isDisabled).
 * The switch supports controlled and uncontrolled modes through isSelected/onSelectedChange.
 * Animations can be customized or disabled at both root and component levels.
 * Content components provide visual feedback without affecting the toggle functionality.
 * Integrates with ControlField for press state sharing and larger touch targets.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/switch
 */
declare const CompoundSwitch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<View>> & {
    /** @optional Sliding thumb with spring animations */
    Thumb: import("react").ForwardRefExoticComponent<SwitchThumbProps & import("react").RefAttributes<View>>;
    /** @optional Content shown when switch is off (left side) */
    StartContent: import("react").ForwardRefExoticComponent<SwitchContentProps & import("react").RefAttributes<View>>;
    /** @optional Content shown when switch is on (right side) */
    EndContent: import("react").ForwardRefExoticComponent<SwitchContentProps & import("react").RefAttributes<View>>;
};
export { useSwitch };
export default CompoundSwitch;
//# sourceMappingURL=switch.d.ts.map