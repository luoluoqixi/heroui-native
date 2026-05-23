import { View } from 'react-native';
import type { RootProps } from './radio-group.types';
declare const Root: import("react").ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottableViewProps, "disabled"> & {
    value: string | undefined;
    onValueChange: (val: string) => void;
    isDisabled?: boolean;
    isInvalid?: boolean;
    variant?: "primary" | "secondary";
} & import("react").RefAttributes<View>>;
declare function useRadioGroupContext(): RootProps;
declare const Item: import("react").ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    isDisabled?: boolean;
    value: string;
    'aria-labelledby'?: string;
} & import("react").RefAttributes<View>>;
declare const Indicator: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").ForceMountable & import("react").RefAttributes<View>>;
export { Indicator, Item, Root, useRadioGroupContext };
//# sourceMappingURL=radio-group.d.ts.map