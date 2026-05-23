import * as SubMenuPrimitives from '../../primitives/sub-menu';
import { useSubMenuAnimation } from './sub-menu.animation';
import type { SubMenuContentProps, SubMenuRootProps, SubMenuTriggerIndicatorProps, SubMenuTriggerProps } from './sub-menu.types';
declare const useSubMenu: () => SubMenuPrimitives.ISubMenuContext;
/**
 * Compound SubMenu component with sub-components.
 *
 * @component SubMenu - Root container that manages open/close state and
 * provides animation settings context to children.
 *
 * @component SubMenu.Trigger - Pressable item that toggles the submenu,
 * styled like a menu item.
 *
 * @component SubMenu.TriggerIndicator - Animated indicator (default: chevron-right)
 * that rotates when the submenu opens/closes. Place inside SubMenu.Trigger.
 *
 * @component SubMenu.Content - Absolutely positioned content that animates
 * its height when the submenu opens/closes.
 */
declare const SubMenu: import("react").ForwardRefExoticComponent<SubMenuRootProps & import("react").RefAttributes<import("react-native").View>> & {
    Trigger: import("react").ForwardRefExoticComponent<SubMenuTriggerProps & import("react").RefAttributes<import("react-native").View>>;
    TriggerIndicator: import("react").ForwardRefExoticComponent<SubMenuTriggerIndicatorProps & import("react").RefAttributes<import("react-native").View>>;
    Content: import("react").ForwardRefExoticComponent<SubMenuContentProps & import("react").RefAttributes<import("react-native").View>>;
};
export { useSubMenu, useSubMenuAnimation };
export default SubMenu;
//# sourceMappingURL=sub-menu.d.ts.map