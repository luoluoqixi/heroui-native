import { View } from 'react-native';
import type { CardBodyProps, CardDescriptionProps, CardFooterProps, CardHeaderProps, CardRootProps, CardTitleProps } from './card.types';
/**
 * Compound Card component with sub-components
 *
 * @component Card - Main container that extends Surface component. Provides base card structure
 * with configurable surface variants and handles overall layout.
 *
 * @component Card.Header - Header section for top-aligned content like icons or badges.
 *
 * @component Card.Body - Main content area with flex-1 that expands to fill all available space
 * between Card.Header and Card.Footer.
 *
 * @component Card.Title - Title text with foreground color and medium font weight.
 *
 * @component Card.Description - Description text with muted color and smaller font size.
 *
 * @component Card.Footer - Footer section for bottom-aligned actions like buttons.
 *
 * All sub-components support asChild pattern for custom element composition.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/card
 */
declare const CompoundCard: import("react").ForwardRefExoticComponent<CardRootProps & import("react").RefAttributes<View>> & {
    /** @optional Top-aligned header section */
    Header: import("react").ForwardRefExoticComponent<CardHeaderProps & import("react").RefAttributes<View>>;
    /** @optional Main content area that expands between header and footer */
    Body: import("react").ForwardRefExoticComponent<CardBodyProps & import("react").RefAttributes<View>>;
    /** @optional Bottom-aligned footer for actions */
    Footer: import("react").ForwardRefExoticComponent<CardFooterProps & import("react").RefAttributes<View>>;
    /** @optional Title text with styled typography */
    Title: import("react").ForwardRefExoticComponent<CardTitleProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Description text with muted styling */
    Description: import("react").ForwardRefExoticComponent<CardDescriptionProps & import("react").RefAttributes<import("react-native").Text>>;
};
export default CompoundCard;
//# sourceMappingURL=card.d.ts.map