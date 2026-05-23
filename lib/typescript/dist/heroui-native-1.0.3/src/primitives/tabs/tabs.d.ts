import { Text, View } from 'react-native';
import type { RootProps } from './tabs.types';
type RootContext = RootProps & {
    nativeID: string;
};
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    value: string;
    onValueChange: (value: string) => void;
} & import("react").RefAttributes<View>>;
declare function useRootContext(): RootContext;
declare const List: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Indicator: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
type TriggerContext = {
    value: string;
    nativeID: string;
    isSelected: boolean;
};
declare const TriggerContext: import("react").Context<TriggerContext | null>;
declare const Trigger: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & {
    value: string;
} & import("react").RefAttributes<View>>;
declare function useTriggerContext(): TriggerContext;
declare const Label: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
declare const Content: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").ForceMountable & {
    value: string;
} & import("react").RefAttributes<View>>;
export { Content, Indicator, Label, List, Root, Trigger, useRootContext, useTriggerContext, };
//# sourceMappingURL=tabs.d.ts.map