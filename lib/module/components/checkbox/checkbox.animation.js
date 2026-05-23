"use strict";

import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAnimationSettings } from "../../helpers/internal/contexts/index.js";
import { useCombinedAnimationDisabledState } from "../../helpers/internal/hooks/index.js";
import { createContext, getAnimationState, getAnimationValueMergedConfig, getAnimationValueProperty, getIsAnimationDisabledValue, getRootAnimationState } from "../../helpers/internal/utils/index.js";
import { useControlField } from "../control-field/control-field.context.js";
const [CheckboxAnimationProvider, useCheckboxAnimation] = createContext({
  name: 'CheckboxAnimationContext'
});
export { CheckboxAnimationProvider, useCheckboxAnimation };

// --------------------------------------------------

export function useCheckboxRootAnimation(options) {
  const {
    animation
  } = options;
  const isCheckboxPressed = useSharedValue(false);
  const controlFieldContext = useControlField();
  const {
    animationConfig,
    isAnimationDisabled
  } = getRootAnimationState(animation);
  const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
  const isAnimationDisabledValue = getIsAnimationDisabledValue({
    isAnimationDisabled,
    isAllAnimationsDisabled
  });
  const scaleValue = getAnimationValueProperty({
    animationValue: animationConfig?.scale,
    property: 'value',
    defaultValue: [1, 0.96]
  });
  const scaleTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.scale,
    property: 'timingConfig',
    defaultValue: {
      duration: 150
    }
  });
  const rContainerStyle = useAnimatedStyle(() => {
    if (isAnimationDisabledValue) {
      return {};
    }
    const pressed = isCheckboxPressed.get() || (controlFieldContext?.isPressed.get() ?? false);
    return {
      transform: [{
        scale: withTiming(pressed ? scaleValue[1] : scaleValue[0], scaleTimingConfig)
      }]
    };
  });
  return {
    rContainerStyle,
    isCheckboxPressed,
    isAllAnimationsDisabled
  };
}

// --------------------------------------------------

export function useCheckboxIndicatorAnimation(options) {
  const {
    animation,
    isSelected
  } = options;

  // Read from global animation context (always available in compound parts)
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

  // Opacity animation
  const opacityValue = getAnimationValueProperty({
    animationValue: animationConfig?.opacity,
    property: 'value',
    defaultValue: [0, 1]
  });
  const opacityTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.opacity,
    property: 'timingConfig',
    defaultValue: {
      duration: 100
    }
  });

  // BorderRadius animation
  const borderRadiusValue = getAnimationValueProperty({
    animationValue: animationConfig?.borderRadius,
    property: 'value',
    defaultValue: [8, 0]
  });
  const borderRadiusTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.borderRadius,
    property: 'timingConfig',
    defaultValue: {
      duration: 50
    }
  });

  // TranslateX animation
  const translateXValue = getAnimationValueProperty({
    animationValue: animationConfig?.translateX,
    property: 'value',
    defaultValue: [-4, 0]
  });
  const translateXTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.translateX,
    property: 'timingConfig',
    defaultValue: {
      duration: 100
    }
  });

  // Scale animation
  const scaleValue = getAnimationValueProperty({
    animationValue: animationConfig?.scale,
    property: 'value',
    defaultValue: [0.8, 1]
  });
  const scaleTimingConfig = getAnimationValueMergedConfig({
    animationValue: animationConfig?.scale,
    property: 'timingConfig',
    defaultValue: {
      duration: 100
    }
  });
  const rContainerStyle = useAnimatedStyle(() => {
    if (isAnimationDisabledValue) {
      return {
        opacity: isSelected ? opacityValue[1] : opacityValue[0],
        borderRadius: isSelected ? borderRadiusValue[1] : borderRadiusValue[0],
        transform: [{
          translateX: isSelected ? translateXValue[1] : translateXValue[0]
        }, {
          scale: isSelected ? scaleValue[1] : scaleValue[0]
        }]
      };
    }
    return {
      opacity: withTiming(isSelected ? opacityValue[1] : opacityValue[0], opacityTimingConfig),
      borderRadius: withTiming(isSelected ? borderRadiusValue[1] : borderRadiusValue[0], borderRadiusTimingConfig),
      transform: [{
        translateX: withTiming(isSelected ? translateXValue[1] : translateXValue[0], translateXTimingConfig)
      }, {
        scale: withTiming(isSelected ? scaleValue[1] : scaleValue[0], scaleTimingConfig)
      }]
    };
  });
  return {
    rContainerStyle,
    isAnimationDisabled: isAnimationDisabled || isAllAnimationsDisabled
  };
}
//# sourceMappingURL=checkbox.animation.js.map