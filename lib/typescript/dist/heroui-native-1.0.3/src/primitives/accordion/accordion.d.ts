import { View } from 'react-native';
import type { ItemProps, RootContext, RootProps } from './accordion.types';
declare const Root: import("react").ForwardRefExoticComponent<RootProps & import("react").RefAttributes<View>>;
declare function useRootContext(): RootContext;
type AccordionItemContext = ItemProps & {
    nativeID: string;
    isExpanded: boolean;
};
declare const AccordionItemContext: import("react").Context<AccordionItemContext | null>;
declare const Item: import("react").ForwardRefExoticComponent<{
    value: string;
    isDisabled?: boolean;
} & import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare function useItemContext(): AccordionItemContext;
declare const Header: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Trigger: import("react").ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    isDisabled?: boolean;
} & import("react").RefAttributes<View>>;
declare const Indicator: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Content: import("react").ForwardRefExoticComponent<import("../../helpers/internal/types").ForceMountable & import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
export { Content, Header, Indicator, Item, Root, Trigger, useItemContext, useRootContext, };
//# sourceMappingURL=accordion.d.ts.map