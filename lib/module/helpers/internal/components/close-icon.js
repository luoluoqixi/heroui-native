"use strict";

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from "../../external/hooks/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const CloseIcon = ({
  size = 16,
  color
}) => {
  const themeColorForeground = useThemeColor('foreground');
  return /*#__PURE__*/_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: color ?? themeColorForeground,
    children: /*#__PURE__*/_jsx(Path, {
      d: "M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8L3.47 4.53a.75.75 0 0 1 0-1.06",
      fillRule: "evenodd",
      clipRule: "evenodd"
    })
  });
};
CloseIcon.displayName = 'HeroUINative.CloseIcon';
//# sourceMappingURL=close-icon.js.map