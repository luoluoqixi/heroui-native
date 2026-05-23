"use strict";

import React from 'react';
import { Text as RNText } from 'react-native';
import { useTextComponent } from "../../external/hooks/index.js";
import { cn } from "../../external/utils/index.js";

/**
 * Props for HeroText component
 */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * HeroText component that automatically applies global text configuration
 * from HeroUINativeProvider.
 *
 * This component is distinct from React Native's Text component and includes
 * a default 'font-normal' className that can be extended via the className prop.
 *
 * Global text props that can be configured:
 * - adjustsFontSizeToFit: Auto-scale text to fit constraints
 * - allowFontScaling: Respect Text Size accessibility settings
 * - maxFontSizeMultiplier: Maximum font scale when allowFontScaling is enabled
 * - minimumFontScale: Minimum scale when adjustsFontSizeToFit is enabled (iOS only)
 *
 * @example
 * ```tsx
 * <HeroText>Hello World</HeroText>
 * ```
 *
 * @example
 * With custom className:
 * ```tsx
 * <HeroText className="text-lg font-bold">Hello World</HeroText>
 * ```
 *
 * @example
 * Global configuration in HeroUINativeProvider:
 * ```tsx
 * <HeroUINativeProvider config={{
 *   textProps: {
 *     allowFontScaling: false,
 *     adjustsFontSizeToFit: false,
 *     maxFontSizeMultiplier: 1.5
 *   }
 * }}>
 *   <App />
 * </HeroUINativeProvider>
 * ```
 */
export const HeroText = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    className,
    ...restProps
  } = props;
  const {
    textProps
  } = useTextComponent();
  const mergedProps = Object.assign({}, textProps, restProps);
  return /*#__PURE__*/_jsx(RNText, {
    ref: ref,
    className: cn('font-normal', className),
    ...mergedProps
  });
});
HeroText.displayName = 'HeroText';
//# sourceMappingURL=hero-text.js.map