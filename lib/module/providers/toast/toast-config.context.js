"use strict";

import { createContext, useContext } from 'react';
/**
 * Context for global toast configuration
 * Extracted to separate file to avoid circular dependencies with toast component
 */
const ToastConfigContext = /*#__PURE__*/createContext(undefined);

/**
 * Hook to access global toast configuration
 *
 * @returns Global toast configuration or undefined if not set
 *
 * @example
 * ```tsx
 * const globalConfig = useToastConfig();
 * // Use globalConfig.variant, globalConfig.placement, etc.
 * ```
 */
export function useToastConfig() {
  return useContext(ToastConfigContext);
}
export { ToastConfigContext };
//# sourceMappingURL=toast-config.context.js.map