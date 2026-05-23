import { View } from 'react-native';
import type { OutputProps, RootProps, SliderContextValue, ThumbProps, TrackProps } from './slider.types';
declare const useSlider: () => SliderContextValue;
declare const Root: import("react").ForwardRefExoticComponent<RootProps & import("react").RefAttributes<View>>;
declare const Track: import("react").ForwardRefExoticComponent<TrackProps & import("react").RefAttributes<View>>;
declare const Fill: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Thumb: import("react").ForwardRefExoticComponent<ThumbProps & import("react").RefAttributes<View>>;
declare const Output: import("react").ForwardRefExoticComponent<OutputProps & import("react").RefAttributes<View>>;
export { Fill, Output, Root, Thumb, Track, useSlider };
//# sourceMappingURL=slider.d.ts.map