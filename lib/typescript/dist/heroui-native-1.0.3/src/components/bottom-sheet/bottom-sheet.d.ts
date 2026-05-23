import { type Text as RNText } from 'react-native';
import * as BottomSheetPrimitives from '../../primitives/bottom-sheet';
import { useBottomSheetAnimation } from './bottom-sheet.animation';
import type { BottomSheetContentProps, BottomSheetDescriptionProps, BottomSheetOverlayProps, BottomSheetPortalProps, BottomSheetRootProps, BottomSheetTitleProps, BottomSheetTriggerProps } from './bottom-sheet.types';
declare const useBottomSheet: typeof BottomSheetPrimitives.useRootContext;
/**
 * Compound BottomSheet component with sub-components
 *
 * @component BottomSheet.Root - Main container that manages open/close state.
 * Provides the bottom sheet context to child components.
 *
 * @component BottomSheet.Trigger - Button or element that opens the bottom sheet.
 * Accepts any pressable element as children.
 *
 * @component BottomSheet.Portal - Portal container for bottom sheet overlay and content.
 * Renders children in a portal with full window overlay.
 *
 * @component BottomSheet.Overlay - Background overlay that covers the screen.
 * Typically closes the bottom sheet when clicked.
 *
 * @component BottomSheet.Content - The bottom sheet content container.
 * Uses @gorhom/bottom-sheet for rendering. Contains the main bottom sheet UI elements.
 *
 * @component BottomSheet.Close - Close button for the bottom sheet.
 * Can accept custom children or uses default close icon.
 *
 * @component BottomSheet.Title - The bottom sheet title text.
 * Automatically linked for accessibility.
 *
 * @component BottomSheet.Description - The bottom sheet description text.
 * Automatically linked for accessibility.
 */
declare const BottomSheet: import("react").ForwardRefExoticComponent<BottomSheetRootProps & import("react").RefAttributes<import("react-native").View>> & {
    /** @optional Trigger element to open the bottom sheet */
    Trigger: import("react").ForwardRefExoticComponent<BottomSheetTriggerProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Portal container for overlay and content */
    Portal: {
        ({ children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, ...props }: BottomSheetPortalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** @optional Background overlay */
    Overlay: import("react").ForwardRefExoticComponent<BottomSheetOverlayProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Main bottom sheet content container */
    Content: import("react").ForwardRefExoticComponent<BottomSheetContentProps & import("react").RefAttributes<import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
    /** @optional Close button for the bottom sheet */
    Close: import("react").ForwardRefExoticComponent<import("../close-button").CloseButtonProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Bottom sheet title text */
    Title: import("react").ForwardRefExoticComponent<BottomSheetTitleProps & import("react").RefAttributes<RNText>>;
    /** @optional Bottom sheet description text */
    Description: import("react").ForwardRefExoticComponent<BottomSheetDescriptionProps & import("react").RefAttributes<RNText>>;
};
export { useBottomSheet, useBottomSheetAnimation };
export default BottomSheet;
//# sourceMappingURL=bottom-sheet.d.ts.map