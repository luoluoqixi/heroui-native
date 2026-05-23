import type { View } from 'react-native';
import type { SpinnerIndicatorProps, SpinnerProps } from './spinner.types';
/**
 * Compound Spinner component with sub-components
 *
 * @component Spinner - Main container that controls loading state, size, and color.
 * Renders a default animated indicator if no children provided.
 *
 * @component Spinner.Indicator - Optional sub-component for customizing animation configuration
 * and icon appearance. Accepts custom children to replace the default icon.
 * When omitted, Spinner uses a default indicator with standard animation settings.
 *
 * Props flow from Spinner to Indicator via context (size, color, isLoading).
 * The indicator only renders when isLoading is true.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/spinner
 */
declare const CompoundSpinner: import("react").ForwardRefExoticComponent<SpinnerProps & import("react").RefAttributes<View>> & {
    /** @optional Customize animation configuration and icon appearance */
    Indicator: import("react").ForwardRefExoticComponent<SpinnerIndicatorProps & import("react").RefAttributes<View>>;
};
export default CompoundSpinner;
//# sourceMappingURL=spinner.d.ts.map