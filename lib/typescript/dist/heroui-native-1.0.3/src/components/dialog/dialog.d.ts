import { type Text as RNText, type View } from 'react-native';
import * as DialogPrimitives from '../../primitives/dialog';
import { useDialogAnimation } from './dialog.animation';
import type { DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogRootProps, DialogTitleProps, DialogTriggerProps } from './dialog.types';
declare const useDialog: typeof DialogPrimitives.useRootContext;
/**
 * Compound Dialog component with sub-components
 *
 * @component Dialog.Root - Main container that manages open/close state.
 * Provides the dialog context to child components.
 *
 * @component Dialog.Trigger - Button or element that opens the dialog.
 * Accepts any pressable element as children.
 *
 * @component Dialog.Portal - Portal container for dialog overlay and content.
 * Renders children in a portal with centered layout.
 *
 * @component Dialog.Overlay - Background overlay that covers the screen.
 * Typically closes the dialog when clicked.
 *
 * @component Dialog.Content - The dialog content container.
 * Contains the main dialog UI elements.
 *
 * @component Dialog.Close - Close button for the dialog.
 * Can accept custom children or uses default close icon.
 *
 * @component Dialog.Title - The dialog title text.
 * Automatically linked for accessibility.
 *
 * @component Dialog.Description - The dialog description text.
 * Automatically linked for accessibility.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/dialog
 */
declare const Dialog: import("react").ForwardRefExoticComponent<DialogRootProps & import("react").RefAttributes<View>> & {
    /** @optional Trigger element to open the dialog */
    Trigger: import("react").ForwardRefExoticComponent<DialogTriggerProps & import("react").RefAttributes<View>>;
    /** @optional Portal container for overlay and content */
    Portal: {
        ({ className, children, style, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, ...props }: DialogPortalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** @optional Background overlay */
    Overlay: import("react").ForwardRefExoticComponent<DialogOverlayProps & import("react").RefAttributes<View>>;
    /** @optional Main dialog content container */
    Content: import("react").ForwardRefExoticComponent<DialogContentProps & import("react").RefAttributes<View>>;
    /** @optional Close button for the dialog */
    Close: import("react").ForwardRefExoticComponent<import("../close-button").CloseButtonProps & import("react").RefAttributes<View>>;
    /** @optional Dialog title text */
    Title: import("react").ForwardRefExoticComponent<DialogTitleProps & import("react").RefAttributes<RNText>>;
    /** @optional Dialog description text */
    Description: import("react").ForwardRefExoticComponent<DialogDescriptionProps & import("react").RefAttributes<RNText>>;
};
export { useDialog, useDialogAnimation };
export default Dialog;
//# sourceMappingURL=dialog.d.ts.map