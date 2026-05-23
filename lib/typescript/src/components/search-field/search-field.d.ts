import { type TextInput as TextInputType, View } from 'react-native';
import type { SearchFieldClearButtonProps, SearchFieldContextType, SearchFieldGroupProps, SearchFieldInputProps, SearchFieldProps, SearchFieldSearchIconProps } from './search-field.types';
declare const useSearchField: () => SearchFieldContextType;
/**
 * Compound SearchField component with sub-components.
 *
 * @component SearchField - Root container that accepts `value`, `onChange`,
 * `isDisabled`, `isInvalid`, and `isRequired`, providing them to children via
 * SearchFieldContext. Also provides FormFieldProvider and animation settings.
 *
 * @component SearchField.Group - Flex-row container for the search icon, input,
 * and clear button.
 *
 * @component SearchField.SearchIcon - Magnifying glass icon positioned
 * absolutely on the left.
 *
 * @component SearchField.Input - Wraps the Input component with search-specific
 * defaults: "Search..." placeholder, left padding for the search icon, and
 * search a11y role. Reads `value` / `onChangeText` from SearchFieldContext.
 *
 * @component SearchField.ClearButton - Small button that clears the search
 * input. Automatically hidden when value is empty. Calls `onChange("")` from
 * context on press.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/search-field
 */
declare const CompoundSearchField: import("react").ForwardRefExoticComponent<SearchFieldProps & import("react").RefAttributes<View>> & {
    /** Flex-row container for search icon, input, and clear button */
    Group: import("react").ForwardRefExoticComponent<SearchFieldGroupProps & import("react").RefAttributes<View>>;
    /** Magnifying glass search icon */
    SearchIcon: import("react").ForwardRefExoticComponent<SearchFieldSearchIconProps & import("react").RefAttributes<View>>;
    /** Text input with search-specific defaults */
    Input: import("react").ForwardRefExoticComponent<SearchFieldInputProps & import("react").RefAttributes<TextInputType>>;
    /** Small clear button to dismiss search text */
    ClearButton: import("react").ForwardRefExoticComponent<SearchFieldClearButtonProps & import("react").RefAttributes<View>>;
};
export { useSearchField };
export default CompoundSearchField;
//# sourceMappingURL=search-field.d.ts.map