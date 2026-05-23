import type { ReactNode } from 'react';
import type { ToastInsets } from './types';
interface InsetsContainerProps {
    /**
     * When true, uses a regular View instead of FullWindowOverlay on iOS.
     * Enables element inspector but toasts won't appear above native modals.
     * @default false
     */
    disableFullWindowOverlay: boolean;
    /**
     * Controls whether VoiceOver treats the overlay window as a modal container.
     * When `false`, VoiceOver can still access elements behind the overlay.
     * When `true`, VoiceOver is restricted to elements inside the overlay.
     * @default false
     * @platform ios
     * @unstable This prop maps directly to the native `accessibilityViewIsModal`
     * on the container view and may change in a future react-native-screens release.
     */
    unstable_accessibilityContainerViewIsModal?: boolean;
    /**
     * Optional inset values for all edges
     * If not provided, defaults to platform-specific values:
     * - iOS: safe area insets + 0px (top), + 6px (bottom), + 12px (left/right)
     * - Android: safe area insets + 12px (all edges)
     */
    insets?: ToastInsets;
    /**
     * Custom wrapper function to wrap the toast content
     * Receives children and should return a component that wraps them
     * The wrapper should apply flex: 1 (via className or style) to ensure proper layout
     * Can be any component wrapper - KeyboardAvoidingView, View, or any custom component
     */
    contentWrapper?: (children: ReactNode) => React.ReactElement;
    /**
     * Children to render inside the container
     */
    children: ReactNode;
}
/**
 * Container component that applies inset padding to position toasts
 * away from screen edges and safe areas
 *
 * Combines custom insets with safe area insets:
 * - If custom inset is provided, it overrides safe area + default padding
 * - If not provided, uses platform-specific defaults:
 *   - iOS: safe area inset + 0px for top, + 6px for bottom, + 12px for left/right
 *   - Android: safe area inset + 12px for all edges
 */
export declare function InsetsContainer({ insets, contentWrapper, children, disableFullWindowOverlay, unstable_accessibilityContainerViewIsModal, }: InsetsContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=insets-container.d.ts.map