import type { TextCodeProps, TextHeadingProps, TextParagraphProps, TextRootProps } from './text.types';
/**
 * Compound Text component with semantic sub-components.
 *
 * @component Text - Root text element. Selects a typography preset via
 * `type` and exposes orthogonal `align`, `color`, `weight`, and `truncate`
 * props. `truncate` is implemented via React Native's `numberOfLines={1}`;
 * an explicit `numberOfLines` prop, if provided, takes precedence. When
 * `type="code"`, the platform-appropriate monospace `fontFamily` from
 * `styleSheet.code` is merged into `style` (since the project's NativeWind
 * theme has no `font-mono` token).
 *
 * @component Text.Heading - Convenience wrapper restricted to heading types
 * (`h1`–`h6`). Sets `accessibilityRole="header"` automatically.
 *
 * @component Text.Paragraph - Convenience wrapper restricted to body types
 * (`body`, `body-sm`, `body-xs`).
 *
 * @component Text.Code - Chip-styled inline monospaced text. Thin wrapper
 * that forces `type="code"`; the monospace `fontFamily` is applied at the
 * root.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/text
 */
declare const CompoundText: import("react").ForwardRefExoticComponent<TextRootProps & import("react").RefAttributes<import("react-native").Text>> & {
    /** Heading text – renders h1-h6 with header accessibility role */
    Heading: import("react").ForwardRefExoticComponent<TextHeadingProps & import("react").RefAttributes<import("react-native").Text>>;
    /** Paragraph text – renders body / body-sm / body-xs */
    Paragraph: import("react").ForwardRefExoticComponent<TextParagraphProps & import("react").RefAttributes<import("react-native").Text>>;
    /** Code text – chip-styled inline monospaced text */
    Code: import("react").ForwardRefExoticComponent<TextCodeProps & import("react").RefAttributes<import("react-native").Text>>;
};
export default CompoundText;
//# sourceMappingURL=text.d.ts.map