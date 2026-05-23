"use strict";

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Default search magnifying glass SVG icon used by SearchField.SearchIcon.
 */
export const SearchIcon = ({
  size = 16,
  color
}) => {
  const themeColorMuted = useThemeColor('muted');
  return /*#__PURE__*/_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    accessibilityRole: "image",
    accessibilityLabel: "Search icon",
    children: /*#__PURE__*/_jsx(Path, {
      clipRule: "evenodd",
      d: "M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z",
      fill: color ?? themeColorMuted,
      fillRule: "evenodd"
    })
  });
};
SearchIcon.displayName = 'HeroUINative.SearchIcon';
//# sourceMappingURL=search-icon.js.map