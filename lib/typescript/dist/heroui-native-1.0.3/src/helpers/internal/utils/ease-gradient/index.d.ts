/**
 * Easing gradient utilities for React Native
 *
 * Original source: https://github.com/phamfoo/react-native-easing-gradient
 * Author: @phamfoo
 * License: MIT
 *
 * This code has been adapted for use in HeroUI Native with modifications
 * for TypeScript compatibility and integration with the animation system.
 */
import { type EasingFunction } from 'react-native';
interface ColorStops {
    [location: number]: {
        color: string;
        easing?: EasingFunction;
    };
}
interface GradientParams {
    colorStops: ColorStops;
    extraColorStopsPerTransition?: number;
    easing?: EasingFunction;
}
declare function easeGradient({ colorStops, easing, extraColorStopsPerTransition, }: GradientParams): {
    colors: [string, string, ...string[]];
    locations: [number, number, ...number[]];
};
export { easeGradient };
//# sourceMappingURL=index.d.ts.map