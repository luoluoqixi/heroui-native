import type { LabelContextValue, LabelProps, LabelTextProps } from './label.types';
declare const useLabel: () => LabelContextValue;
/**
 * Compound Label component with sub-components
 *
 * @component Label - Main container that displays a label. Renders with
 * string children as Label.Text or accepts compound components for custom layouts.
 *
 * @component Label.Text - Text content of the label. When string is provided,
 * it renders as Text. Otherwise renders children as-is. Shows asterisk when required.
 *
 * Props flow from Label to sub-components via context (isDisabled, isRequired, isInvalid).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/label
 */
declare const CompoundLabel: import("react").ForwardRefExoticComponent<LabelProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Label text - renders text or custom content with optional asterisk */
    Text: import("react").ForwardRefExoticComponent<LabelTextProps & import("react").RefAttributes<import("react-native").Text>>;
};
export { useLabel };
export default CompoundLabel;
//# sourceMappingURL=label.d.ts.map