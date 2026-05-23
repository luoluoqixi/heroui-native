import type { PopupPopoverContentAnimation } from '../../helpers/internal/types';
import type { MenuAnimationContextValue, MenuItemAnimation, MenuItemVariant } from './menu.types';
declare const MenuAnimationProvider: import("react").Provider<MenuAnimationContextValue>, useMenuAnimation: () => MenuAnimationContextValue;
declare function useMenuItemAnimation(options: {
    animation: MenuItemAnimation | undefined;
    variant: MenuItemVariant;
    isInsideSubMenu: boolean;
}): {
    rItemStyle: {
        backgroundColor: string;
        transform: {
            scale: number;
        }[];
    } | {
        backgroundColor: string;
        transform?: undefined;
    };
    isPressed: import("react-native-reanimated").SharedValue<boolean>;
    animationOnPressIn: () => void;
    animationOnPressOut: () => void;
};
/**
 * Hook providing animated styles for the menu content popover when a sub-menu opens.
 * Delays scale animation until after mount to avoid conflicting with enter animation.
 *
 * @param options.isSubMenuOpen - Whether a sub-menu is currently open
 * @param options.animation - Animation configuration for content popover
 * @returns Animated style object for the content container (scale: 0.98 when sub-menu open, 1 otherwise)
 */
declare function useMenuContentPopoverAnimation(options: {
    isSubMenuOpen: boolean;
    animation?: PopupPopoverContentAnimation;
}): {
    transform?: undefined;
} | {
    transform: {
        scale: number;
    }[];
};
export { MenuAnimationProvider, useMenuAnimation, useMenuContentPopoverAnimation, useMenuItemAnimation, };
//# sourceMappingURL=menu.animation.d.ts.map