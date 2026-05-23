import { Text, View } from 'react-native';
import type { RootContextValue, TagKey } from './tag-group.types';
/**
 * Hook to access TagGroup root context.
 * Provides selection state, disabled state, and remove handler.
 *
 * @throws Error if used outside a TagGroup Root component
 */
export declare function useRootContext(): RootContextValue;
interface IItemContext {
    id: TagKey;
    isSelected: boolean;
    isDisabled: boolean;
    allowsRemoving: boolean;
}
/**
 * Hook to access TagGroup Item context.
 * Provides the item's id, selected state, disabled state, and remove capability.
 *
 * @throws Error if used outside a TagGroup Item component
 */
export declare function useItemContext(): IItemContext;
declare const Root: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    selectionMode?: import("./tag-group.types").SelectionMode;
    selectedKeys?: Iterable<TagKey>;
    defaultSelectedKeys?: Iterable<TagKey>;
    onSelectionChange?: (keys: Set<TagKey>) => void;
    disabledKeys?: Iterable<TagKey>;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isRequired?: boolean;
    onRemove?: (keys: Set<TagKey>) => void;
} & import("react").RefAttributes<View>>;
declare const List: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Item: import("react").ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").SlottablePressableProps, "id"> & {
    id: TagKey;
    isDisabled?: boolean;
} & import("react").RefAttributes<View>>;
declare const ItemLabel: import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    asChild?: boolean;
} & import("react").RefAttributes<Text>>;
declare const RemoveButton: import("react").ForwardRefExoticComponent<Omit<import("react-native").PressableProps & import("react").RefAttributes<View>, "ref"> & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
export { Item, ItemLabel, List, RemoveButton, Root };
//# sourceMappingURL=tag-group.d.ts.map