"use strict";

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Chevron right icon component
 * Reusable SVG icon used in ListGroup and navigation components.
 * Path derived from chevron-down-icon rotated 90° clockwise.
 */
export const ChevronRightIcon = ({
  size = 16,
  color = 'currentColor'
}) => {
  return /*#__PURE__*/_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    children: /*#__PURE__*/_jsx(Path, {
      fillRule: "evenodd",
      d: "M8.205 19.545a1.125 1.125 0 0 1 0-1.59L14.16 12l-5.955-5.955a1.125 1.125 0 1 1 1.59-1.59l6.75 6.75a1.125 1.125 0 0 1 0 1.59l-6.75 6.75a1.125 1.125 0 0 1-1.59 0",
      clipRule: "evenodd"
    })
  });
};
ChevronRightIcon.displayName = 'HeroUINative.ChevronRightIcon';
//# sourceMappingURL=chevron-right-icon.js.map