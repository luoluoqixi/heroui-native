"use strict";

import React from 'react';
import { SafeAreaListener } from 'react-native-safe-area-context';
import { Uniwind } from 'uniwind';
import { useDevInfo } from "../../helpers/internal/hooks/index.js";
import { GlobalAnimationSettingsProvider } from "../animation-settings/index.js";
import { TextComponentProvider } from "../text-component/provider.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * HeroUINativeProviderRaw Component
 *
 * @description
 * Raw provider component for HeroUI Native that configures the application
 * with global settings but without ToastProvider and PortalHost.
 * Use this when you need to manage toast and portal functionality separately
 * (e.g. nested providers or custom setups).
 *
 * Currently provides:
 * - Global animation settings
 * - Global text component configuration
 *
 * @param {HeroUINativeProviderRawProps} props - Provider configuration props
 * @param {ReactNode} props.children - Child components to wrap
 * @param {HeroUINativeConfigRaw} [props.config] - Configuration object
 *
 */
const HeroUINativeProviderRaw = ({
  children,
  config = {}
}) => {
  const {
    textProps,
    animation,
    devInfo
  } = config;
  useDevInfo(devInfo);
  return /*#__PURE__*/_jsx(SafeAreaListener, {
    onChange: ({
      insets
    }) => {
      Uniwind.updateInsets(insets);
    },
    children: /*#__PURE__*/_jsx(GlobalAnimationSettingsProvider, {
      animation: animation,
      children: /*#__PURE__*/_jsx(TextComponentProvider, {
        value: {
          textProps
        },
        children: children
      })
    })
  });
};
export default HeroUINativeProviderRaw;
//# sourceMappingURL=provider.js.map