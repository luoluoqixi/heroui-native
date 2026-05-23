import React from 'react';
import { Text, View } from 'react-native';
import type { GroupContextValue, IItemContext, IRootContext, MenuKey, PortalProps, TriggerRef } from './menu.types';
declare const useRootContext: () => IRootContext;
declare const Root: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    presentation?: "popover" | "bottom-sheet";
    isOpen?: boolean;
    isDefaultOpen?: boolean;
    isDisabled?: boolean;
    onOpenChange?: (open: boolean) => void;
} & React.RefAttributes<View>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    isDisabled?: boolean;
} & React.RefAttributes<TriggerRef>>;
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
declare const Content: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").PositionedContentProps & {
    width?: import("./menu.types").ContentSizing;
} & React.RefAttributes<View>>;
declare const Close: React.ForwardRefExoticComponent<Omit<import("react-native").PressableProps & React.RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
/**
 * Hook to access Menu Group context.
 * Provides selection state, disabled state, and selection mode.
 *
 * @throws Error if used outside a Menu Group component
 */
declare function useGroupContext(): GroupContextValue;
/**
 * Hook to access Menu Item context.
 * Provides the item's id, selected state, and disabled state.
 *
 * @throws Error if used outside a Menu Item component
 */
declare function useItemContext(): IItemContext;
declare const Group: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    selectionMode?: import("./menu.types").GroupSelectionMode;
    selectedKeys?: Iterable<MenuKey>;
    defaultSelectedKeys?: Iterable<MenuKey>;
    onSelectionChange?: (keys: Set<MenuKey>) => void;
    disabledKeys?: Iterable<MenuKey>;
    isDisabled?: boolean;
    shouldCloseOnSelect?: boolean;
    disallowEmptySelection?: boolean;
} & React.RefAttributes<View>>;
declare const Item: React.ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "disabled"> & {
    id?: MenuKey;
    isDisabled?: boolean;
    shouldCloseOnSelect?: boolean;
    isSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    variant?: import("./menu.types").ItemVariant;
} & React.RefAttributes<View>>;
declare const ItemTitle: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & React.RefAttributes<Text>>;
declare const ItemDescription: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & React.RefAttributes<Text>>;
declare const ItemIndicator: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("../../helpers/internal/types").ForceMountable & React.RefAttributes<View>>;
declare const Label: React.ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & React.RefAttributes<Text>>;
export { Close, Content, Group, Item, ItemDescription, ItemIndicator, ItemTitle, Label, Overlay, Portal, Root, Trigger, useGroupContext, useItemContext, useRootContext, };
//# sourceMappingURL=menu.d.ts.map