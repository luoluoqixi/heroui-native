import { View } from 'react-native';
import type { SlottablePressableProps } from '../../helpers/internal/types';
import type { IndicatorProps, RootProps } from './checkbox.types';
interface RootContext extends RootProps {
    nativeID?: string;
}
declare const Root: import("react").ForwardRefExoticComponent<Omit<SlottablePressableProps, "disabled"> & {
    isSelected?: boolean;
    onSelectedChange?: (isSelected: boolean) => void;
    isDisabled?: boolean;
    isInvalid?: boolean;
} & import("react").RefAttributes<View>>;
declare function useCheckboxContext(): RootContext;
declare const Indicator: import("react").ForwardRefExoticComponent<IndicatorProps & import("react").RefAttributes<View>>;
export { Indicator, Root, useCheckboxContext };
//# sourceMappingURL=checkbox.d.ts.map