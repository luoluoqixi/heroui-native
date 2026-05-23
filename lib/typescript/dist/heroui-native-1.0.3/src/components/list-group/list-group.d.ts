import { View } from 'react-native';
import type { ListGroupItemContentProps, ListGroupItemDescriptionProps, ListGroupItemPrefixProps, ListGroupItemProps, ListGroupItemSuffixProps, ListGroupItemTitleProps, ListGroupRootProps } from './list-group.types';
/**
 * Compound ListGroup component with sub-components
 *
 * @component ListGroup - Surface-based container that groups related list items.
 * Supports all Surface variants (default, secondary, tertiary, transparent).
 *
 * @component ListGroup.Item - Horizontal flex-row container for a single item,
 * providing consistent spacing and alignment.
 *
 * @component ListGroup.ItemPrefix - Optional leading content slot for icons,
 * avatars, or other visual elements.
 *
 * @component ListGroup.ItemContent - Flex-1 wrapper for title and description,
 * occupying the remaining horizontal space.
 *
 * @component ListGroup.ItemTitle - Primary text label styled with foreground color
 * and medium font weight.
 *
 * @component ListGroup.ItemDescription - Secondary text styled with muted color
 * and smaller font size.
 *
 * @component ListGroup.ItemSuffix - Optional trailing content slot. Renders a
 * chevron-right icon by default; accepts children to override the default icon.
 * Supports iconProps (size, color) for customising the default chevron.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/list-group
 */
declare const CompoundListGroup: import("react").ForwardRefExoticComponent<ListGroupRootProps & import("react").RefAttributes<View>> & {
    /** @optional Single item row with flex-row layout */
    Item: import("react").ForwardRefExoticComponent<ListGroupItemProps & import("react").RefAttributes<View>>;
    /** @optional Leading visual element (icon / avatar) */
    ItemPrefix: import("react").ForwardRefExoticComponent<ListGroupItemPrefixProps & import("react").RefAttributes<View>>;
    /** @optional Flex-1 content wrapper for title and description */
    ItemContent: import("react").ForwardRefExoticComponent<ListGroupItemContentProps & import("react").RefAttributes<View>>;
    /** @optional Primary text label */
    ItemTitle: import("react").ForwardRefExoticComponent<ListGroupItemTitleProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Secondary descriptive text */
    ItemDescription: import("react").ForwardRefExoticComponent<ListGroupItemDescriptionProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Trailing element, defaults to chevron-right icon */
    ItemSuffix: import("react").ForwardRefExoticComponent<ListGroupItemSuffixProps & import("react").RefAttributes<View>>;
};
export default CompoundListGroup;
//# sourceMappingURL=list-group.d.ts.map