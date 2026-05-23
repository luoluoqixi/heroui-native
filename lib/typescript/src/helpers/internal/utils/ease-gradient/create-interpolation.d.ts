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
import { Animated } from 'react-native';
type ColorInterpolateFunction = (input: number) => string;
declare function createInterpolation(config: Animated.InterpolationConfigType): ColorInterpolateFunction;
export { createInterpolation };
//# sourceMappingURL=create-interpolation.d.ts.map