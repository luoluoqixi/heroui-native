import React from 'react';
import { Text, View } from 'react-native';
import type { IRootContext, ItemLabelProps, PortalProps, RootProps, RootRef, SelectionMode, TriggerRef } from './select.types';
declare const useRootContext: () => IRootContext;
declare function Root<M extends SelectionMode = 'single'>({ asChild, ref, value: valueProp, defaultValue, onValueChange: onValueChangeProp, isOpen: isOpenProp, isDefaultOpen, onOpenChange: onOpenChangeProp, isDisabled, selectionMode, presentation, ...viewProps }: RootProps<M> & {
    ref?: React.Ref<RootRef>;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Root {
    var displayName: string;
}
declare const Trigger: React.ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    isDisabled?: boolean;
} & React.RefAttributes<TriggerRef>>;
declare const Value: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & {
    placeholder: string;
} & React.RefAttributes<Text>>;
declare const TriggerIndicator: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
/**
 * @warning when using a custom `<PortalHost />`, you might have to adjust the Content's offset to account for nav elements like headers.
 */
declare function Portal({ forceMount, hostName, children }: PortalProps): import("react/jsx-runtime").JSX.Element | null;
declare const Overlay: React.ForwardRefExoticComponent<import("../../helpers/internal/types").ForceMountable & Omit<import("react-native").PressableProps & React.RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & {
    closeOnPress?: boolean;
} & React.RefAttributes<View>>;
/**
 * @info `position`, `top`, `left`, and `maxWidth` style properties are controlled internally. Opt out of this behavior by setting `disablePositioningStyle` to `true`.
 */
declare const PopoverContent: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").PositionedContentProps & {
    width?: import("./select.types").ContentSizing;
} & React.RefAttributes<View>>;
declare const DialogContent: React.ForwardRefExoticComponent<import("../../helpers/internal/types").ForceMountable & import("react-native").ViewProps & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
declare const Close: React.ForwardRefExoticComponent<Omit<import("react-native").PressableProps & React.RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
declare function useItemContext(): {
    itemValue: string;
    label: string;
};
declare const Item: React.ForwardRefExoticComponent<Omit<import("react-native").PressableProps & React.RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & {
    value: string;
    label: string;
    closeOnPress?: boolean;
} & React.RefAttributes<View>>;
declare const ItemLabel: React.ForwardRefExoticComponent<ItemLabelProps & React.RefAttributes<Text>>;
declare const ItemIndicator: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").ForceMountable & React.RefAttributes<View>>;
declare const Group: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
declare const GroupLabel: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & React.RefAttributes<Text>>;
export { Close, DialogContent, Group, GroupLabel, Item, ItemIndicator, ItemLabel, Overlay, PopoverContent, Portal, Root, Trigger, TriggerIndicator, useItemContext, useRootContext, Value, };
//# sourceMappingURL=select.d.ts.map