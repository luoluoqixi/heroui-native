import { View } from 'react-native';
import type { DefaultToastProps, ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastRootProps, ToastTitleProps } from './toast.types';
/**
 * Default styled toast component for simplified toast.show() API
 * Used internally when showing toasts with string or config object (without component)
 */
export declare function DefaultToast(props: DefaultToastProps): import("react/jsx-runtime").JSX.Element;
/**
 * Compound Toast component with sub-components
 *
 * @component Toast - Main toast container that displays notification messages with various variants.
 *
 * @component Toast.Title - Title/heading text of the toast notification.
 *
 * @component Toast.Description - Descriptive text content of the toast.
 *
 * @component Toast.Action - Action button within the toast. Variant is automatically determined
 * based on toast variant but can be overridden.
 *
 * @component Toast.Close - Close button for dismissing the toast. Renders as an icon-only button.
 *
 * Props flow from Toast to sub-components via context (variant).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/toast
 */
declare const CompoundToast: import("react").ForwardRefExoticComponent<ToastRootProps & import("react").RefAttributes<View>> & {
    /** Toast title - renders text content */
    Title: import("react").ForwardRefExoticComponent<ToastTitleProps & import("react").RefAttributes<View>>;
    /** Toast description - renders descriptive text */
    Description: import("react").ForwardRefExoticComponent<ToastDescriptionProps & import("react").RefAttributes<View>>;
    /** Toast action button - renders action with appropriate variant */
    Action: import("react").ForwardRefExoticComponent<ToastActionProps & import("react").RefAttributes<View>>;
    /** Toast close button - renders icon-only close button */
    Close: import("react").ForwardRefExoticComponent<ToastCloseProps & import("react").RefAttributes<View>>;
};
export default CompoundToast;
//# sourceMappingURL=toast.d.ts.map