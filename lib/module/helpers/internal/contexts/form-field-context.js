"use strict";

import { createContext } from "../utils/index.js";

/**
 * Combined context value for form field state and layout (shared across form field components).
 *
 * Providers: TextField, SearchField, ControlField, RadioGroup.
 * Consumers: Label, Description, FieldError, Input.
 */

const [FormFieldProvider, useFormField] = createContext({
  name: 'FormFieldContext',
  strict: false
});
export { FormFieldProvider, useFormField };
//# sourceMappingURL=form-field-context.js.map