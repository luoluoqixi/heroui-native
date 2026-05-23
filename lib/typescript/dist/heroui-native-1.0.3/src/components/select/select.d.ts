import type { Text as RNText } from 'react-native';
import { View } from 'react-native';
import * as SelectPrimitives from '../../primitives/select';
import * as SelectPrimitivesTypes from '../../primitives/select/select.types';
import { useSelectAnimation } from './select.animation';
import type { SelectContentProps, SelectItemDescriptionProps, SelectItemIndicatorProps, SelectItemLabelProps, SelectItemProps, SelectListLabelProps, SelectOverlayProps, SelectPortalProps, SelectRootProps, SelectTriggerIndicatorProps, SelectTriggerProps, SelectValueProps } from './select.types';
declare const useSelect: () => SelectPrimitives.IRootContext;
declare const useSelectItem: typeof SelectPrimitives.useItemContext;
declare function SelectRoot<M extends SelectPrimitivesTypes.SelectionMode = 'single'>({ children, ref, isOpen, isDefaultOpen, onOpenChange, animation, ...props }: SelectRootProps<M> & {
    ref?: React.Ref<SelectPrimitivesTypes.RootRef>;
}): import("react/jsx-runtime").JSX.Element;
declare namespace SelectRoot {
    var displayName: "HeroUINative.Select.Root";
}
/**
 * Compound Select component with sub-components
 *
 * @component Select - Main container that manages open/close state, positioning,
 * value selection and provides context to child components. Handles placement, alignment, and collision detection.
 *
 * @component Select.Trigger - Clickable element that toggles the select visibility.
 * Wraps any child element with press handlers.
 *
 * @component Select.TriggerIndicator - Optional visual indicator showing open/close state.
 * Defaults to an animated chevron icon that rotates based on select state.
 * Supports custom animation configuration.
 *
 * @component Select.Value - Displays the selected value or placeholder text.
 * Automatically updates when selection changes.
 *
 * @component Select.Portal - Renders select content in a portal layer above other content.
 * Ensures proper stacking and positioning.
 *
 * @component Select.Overlay - Optional background overlay. Can be transparent or
 * semi-transparent to capture outside clicks.
 *
 * @component Select.Content - Container for select content with three presentation modes:
 * popover (default floating with positioning and collision detection), bottom sheet modal, or dialog modal.
 * Supports custom animations.
 *
 * @component Select.Item - Selectable option item. Handles selection state and press events.
 *
 * @component Select.ItemLabel - Displays the label text for an item.
 *
 * @component Select.ItemIndicator - Optional indicator shown for selected items.
 *
 * @component Select.ListLabel - Label for the list of items.
 *
 * @component Select.Close - Close button for the select.
 * Can accept custom children or uses default close icon.
 *
 * @component Select.ItemDescription - Optional description text for items with muted styling.
 *
 * Props flow from Select to sub-components via context (placement, align, offset, value, etc.).
 * The select automatically positions itself relative to the trigger element.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/select
 */
declare const Select: typeof SelectRoot & {
    Trigger: import("react").ForwardRefExoticComponent<SelectTriggerProps & import("react").RefAttributes<SelectPrimitives.TriggerRef>>;
    /** @optional Visual indicator showing open/close state (defaults to chevron) */
    TriggerIndicator: import("react").ForwardRefExoticComponent<SelectTriggerIndicatorProps & import("react").RefAttributes<View>>;
    Value: import("react").ForwardRefExoticComponent<SelectValueProps & import("react").RefAttributes<RNText>>;
    Portal: {
        ({ className, children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, ...props }: SelectPortalProps): import("react/jsx-runtime").JSX.Element;
        displayName: "HeroUINative.Select.Portal";
    };
    Overlay: import("react").ForwardRefExoticComponent<SelectOverlayProps & import("react").RefAttributes<View>>;
    Content: import("react").ForwardRefExoticComponent<SelectContentProps & import("react").RefAttributes<View | import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
    Item: import("react").ForwardRefExoticComponent<SelectItemProps & import("react").RefAttributes<View>>;
    ItemLabel: import("react").ForwardRefExoticComponent<SelectItemLabelProps & import("react").RefAttributes<RNText>>;
    ItemDescription: import("react").ForwardRefExoticComponent<SelectItemDescriptionProps & import("react").RefAttributes<RNText>>;
    ItemIndicator: import("react").ForwardRefExoticComponent<SelectItemIndicatorProps & import("react").RefAttributes<View>>;
    ListLabel: import("react").ForwardRefExoticComponent<SelectListLabelProps & import("react").RefAttributes<RNText>>;
    Close: import("react").ForwardRefExoticComponent<import("../close-button").CloseButtonProps & import("react").RefAttributes<View>>;
};
export { useSelect, useSelectAnimation, useSelectItem };
export default Select;
//# sourceMappingURL=select.d.ts.map