import React from 'react';
import type { SkeletonGroupContextValue, SkeletonGroupItemProps, SkeletonGroupRootProps } from './skeleton-group.types';
declare const useSkeletonGroupContext: () => SkeletonGroupContextValue;
/**
 * Compound SkeletonGroup component for managing multiple skeleton loading states
 *
 * @component SkeletonGroup - Root container that provides centralized control for all skeleton items.
 * Passes isLoading, variant, and animation to child items via context.
 *
 * @component SkeletonGroup.Item - Individual skeleton item that inherits props from the parent group.
 * Can override group props with its own props for specific customization.
 *
 * Props flow from SkeletonGroup to Items via context (isLoading, variant, animation).
 * Items can override any inherited prop by passing their own values.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/skeleton-group
 */
declare const SkeletonGroup: React.FC<React.PropsWithChildren<SkeletonGroupRootProps>> & {
    /** @optional Individual skeleton item that inherits group settings */
    Item: React.FC<SkeletonGroupItemProps>;
};
export default SkeletonGroup;
export { useSkeletonGroupContext };
//# sourceMappingURL=skeleton-group.d.ts.map