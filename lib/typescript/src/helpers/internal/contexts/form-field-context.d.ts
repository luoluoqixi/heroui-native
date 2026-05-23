/**
 * Combined context value for form field state and layout (shared across form field components).
 *
 * Providers: TextField, SearchField, ControlField, RadioGroup.
 * Consumers: Label, Description, FieldError, Input.
 */
export interface FormFieldContextValue {
    /**
     * Whether the form field is required
     */
    isRequired: boolean;
    /**
     * Whether the form field is disabled
     */
    isDisabled: boolean;
    /**
     * Whether the form field is in an invalid state
     */
    isInvalid: boolean;
    /**
     * When true, child components (Label, Description, FieldError) apply
     * additional horizontal padding (`px-1.5`) for consistent field layout.
     *
     * Set to `true` by container components like TextField and SearchField.
     */
    hasFieldPadding: boolean;
}
declare const FormFieldProvider: import("react").Provider<FormFieldContextValue>, useFormField: () => FormFieldContextValue;
export { FormFieldProvider, useFormField };
//# sourceMappingURL=form-field-context.d.ts.map