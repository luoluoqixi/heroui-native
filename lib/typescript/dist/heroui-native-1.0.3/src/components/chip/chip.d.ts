import { View } from 'react-native';
import type { ChipContextValue, ChipLabelProps, ChipProps } from './chip.types';
declare const useChip: () => ChipContextValue;
/**
 * Compound Chip component with sub-components
 *
 * @component Chip - Main container that displays a compact element. Renders with
 * string children as label or accepts compound components for custom layouts.
 *
 * @component Chip.Label - Text content of the chip. When string is provided,
 * it renders as Text. Otherwise renders children as-is.
 *
 * Props flow from Chip to sub-components via context (size, variant, color).
 * All components use animated views with layout transitions for smooth animations.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/chip
 */
declare const CompoundChip: import("react").ForwardRefExoticComponent<ChipProps & import("react").RefAttributes<View>> & {
    /** Chip label - renders text or custom content */
    Label: import("react").ForwardRefExoticComponent<ChipLabelProps & import("react").RefAttributes<View>>;
};
export { useChip };
export default CompoundChip;
//# sourceMappingURL=chip.d.ts.map