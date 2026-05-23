import { View } from 'react-native';
import type { SlottablePressableProps } from '../../helpers/internal/types';
import type { IndicatorProps, RootContext } from './radio.types';
/**
 * Radio Root primitive component.
 * Provides context for child compound components and renders a Trigger.
 */
declare const Root: import("react").ForwardRefExoticComponent<Omit<SlottablePressableProps, "disabled"> & {
    isSelected?: boolean;
    onSelectedChange?: (isSelected: boolean) => void;
    isDisabled?: boolean;
    isInvalid?: boolean;
    variant?: "primary" | "secondary";
} & import("react").RefAttributes<View>>;
/**
 * Hook to access radio context values within compound components.
 * Throws if used outside of a Radio component.
 */
declare function useRadioContext(): RootContext;
/**
 * Radio Indicator primitive component.
 * Renders a visual indicator for the radio selection state.
 */
declare const Indicator: import("react").ForwardRefExoticComponent<IndicatorProps & import("react").RefAttributes<View>>;
export { Indicator, Root, useRadioContext };
//# sourceMappingURL=radio.d.ts.map