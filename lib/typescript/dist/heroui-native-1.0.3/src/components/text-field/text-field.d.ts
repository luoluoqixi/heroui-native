import { View } from 'react-native';
import type { TextFieldContextValue, TextFieldRootProps } from './text-field.types';
declare const useTextField: () => TextFieldContextValue;
/**
 * TextField component - Main container that provides gap-1 spacing between children.
 * Handles disabled state and validation state for the entire field.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/text-field
 */
declare const TextField: import("react").ForwardRefExoticComponent<TextFieldRootProps & import("react").RefAttributes<View>>;
export default TextField;
export { useTextField };
//# sourceMappingURL=text-field.d.ts.map