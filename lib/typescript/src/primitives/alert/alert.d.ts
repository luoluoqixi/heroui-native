import { Text as RNText, View } from 'react-native';
import type { RootContext } from './alert.types';
/**
 * Hook to access alert root context.
 * Throws when used outside Alert.Root.
 */
declare function useRootContext(): RootContext & {
    nativeID: string;
};
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    id?: string | number;
    status?: import("./alert.types").AlertStatus;
} & import("react").RefAttributes<View>>;
declare const Indicator: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Content: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Title: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<RNText>>;
declare const Description: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<RNText>>;
export { Content, Description, Indicator, Root, Title, useRootContext };
//# sourceMappingURL=alert.d.ts.map