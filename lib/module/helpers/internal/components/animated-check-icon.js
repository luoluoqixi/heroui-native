"use strict";

import React from 'react';
import Animated, { Easing, useAnimatedProps, useDerivedValue, withDelay, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from "../../external/hooks/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedPath = Animated.createAnimatedComponent(Path);
const DEFAULT_SIZE = 18;
const ENTER_DURATION = 150;
const EXIT_DURATION = 150;
export const AnimatedCheckIcon = ({
  isSelected = false,
  size = DEFAULT_SIZE,
  strokeWidth = 2.5,
  color,
  enterDuration = ENTER_DURATION,
  exitDuration = EXIT_DURATION
}) => {
  const themeColorForeground = useThemeColor('foreground');
  const checkProgress = useDerivedValue(() => {
    if (isSelected) {
      return withDelay(100, withTiming(1, {
        duration: enterDuration,
        easing: Easing.out(Easing.ease)
      }));
    } else {
      return withTiming(0, {
        duration: exitDuration
      });
    }
  });
  const animatedCheckProps = useAnimatedProps(() => ({
    strokeDasharray: size,
    strokeDashoffset: size * (1 - checkProgress.value)
  }), [checkProgress]);
  return /*#__PURE__*/_jsx(Svg, {
    width: size,
    height: size,
    viewBox: `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`,
    fill: "none",
    children: /*#__PURE__*/_jsx(AnimatedPath, {
      d: "M4 9.5L8 13L14 6",
      stroke: color ?? themeColorForeground,
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      animatedProps: animatedCheckProps
    })
  });
};
AnimatedCheckIcon.displayName = 'HeroUINative.AnimatedCheckIcon';
//# sourceMappingURL=animated-check-icon.js.map