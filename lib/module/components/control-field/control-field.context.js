"use strict";

import { createContext } from "../../helpers/internal/utils/index.js";
/**
 * ControlField context provider and hook
 * Extracted to separate file to avoid circular dependencies with Checkbox/Switch animation files
 */
const [ControlFieldProvider, useControlField] = createContext({
  name: 'ControlFieldContext',
  strict: false
});
export { ControlFieldProvider, useControlField };
//# sourceMappingURL=control-field.context.js.map