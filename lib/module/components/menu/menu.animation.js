"use strict";

import { useCallback, useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { colorKit } from "../../helpers/external/utils/index.js";
import { useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { createContext, getAnimationState, getAnimationValueMergedConfig, getAnimationValueProperty, getIsAnimationDisabledValue } from "../../helpers/internal/utils/index.js";
const [MenuAnimationProvider, useMenuAnimation] = createContext({
  name: 'MenuAnimationContext'
});

// --------------------------------------------------

function useMenuItemAnimation(options) {
  const {
    animation,
    variant,
    isInsideSubMenu
  } = options;
  const themeColorDefault = useThemeColor('default');
  const themeColorDanger = useThemeColor('danger-soft');
  const {
    isAllAnimationsDisabled
  } = useAnimationSettings();
  const {
    animationConfig,
    isAnimationDisabled
  } = getAnimationState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });
  const isPressed = useSharedValue(false);
  const animationOnPressIn = useCallback(() => {
    isPressed.set(true);
  }, [isPressed]);
  const animationOnPressOut = useCallback(() => {
    isPressed.set(false);
  }, [isPressed]);

  // -- Scale --
  const scaleValue = getAnimationValueProperty({
    animationValue: animationConfig?.scale,
    property: 'value',
    defaultValue: 0.98
  });
  const scaleTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.scale,
    property: 'timingConfig',
    defaultValue: {
      duration: 150
    }
  });

  // -- Background color --
  const bgColorValue = getAnimationValueProperty({
    animationValue: animationConfig?.backgroundColor,
    property: 'value',
    defaultValue: variant === 'danger' ? colorKit.setAlpha(themeColorDanger, 0.1).hex() : themeColorDefault
  });
  const bgTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.backgroundColor,
    property: 'timingConfig',
    defaultValue: {
      duration: 150
    }
  });
  const bgColorTransparent = colorKit.setAlpha(themeColorDefault, 0).hex();
  const rItemStyle = useAnimatedStyle(() => {
    const pressed = isPressed.get();
    if (isAnimationDisabledValue) {
      return {
        backgroundColor: pressed ? bgColorValue : bgColorTransparent,
        transform: [{
          scale: 1
        }]
      };
    }
    if (isInsideSubMenu) {
      return {
        backgroundColor: withTiming(pressed ? bgColorValue : bgColorTransparent, bgTimingConfig)
      };
    }
    return {
      backgroundColor: withTiming(pressed ? bgColorValue : bgColorTransparent, bgTimingConfig),
      transform: [{
        scale: withTiming(pressed ? scaleValue : 1, scaleTimingConfig)
      }]
    };
  });
  return {
    rItemStyle,
    isPressed,
    animationOnPressIn,
    animationOnPressOut
  };
}

// --------------------------------------------------

/**
 * Hook providing animated styles for the menu content popover when a sub-menu opens.
 * Delays scale animation until after mount to avoid conflicting with enter animation.
 *
 * @param options.isSubMenuOpen - Whether a sub-menu is currently open
 * @param options.animation - Animation configuration for content popover
 * @returns Animated style object for the content container (scale: 0.98 when sub-menu open, 1 otherwise)
 */
function useMenuContentPopoverAnimation(options) {
  const {
    isSubMenuOpen,
    animation
  } = options;
  const {
    isAllAnimationsDisabled
  } = useAnimationSettings();
  const {
    isAnimationDisabled
  } = getAnimationState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });
  const hasMounted = useSharedValue(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      hasMounted.value = true;
    }, 500);
    return () => clearTimeout(timer);
  }, [hasMounted]);
  const rContainerStyle = useAnimatedStyle(() => {
    if (!hasMounted.value) {
      return {};
    }
    const scale = isSubMenuOpen ? 0.98 : 1;
    if (isAnimationDisabledValue) {
      return {
        transform: [{
          scale
        }]
      };
    }
    return {
      transform: [{
        scale: withSpring(scale)
      }]
    };
  });
  return rContainerStyle;
}

// --------------------------------------------------

export { MenuAnimationProvider, useMenuAnimation, useMenuContentPopoverAnimation, useMenuItemAnimation };
//# sourceMappingURL=menu.animation.js.map