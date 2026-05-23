import type { MeasurementsContextValue } from './tabs.types';
/**
 * Context for managing tab item measurements
 * Used to track width, height, and position of each tab trigger
 */
declare const MeasurementsContext: import("react").Context<MeasurementsContextValue | null>;
/**
 * Hook to access tab measurements context
 * @throws Error if used outside of Tabs component
 */
declare function useTabsMeasurements(): MeasurementsContextValue;
export { MeasurementsContext, useTabsMeasurements };
//# sourceMappingURL=tabs.context.d.ts.map