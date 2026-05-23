"use strict";

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from "../../external/hooks/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const CheckIcon = ({
  size = 16,
  color
}) => {
  const themeColorForeground = useThemeColor('foreground');
  return /*#__PURE__*/_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color ?? themeColorForeground,
    children: /*#__PURE__*/_jsx(Path, {
      fillRule: "evenodd",
      d: "M20.732 4.645a1.5 1.5 0 0 1 .163 2.116l-9 10.5a1.5 1.5 0 0 1-2.2.084l-5.25-5.25a1.5 1.5 0 0 1 2.121-2.121l3.892 3.891 7.96-9.287a1.5 1.5 0 0 1 2.114-.163",
      clipRule: "evenodd"
    })
  });
};
CheckIcon.displayName = 'HeroUINative.CheckIcon';
//# sourceMappingURL=check-icon.js.map