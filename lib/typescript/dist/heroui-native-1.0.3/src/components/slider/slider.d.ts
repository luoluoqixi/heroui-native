import { View } from 'react-native';
import { useSlider } from '../../primitives/slider';
import type { SliderFillProps, SliderOutputProps, SliderProps, SliderThumbProps, SliderTrackProps } from './slider.types';
/**
 * Compound Slider component with sub-components
 *
 * @component Slider - Main container that manages slider value state, orientation,
 * and provides context to all sub-components. Supports single value and range modes.
 *
 * @component Slider.Output - Optional display of current value(s). Supports render
 * functions for custom formatting. Shows formatted value label by default.
 *
 * @component Slider.Track - Sizing container for Fill and Thumb elements. Sets the
 * cross-axis dimension (h-5 horizontal, w-5 vertical) and centers Thumb via Yoga
 * alignment. Reports its layout size for position calculations. Supports tap-to-position
 * and render functions for dynamic content (e.g. multiple thumbs for range sliders).
 *
 * @component Slider.Fill - Responsive fill bar that stretches full cross-axis of Track
 * (via inset-y-0 / inset-x-0). Only main-axis position (left + width) is computed.
 *
 * @component Slider.Thumb - Draggable thumb element using react-native-gesture-handler.
 * Centered on the cross-axis by Track's Yoga alignment (no manual offset needed).
 * Size is set via className and measured via onLayout into thumbSize context.
 * Animates scale on press via react-native-reanimated. Each thumb gets `role="slider"`
 * with full `accessibilityValue` from the primitive layer.
 *
 * Architecture:
 * All value logic, accessibility, state management, dragging state, track/thumb
 * measurement, and onChangeEnd lifecycle are managed by the primitive context
 * (`useSlider`). The component layer is purely for styling, animations,
 * and gesture handling.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/slider
 */
declare const CompoundSlider: import("react").ForwardRefExoticComponent<SliderProps & import("react").RefAttributes<View>> & {
    /** @optional Value display with optional render function */
    Output: import("react").ForwardRefExoticComponent<SliderOutputProps & import("react").RefAttributes<View>>;
    /** @optional Sizing container for fill and thumbs, supports tap-to-position */
    Track: import("react").ForwardRefExoticComponent<SliderTrackProps & import("react").RefAttributes<View>>;
    /** @optional Responsive fill bar stretching full cross-axis */
    Fill: import("react").ForwardRefExoticComponent<SliderFillProps & import("react").RefAttributes<View>>;
    /** @optional Draggable thumb with gesture support, centered by Track alignment */
    Thumb: import("react").ForwardRefExoticComponent<SliderThumbProps & import("react").RefAttributes<View>>;
};
export { useSlider };
export default CompoundSlider;
//# sourceMappingURL=slider.d.ts.map