import type { ControlFieldContextValue } from './control-field.types';
/**
 * ControlField context provider and hook
 * Extracted to separate file to avoid circular dependencies with Checkbox/Switch animation files
 */
declare const ControlFieldProvider: import("react").Provider<ControlFieldContextValue>, useControlField: () => ControlFieldContextValue;
export { ControlFieldProvider, useControlField };
//# sourceMappingURL=control-field.context.d.ts.map