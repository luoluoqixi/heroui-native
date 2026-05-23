import * as AvatarPrimitives from '../../primitives/avatar';
import type { AvatarFallbackProps, AvatarImageProps, AvatarRootProps } from './avatar.types';
/**
 * Hook to access Avatar primitive root context
 * Provides access to avatar status and other root-level state
 */
declare const useAvatar: typeof AvatarPrimitives.useRootContext;
/**
 * Compound Avatar component with sub-components
 *
 * @component Avatar - Main container that manages avatar display state.
 * Provides color and size context to child components.
 *
 * @component Avatar.Image - Optional image component that displays the avatar image.
 * Handles loading states and errors automatically.
 *
 * @component Avatar.Fallback - Optional fallback component shown when image fails to load.
 * Supports text initials or custom content with optional delay.
 *
 * Props flow from Avatar to sub-components via context (size, color).
 * Fallback can override color with its own prop.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/avatar
 */
declare const Avatar: import("react").ForwardRefExoticComponent<AvatarRootProps & import("react").RefAttributes<import("react-native").View>> & {
    /** @optional Displays the avatar image with loading state management */
    Image: import("react").ForwardRefExoticComponent<AvatarImageProps & import("react").RefAttributes<import("react-native").Image>>;
    /** @optional Shows fallback content when image is unavailable */
    Fallback: import("react").ForwardRefExoticComponent<AvatarFallbackProps & import("react").RefAttributes<import("react-native").View>>;
};
export default Avatar;
export { Avatar, useAvatar };
//# sourceMappingURL=avatar.d.ts.map