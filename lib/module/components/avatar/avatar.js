"use strict";

import { forwardRef, useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { childrenToString } from "../../helpers/internal/utils/index.js";
import * as AvatarPrimitives from "../../primitives/avatar/index.js";
import { useAvatarFallbackAnimation, useAvatarImageAnimation, useAvatarRootAnimation } from "./avatar.animation.js";
import { AVATAR_DEFAULT_ICON_SIZE, AVATAR_DISPLAY_NAME } from "./avatar.constants.js";
import { AvatarProvider, useInnerAvatarContext } from "./avatar.context.js";
import { avatarClassNames, avatarStyleSheet } from "./avatar.styles.js";
import { PersonIcon } from "./person-icon.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedFallback = Animated.createAnimatedComponent(AvatarPrimitives.Fallback);

/**
 * Hook to access Avatar primitive root context
 * Provides access to avatar status and other root-level state
 */
const useAvatar = AvatarPrimitives.useRootContext;

// --------------------------------------------------

const AvatarRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    size = 'md',
    variant = 'default',
    color = 'accent',
    className,
    style,
    animation,
    ...restProps
  } = props;
  const rootClassName = avatarClassNames.root({
    variant,
    size,
    color,
    className
  });
  const {
    isAllAnimationsDisabled
  } = useAvatarRootAnimation({
    animation
  });
  const contextValue = useMemo(() => ({
    size,
    color
  }), [size, color]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(AvatarProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(AvatarPrimitives.Root, {
        ref: ref,
        className: rootClassName,
        style: [avatarStyleSheet.borderCurve, style],
        ...restProps,
        children: children
      })
    })
  });
});

// --------------------------------------------------

const AvatarImage = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    style: styleProp,
    source,
    asChild,
    ...restProps
  } = props;
  const animation = asChild ? undefined : 'animation' in props ? props.animation : undefined;
  const isAnimatedStyleActive = asChild ? true : 'isAnimatedStyleActive' in props ? props.isAnimatedStyleActive ?? true : true;
  const {
    rImageStyle
  } = useAvatarImageAnimation({
    animation
  });
  const imageClassName = avatarClassNames.image({
    className
  });
  const imageStyle = isAnimatedStyleActive ? [rImageStyle, styleProp] : styleProp;
  if (asChild) {
    return /*#__PURE__*/_jsx(AvatarPrimitives.Image, {
      ref: ref,
      source: source,
      className: imageClassName,
      style: styleProp,
      asChild: true,
      ...restProps
    });
  }
  return /*#__PURE__*/_jsx(AvatarPrimitives.Image, {
    ref: ref,
    source: source,
    asChild: true,
    children: /*#__PURE__*/_jsx(Animated.Image, {
      style: imageStyle,
      className: imageClassName,
      ...restProps
    })
  });
});

// --------------------------------------------------

const DefaultFallbackIcon = ({
  sizeVariant,
  colorVariant,
  iconProps
}) => {
  const [themeColorDefaultForeground, themeColorAccent, themeColorSuccess, themeColorWarning, themeColorDanger] = useThemeColor(['default-foreground', 'accent', 'success', 'warning', 'danger']);
  const iconSize = iconProps?.size ?? AVATAR_DEFAULT_ICON_SIZE[sizeVariant];
  const defaultIconColorMap = {
    default: themeColorDefaultForeground,
    accent: themeColorAccent,
    success: themeColorSuccess,
    warning: themeColorWarning,
    danger: themeColorDanger
  };
  const iconColor = iconProps?.color ?? defaultIconColorMap[colorVariant];
  return /*#__PURE__*/_jsx(PersonIcon, {
    size: iconSize,
    color: iconColor
  });
};

// --------------------------------------------------

const AvatarFallback = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    size,
    color: contextColor
  } = useInnerAvatarContext();
  const {
    children,
    color: colorProp,
    className,
    classNames,
    style,
    styles,
    textProps,
    iconProps,
    delayMs,
    animation,
    ...restProps
  } = props;
  const stringifiedChildren = childrenToString(children);
  const color = colorProp ?? contextColor;
  const {
    container,
    text
  } = avatarClassNames.fallback({
    size,
    color
  });
  const fallbackContainerClassName = container({
    className: [className, classNames?.container]
  });
  const fallbackTextClassName = text({
    className: [classNames?.text, textProps?.className]
  });
  const {
    entering
  } = useAvatarFallbackAnimation({
    animation,
    delayMs
  });
  return /*#__PURE__*/_jsx(AnimatedFallback, {
    ref: ref,
    entering: entering,
    className: fallbackContainerClassName,
    style: [avatarStyleSheet.borderCurve, style, styles?.container],
    ...restProps,
    children: children ? stringifiedChildren ? /*#__PURE__*/_jsx(HeroText, {
      className: fallbackTextClassName,
      style: styles?.text,
      maxFontSizeMultiplier: 1.4,
      ...textProps,
      children: stringifiedChildren
    }) : children : /*#__PURE__*/_jsx(DefaultFallbackIcon, {
      sizeVariant: size,
      colorVariant: color,
      iconProps: iconProps
    })
  }, AVATAR_DISPLAY_NAME.FALLBACK);
});

// --------------------------------------------------

AvatarRoot.displayName = AVATAR_DISPLAY_NAME.ROOT;
AvatarImage.displayName = AVATAR_DISPLAY_NAME.IMAGE;
AvatarFallback.displayName = AVATAR_DISPLAY_NAME.FALLBACK;

/**
 * Compound Avatar component with sub-components
 *
 * @component Avatar - Main container that manages avatar display state.
 * Provides color and size context to child components.
 *
 * @component Avatar.Image - Optional image component that displays the avatar image.
 * Handles loading states and errors automatically.
 *
 * @component Avatar.Fallback - Optional fallback component shown when image fails to load.
 * Supports text initials or custom content with optional delay.
 *
 * Props flow from Avatar to sub-components via context (size, color).
 * Fallback can override color with its own prop.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/avatar
 */
const Avatar = Object.assign(AvatarRoot, {
  /** @optional Displays the avatar image with loading state management */
  Image: AvatarImage,
  /** @optional Shows fallback content when image is unavailable */
  Fallback: AvatarFallback
});
export default Avatar;
export { Avatar, useAvatar };
//# sourceMappingURL=avatar.js.map