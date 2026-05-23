import { Text, View } from 'react-native';
import type { PortalProps, RootContext } from './bottom-sheet.types';
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    isOpen?: boolean;
    isDefaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
} & import("react").RefAttributes<View>>;
declare function useRootContext(): RootContext & {
    nativeID: string;
};
declare const Trigger: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
/**
 * @warning when using a custom `<PortalHost />`, you might have to adjust the Content's offset to account for nav elements like headers.
 */
declare function Portal({ hostName, children }: PortalProps): import("react/jsx-runtime").JSX.Element;
declare const Overlay: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & {
    isCloseOnPress?: boolean;
} & import("react").RefAttributes<View>>;
declare const Content: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Close: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Title: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
declare const Description: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
export { Close, Content, Description, Overlay, Portal, Root, Title, Trigger, useRootContext, };
//# sourceMappingURL=bottom-sheet.d.ts.map