"use strict";

import React from 'react';
import { useReducedMotion } from 'react-native-reanimated';
import { createContext } from "../../helpers/internal/utils/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [GlobalAnimationSettingsProvider, useGlobalAnimationSettings] = createContext({
  name: 'GlobalAnimationSettingsContext',
  strict: false
});
export { useGlobalAnimationSettings };

/**
 * GlobalAnimationSettingsProvider Component
 *
 * @description
 * Provider component that controls global animation settings across the application.
 * When animation is set to 'disable-all', all animations will be disabled globally.
 * Additionally, if the user has enabled reduce motion in accessibility settings,
 * all animations will be disabled automatically.
 *
 * This provider wraps AnimationSettingsProvider to cascade the global setting
 * down through the component tree.
 *
 * @param {GlobalAnimationSettingsProviderProps} props - Provider props
 * @param {AnimationRootDisableAll} [props.animation] - Global animation setting
 * @param {ReactNode} props.children - Child components to wrap
 */
export const GlobalAnimationSettingsProviderComponent = ({
  animation,
  children
}) => {
  const reducedMotion = useReducedMotion();
  const globalIsAllAnimationsDisabled = animation === 'disable-all' || reducedMotion;
  return /*#__PURE__*/_jsx(GlobalAnimationSettingsProvider, {
    value: {
      globalIsAllAnimationsDisabled
    },
    children: children
  });
};
export default GlobalAnimationSettingsProviderComponent;
//# sourceMappingURL=provider.js.map