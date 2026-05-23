import * as TagGroupPrimitives from '../../primitives/tag-group';
import type { TagGroupItemLabelProps, TagGroupItemProps, TagGroupItemRemoveButtonProps, TagGroupListProps, TagGroupProps } from './tag-group.types';
/** Re-exports primitive useRootContext */
declare const useTagGroup: typeof TagGroupPrimitives.useRootContext;
/** Re-exports primitive useItemContext */
declare const useTagGroupItem: typeof TagGroupPrimitives.useItemContext;
/**
 * Compound TagGroup component with sub-components
 *
 * @component TagGroup - Main container that manages tag selection state,
 * disabled keys, and remove functionality. Provides size and variant
 * context to all child components.
 *
 * @component TagGroup.List - Container for rendering the list of tags
 * with optional empty state rendering.
 *
 * @component TagGroup.Item - Individual tag within the group. Supports string
 * children (auto-wrapped in TagGroup.ItemLabel), render function children,
 * or custom layouts.
 *
 * @component TagGroup.ItemLabel - Text label for the tag. Automatically
 * rendered when string children are provided, or can be used explicitly.
 *
 * @component TagGroup.ItemRemoveButton - Remove button for the tag. Must be
 * placed explicitly by the consumer when removal is needed.
 *
 * Props flow from TagGroup to sub-components via context (size, variant).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/tag-group
 */
declare const TagGroup: import("react").ForwardRefExoticComponent<TagGroupProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Container for the list of tags */
    List: import("react").ForwardRefExoticComponent<TagGroupListProps & import("react").RefAttributes<import("react-native").View>>;
    /** Individual tag item within the group */
    Item: import("react").ForwardRefExoticComponent<TagGroupItemProps & import("react").RefAttributes<import("react-native").View>>;
    /** Text label for the tag item */
    ItemLabel: import("react").ForwardRefExoticComponent<TagGroupItemLabelProps & import("react").RefAttributes<import("react-native").Text>>;
    /** Remove button for the tag item */
    ItemRemoveButton: import("react").ForwardRefExoticComponent<TagGroupItemRemoveButtonProps & import("react").RefAttributes<import("react-native").View>>;
};
export { TagGroup, useTagGroup, useTagGroupItem };
export default TagGroup;
//# sourceMappingURL=tag-group.d.ts.map