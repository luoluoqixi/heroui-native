import type { Text as RNText } from 'react-native';
import { View } from 'react-native';
import * as MenuPrimitives from '../../primitives/menu';
import { useMenuAnimation } from './menu.animation';
import type { MenuContentProps, MenuGroupProps, MenuItemDescriptionProps, MenuItemIndicatorProps, MenuItemProps, MenuItemTitleProps, MenuLabelProps, MenuOverlayProps, MenuPortalProps, MenuRootProps, MenuTriggerProps } from './menu.types';
declare const useMenu: () => MenuPrimitives.IRootContext;
declare const useMenuItem: typeof MenuPrimitives.useItemContext;
/**
 * Compound Menu component with sub-components
 *
 * @component Menu - Main container that manages open/close state, positioning,
 * and provides context to child components.
 *
 * @component Menu.Trigger - Clickable element that toggles the menu visibility.
 *
 * @component Menu.Portal - Renders menu content in a portal layer above other content.
 *
 * @component Menu.Overlay - Optional background overlay to capture outside clicks.
 *
 * @component Menu.Content - Container for menu content with two presentation modes:
 * default floating popover with positioning and collision detection, or bottom sheet modal.
 *
 * @component Menu.Close - Close button for the menu.
 *
 * @component Menu.Group - Groups menu items with optional selection state (none, single, multiple).
 *
 * @component Menu.Label - Non-interactive section heading text within the menu.
 *
 * @component Menu.Item - Pressable menu item. Standalone or within a Group for selection.
 *
 * @component Menu.ItemTitle - Primary label text for a menu item.
 *
 * @component Menu.ItemDescription - Secondary description text for a menu item.
 *
 * @component Menu.ItemIndicator - Visual selection indicator (e.g. checkmark) for a menu item.
 */
declare const Menu: import("react").ForwardRefExoticComponent<MenuRootProps & import("react").RefAttributes<View>> & {
    Trigger: import("react").ForwardRefExoticComponent<MenuTriggerProps & import("react").RefAttributes<MenuPrimitives.TriggerRef>>;
    Portal: {
        ({ className, children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, ...props }: MenuPortalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Overlay: import("react").ForwardRefExoticComponent<MenuOverlayProps & import("react").RefAttributes<View>>;
    Content: import("react").ForwardRefExoticComponent<MenuContentProps & import("react").RefAttributes<View | import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
    Close: import("react").ForwardRefExoticComponent<import("../close-button").CloseButtonProps & import("react").RefAttributes<View>>;
    Group: import("react").ForwardRefExoticComponent<MenuGroupProps & import("react").RefAttributes<View>>;
    Label: import("react").ForwardRefExoticComponent<MenuLabelProps & import("react").RefAttributes<RNText>>;
    Item: import("react").ForwardRefExoticComponent<MenuItemProps & import("react").RefAttributes<View>>;
    ItemTitle: import("react").ForwardRefExoticComponent<MenuItemTitleProps & import("react").RefAttributes<RNText>>;
    ItemDescription: import("react").ForwardRefExoticComponent<MenuItemDescriptionProps & import("react").RefAttributes<RNText>>;
    ItemIndicator: import("react").ForwardRefExoticComponent<MenuItemIndicatorProps & import("react").RefAttributes<View>>;
};
export { useMenu, useMenuAnimation, useMenuItem };
export default Menu;
//# sourceMappingURL=menu.d.ts.map