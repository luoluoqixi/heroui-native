import type { ButtonLabelProps } from '../button/button.types';
import type { LinkButtonProps } from './link-button.types';
/**
 * Compound LinkButton component
 *
 * @component LinkButton - A ghost-variant button with no highlight feedback,
 * designed for inline link-style interactions (e.g. "Terms" / "Privacy Policy" links).
 * The ghost variant and disabled highlight are enforced internally and cannot be overridden.
 *
 * @component LinkButton.Label - Text content of the link button. Inherits size and variant
 * styling from the parent LinkButton context (delegates to Button.Label).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/link-button
 */
declare const LinkButton: import("react").ForwardRefExoticComponent<LinkButtonProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Link button label - renders text or custom content */
    Label: import("react").ForwardRefExoticComponent<ButtonLabelProps & import("react").RefAttributes<import("react-native").Text>>;
};
export default LinkButton;
//# sourceMappingURL=link-button.d.ts.map