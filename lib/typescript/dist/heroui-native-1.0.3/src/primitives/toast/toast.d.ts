import { Text, View } from 'react-native';
import type { RootContext } from './toast.types';
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    id?: string | number;
} & import("react").RefAttributes<View>>;
declare function useRootContext(): RootContext;
declare const Title: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
declare const Description: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
declare const Action: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & {
    altText?: string;
} & import("react").RefAttributes<View>>;
declare const Close: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
export { Action, Close, Description, Root, Title, useRootContext };
//# sourceMappingURL=toast.d.ts.map