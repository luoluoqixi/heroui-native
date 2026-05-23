import { View } from 'react-native';
import type { ISubMenuContext } from './sub-menu.types';
declare const useSubMenuContext: () => ISubMenuContext;
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    isOpen?: boolean;
    isDefaultOpen?: boolean;
    isDisabled?: boolean;
    onOpenChange?: (open: boolean) => void;
} & import("react").RefAttributes<View>>;
declare const Trigger: import("react").ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    textValue?: string;
    isDisabled?: boolean;
} & import("react").RefAttributes<View>>;
declare const Content: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & import("../../helpers/internal/types").ForceMountable & import("react").RefAttributes<View>>;
export { Content, Root, Trigger, useSubMenuContext };
//# sourceMappingURL=sub-menu.d.ts.map