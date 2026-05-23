import { View } from 'react-native';
import * as AccordionPrimitive from '../../primitives/accordion';
import type { AccordionContentProps, AccordionIndicatorProps, AccordionItemProps, AccordionTriggerProps } from './accordion.types';
declare const useAccordion: typeof AccordionPrimitive.useRootContext;
declare const useAccordionItem: typeof AccordionPrimitive.useItemContext;
/**
 * Compound Accordion component with sub-components
 *
 * @component Accordion - Main container that manages the accordion state and behavior.
 * Controls expansion/collapse of items, supports single or multiple selection modes,
 * and provides variant styling (default or surface).
 *
 * @component Accordion.Item - Container for individual accordion items.
 * Wraps the trigger and content, managing the expanded state for each item.
 * Supports render function children that receive expansion state.
 *
 * @component Accordion.Trigger - Interactive element that toggles item expansion.
 * Built on Header and Trigger primitives.
 *
 * @component Accordion.Indicator - Optional visual indicator showing expansion state.
 * Defaults to an animated chevron icon that rotates based on item state.
 * Supports custom animation configuration.
 *
 * @component Accordion.Content - Container for expandable content.
 * Animated with layout transitions for smooth expand/collapse effects.
 * Supports custom entering and exiting animations.
 *
 * Props flow from Accordion to sub-components via context (variant).
 * Animation state flows via AccordionAnimationProvider.
 * Item expansion state is managed by the primitive accordion context.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/accordion
 */
declare const CompoundAccordion: import("react").ForwardRefExoticComponent<Omit<import("react-native-reanimated").AnimatedProps<AccordionPrimitive.RootProps>, "layout"> & {
    children?: React.ReactNode;
    variant?: import("./accordion.types").AccordionVariant;
    hideSeparator?: boolean;
    className?: string;
    classNames?: import("../../helpers/internal/types").ElementSlots<import("./accordion.styles").RootSlots>;
    styles?: Partial<Record<import("./accordion.styles").RootSlots, import("react-native").ViewStyle>>;
    animation?: import("./accordion.types").AccordionRootAnimation;
} & import("react").RefAttributes<View>> & {
    /** @required Container for individual accordion items */
    Item: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<View>>;
    /** @required Interactive trigger element */
    Trigger: import("react").ForwardRefExoticComponent<AccordionTriggerProps & import("react").RefAttributes<View>>;
    /** @optional Visual indicator showing expansion state (defaults to chevron) */
    Indicator: import("react").ForwardRefExoticComponent<AccordionIndicatorProps & import("react").RefAttributes<View>>;
    /** @required Container for expandable content with animations */
    Content: import("react").ForwardRefExoticComponent<AccordionContentProps & import("react").RefAttributes<View>>;
};
export default CompoundAccordion;
export { useAccordion, useAccordionItem };
//# sourceMappingURL=accordion.d.ts.map