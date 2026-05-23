import type { ToastProviderProps } from './types';
/**
 * Toast provider component
 * Wraps your app to enable toast functionality
 */
export declare function ToastProvider({ defaultProps, insets, maxVisibleToasts, contentWrapper, children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook to access toast functionality
 *
 * @returns Object containing toast manager and visibility state
 *
 * @example
 * ```tsx
 * const { toast, isToastVisible } = useToast();
 *
 * // Show a toast
 * toast.show({ component: <Toast>Hello</Toast> });
 *
 * // Hide a toast
 * toast.hide('my-toast');
 *
 * // Check if any toast is visible
 * if (isToastVisible) {
 *   console.log('A toast is currently displayed');
 * }
 * ```
 */
export declare function useToast(): {
    toast: import("./types").ToastManager;
    isToastVisible: boolean;
};
//# sourceMappingURL=provider.d.ts.map