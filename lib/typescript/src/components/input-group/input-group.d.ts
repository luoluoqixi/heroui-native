import { type TextInput as TextInputType, View } from 'react-native';
import type { InputGroupInputProps, InputGroupPrefixProps, InputGroupProps, InputGroupSuffixProps } from './input-group.types';
/**
 * Compound InputGroup component with sub-components.
 *
 * @component InputGroup - Layout container (plain View) that wraps
 * Prefix, Input, and Suffix. Provides animation settings and a
 * measurement context so Prefix/Suffix widths are automatically applied
 * as padding on the Input.
 *
 * @component InputGroup.Prefix - Absolutely positioned View anchored to
 * the left side of the Input. Its measured width is applied as
 * `paddingLeft` on InputGroup.Input automatically. Set `isDecorative`
 * to make touches pass through to the Input and hide from accessibility.
 *
 * @component InputGroup.Suffix - Absolutely positioned View anchored to
 * the right side of the Input. Its measured width is applied as
 * `paddingRight` on InputGroup.Input automatically. Set `isDecorative`
 * to make touches pass through to the Input and hide from accessibility.
 *
 * @component InputGroup.Input - Pass-through to the Input component.
 * Accepts all Input props directly (value, onChangeText, isDisabled, etc.).
 * Automatically receives paddingLeft/paddingRight from measured Prefix/Suffix.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/input-group
 */
declare const CompoundInputGroup: import("react").ForwardRefExoticComponent<InputGroupProps & import("react").RefAttributes<View>> & {
    /** Absolutely positioned View for leading prefix content */
    Prefix: import("react").ForwardRefExoticComponent<InputGroupPrefixProps & import("react").RefAttributes<View>>;
    /** Absolutely positioned View for trailing suffix content */
    Suffix: import("react").ForwardRefExoticComponent<InputGroupSuffixProps & import("react").RefAttributes<View>>;
    /** Pass-through to Input — accepts all Input props directly */
    Input: import("react").ForwardRefExoticComponent<InputGroupInputProps & import("react").RefAttributes<TextInputType>>;
};
export default CompoundInputGroup;
//# sourceMappingURL=input-group.d.ts.map