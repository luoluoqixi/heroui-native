import * as AlertPrimitives from '../../primitives/alert';
import type { AlertContentProps, AlertDescriptionProps, AlertIndicatorProps, AlertRootProps, AlertTitleProps } from './alert.types';
declare const useAlert: typeof AlertPrimitives.useRootContext;
/**
 * Compound Alert component with sub-components
 *
 * @component Alert - Main container that renders a styled alert with role="alert"
 * and configurable status (default, accent, success, warning, danger).
 * Status flows to sub-components via primitive context.
 *
 * @component Alert.Indicator - Renders a status-appropriate icon by default.
 * Accepts custom children to override the default icon.
 * Supports iconProps (size, color) for customising the default icon.
 *
 * @component Alert.Content - Flex-1 wrapper for Alert.Title and Alert.Description.
 *
 * @component Alert.Title - Heading text with status-based color (success, warning,
 * danger apply their respective semantic color; default and accent use foreground).
 *
 * @component Alert.Description - Body text rendered with muted color.
 *
 * Props flow from Alert to sub-components via context (status, nativeID).
 * Title and Description are connected to root via aria-labelledby / aria-describedby.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/alert
 */
declare const CompoundAlert: import("react").ForwardRefExoticComponent<AlertRootProps & import("react").RefAttributes<import("react-native").View>> & {
    /** @optional Status icon rendered as the leading visual element */
    Indicator: import("react").ForwardRefExoticComponent<AlertIndicatorProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Wrapper for title and description content */
    Content: import("react").ForwardRefExoticComponent<AlertContentProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Primary heading with status-aware text color */
    Title: import("react").ForwardRefExoticComponent<AlertTitleProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Secondary description with muted text color */
    Description: import("react").ForwardRefExoticComponent<AlertDescriptionProps & import("react").RefAttributes<import("react-native").Text>>;
};
export { useAlert };
export default CompoundAlert;
//# sourceMappingURL=alert.d.ts.map