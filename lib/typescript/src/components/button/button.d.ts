import type { ButtonContextValue, ButtonLabelProps, ButtonRootProps } from './button.types';
declare const useButton: () => ButtonContextValue;
/**
 * Compound Button component with sub-components.
 *
 * @component Button - Main button container wrapping `PressableFeedback`. Handles press
 * interactions, visual variants, and feedback animations. The `feedbackVariant` prop controls
 * which effects are rendered (`scale-highlight`, `scale-ripple`, `scale`, or `none`), while the
 * `animation` prop provides granular control over each sub-animation (scale, highlight, ripple).
 * String children are automatically rendered as a label.
 *
 * @component Button.Label - Text content of the button. Inherits size and variant styling
 * from the parent Button context.
 *
 * Props flow from Button to sub-components via context (size, variant, isDisabled).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/button
 */
declare const CompoundButton: import("react").ForwardRefExoticComponent<ButtonRootProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Button label - renders text or custom content */
    Label: import("react").ForwardRefExoticComponent<ButtonLabelProps & import("react").RefAttributes<import("react-native").Text>>;
};
export { useButton };
export default CompoundButton;
//# sourceMappingURL=button.d.ts.map