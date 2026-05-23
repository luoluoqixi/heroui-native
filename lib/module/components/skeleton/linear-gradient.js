"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colorKit } from "../../helpers/external/utils/index.js";
import { DISPLAY_NAME } from "./skeleton.constants.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const LinearGradientComponent = ({
  colors = ['transparent', 'rgba(255, 255, 255, 0.5)', 'transparent']
}) => {
  const gradientId = colors.join('-');
  return /*#__PURE__*/_jsxs(Svg, {
    style: StyleSheet.absoluteFill,
    children: [/*#__PURE__*/_jsx(Defs, {
      children: /*#__PURE__*/_jsx(LinearGradient, {
        id: gradientId,
        x1: 0,
        y1: 0.5,
        x2: 1,
        y2: 0.5,
        children: colors.map((color, index) => {
          const isTransparent = color === 'transparent';
          const processedColor = isTransparent ? '#FFFFFF' : color;
          const opacity = isTransparent ? 0 : colorKit.getAlpha(color);
          return /*#__PURE__*/_jsx(Stop, {
            offset: `${index / (colors.length - 1) * 100}%`,
            stopColor: processedColor,
            stopOpacity: opacity
          }, index);
        })
      })
    }), /*#__PURE__*/_jsx(Rect, {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      fill: `url(#${gradientId})`
    })]
  });
};
LinearGradientComponent.displayName = DISPLAY_NAME.LINEAR_GRADIENT;
export default LinearGradientComponent;
//# sourceMappingURL=linear-gradient.js.map