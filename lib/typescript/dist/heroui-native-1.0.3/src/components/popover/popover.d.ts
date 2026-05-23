import type { Text as RNText } from 'react-native';
import { View } from 'react-native';
import * as PopoverPrimitives from '../../primitives/popover';
import { usePopoverAnimation } from './popover.animation';
import type { PopoverArrowProps, PopoverContentProps, PopoverDescriptionProps, PopoverOverlayProps, PopoverPortalProps, PopoverRootProps, PopoverTitleProps, PopoverTriggerProps } from './popover.types';
declare const usePopover: () => PopoverPrimitives.IRootContext;
/**
 * Compound Popover component with sub-components
 *
 * @component Popover - Main container that manages open/close state, positioning,
 * and provides context to child components. Handles placement, alignment, and collision detection.
 *
 * @component Popover.Trigger - Clickable element that toggles the popover visibility.
 * Wraps any child element with press handlers.
 *
 * @component Popover.Portal - Renders popover content in a portal layer above other content.
 * Ensures proper stacking and positioning.
 *
 * @component Popover.Overlay - Optional background overlay. Can be transparent or
 * semi-transparent to capture outside clicks.
 *
 * @component Popover.Content - Container for popover content with two presentation modes:
 * default floating popover with positioning and collision detection, or bottom sheet modal.
 * Supports arrow indicators and custom animations.
 *
 * @component Popover.Arrow - Optional arrow indicator pointing to the trigger element.
 * Automatically positions itself based on popover placement.
 *
 * @component Popover.Close - Close button for the popover.
 * Can accept custom children or uses default close icon.
 *
 * @component Popover.Title - Optional title text with pre-styled typography.
 *
 * @component Popover.Description - Optional description text with muted styling.
 *
 * Props flow from Popover to sub-components via context (placement, align, offset, etc.).
 * The popover automatically positions itself relative to the trigger element.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/popover
 */
declare const Popover: import("react").ForwardRefExoticComponent<PopoverRootProps & import("react").RefAttributes<View>> & {
    Trigger: import("react").ForwardRefExoticComponent<PopoverTriggerProps & import("react").RefAttributes<PopoverPrimitives.TriggerRef>>;
    Portal: {
        ({ className, children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, ...props }: PopoverPortalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Overlay: import("react").ForwardRefExoticComponent<PopoverOverlayProps & import("react").RefAttributes<View>>;
    Content: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<View | import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
    Arrow: import("react").ForwardRefExoticComponent<PopoverArrowProps & import("react").RefAttributes<View>>;
    Close: import("react").ForwardRefExoticComponent<import("../close-button").CloseButtonProps & import("react").RefAttributes<View>>;
    Title: import("react").ForwardRefExoticComponent<PopoverTitleProps & import("react").RefAttributes<RNText>>;
    Description: import("react").ForwardRefExoticComponent<PopoverDescriptionProps & import("react").RefAttributes<RNText>>;
};
export { usePopover, usePopoverAnimation };
export default Popover;
//# sourceMappingURL=popover.d.ts.map