"use strict";

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Chevron down icon component
 * Reusable SVG icon used in Select and Accordion components
 */
export const ChevronDownIcon = ({
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
      d: "M4.455 8.205a1.125 1.125 0 0 1 1.59 0L12 14.16l5.955-5.955a1.125 1.125 0 1 1 1.59 1.59l-6.75 6.75a1.125 1.125 0 0 1-1.59 0l-6.75-6.75a1.125 1.125 0 0 1 0-1.59",
      clipRule: "evenodd"
    })
  });
};
ChevronDownIcon.displayName = 'HeroUINative.ChevronDownIcon';
//# sourceMappingURL=chevron-down-icon.js.map