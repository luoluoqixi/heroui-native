import type { ToastGlobalConfig } from './types';
/**
 * Context for global toast configuration
 * Extracted to separate file to avoid circular dependencies with toast component
 */
declare const ToastConfigContext: import("react").Context<ToastGlobalConfig | undefined>;
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
export declare function useToastConfig(): ToastGlobalConfig | undefined;
export { ToastConfigContext };
//# sourceMappingURL=toast-config.context.d.ts.map