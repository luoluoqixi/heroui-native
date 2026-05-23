import { View } from 'react-native';
import type { PressableFeedbackHighlightProps, PressableFeedbackProps, PressableFeedbackRippleProps, PressableFeedbackScaleProps } from './pressable-feedback.types';
/**
 * Pressable container with built-in scale animation and composable feedback compound parts.
 *
 * @component PressableFeedback
 * @description Wraps content to provide consistent press feedback across the app. Provides built-in
 * scale animation by default. Manages press state and container dimensions, providing them to child
 * compound parts via context. Supports `asChild` for rendering as a Slot (polymorphic).
 * Use `animation={{ scale: ... }}` to customize the built-in scale, `animation={false}` to disable
 * it (when using PressableFeedback.Scale on a specific child instead), or `animation="disable-all"`
 * to cascade-disable all animations.
 * @features
 * - Built-in scale animation enabled by default
 * - Composable compound parts: Scale, Highlight, Ripple
 * - Full gesture handling with press, long press, and disabled states
 * - Polymorphic via `asChild` prop (AnimatedSlotPressable = Animated + Slot.Pressable)
 * - Used as foundation for interactive components like Button, Card, and Accordion
 *
 * @component PressableFeedback.Scale
 * @description Scale animation wrapper for applying scale to a specific child element. Use this
 * instead of the root's built-in scale when you need control over which element scales or need
 * to apply className/style to the scale wrapper. Set `animation={false}` on the root to disable
 * its built-in scale when using this component.
 *
 * @component PressableFeedback.Highlight
 * @description Highlight overlay for iOS-style press feedback. Renders an absolute-positioned
 * layer that fades in on press. Must be used within PressableFeedback.
 *
 * @component PressableFeedback.Ripple
 * @description Ripple overlay for Android-style press feedback. Renders a radial gradient circle
 * that expands from the touch point. Must be used within PressableFeedback.
 */
declare const PressableFeedbackCompound: import("react").ForwardRefExoticComponent<PressableFeedbackProps & import("react").RefAttributes<View>> & {
    /** Scale animation wrapper for applying scale to a specific child element */
    Scale: import("react").ForwardRefExoticComponent<PressableFeedbackScaleProps & import("react").RefAttributes<View>>;
    /** Highlight overlay for iOS-style press feedback */
    Highlight: import("react").ForwardRefExoticComponent<PressableFeedbackHighlightProps & import("react").RefAttributes<View>>;
    /** Ripple overlay for Android-style press feedback */
    Ripple: import("react").ForwardRefExoticComponent<PressableFeedbackRippleProps & import("react").RefAttributes<View>>;
};
export default PressableFeedbackCompound;
//# sourceMappingURL=pressable-feedback.d.ts.map