"use strict";

import { createContext } from "../../helpers/internal/utils/index.js";
/**
 * RadioGroupItem context provider and hook
 * Extracted to separate file to avoid circular dependencies with Label component
 */
const [RadioGroupItemProvider, useRadioGroupItem] = createContext({
  name: 'RadioGroupItemContext',
  strict: false
});
export { RadioGroupItemProvider, useRadioGroupItem };
//# sourceMappingURL=radio-group.context.js.map