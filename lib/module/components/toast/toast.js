"use strict";

import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { cn } from "../../helpers/external/utils/index.js";
import { CloseIcon, HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import * as ToastPrimitive from "../../primitives/toast/index.js";
import { useToastConfig } from "../../providers/toast/toast-config.context.js";
import { Button } from "../button/index.js";
import { useToastRootAnimation } from "./toast.animation.js";
import { DISPLAY_NAME } from "./toast.constants.js";
import { useVerticalPlaceholderStyles } from "./toast.hooks.js";
import { toastClassNames, toastStyleSheet } from "./toast.styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AnimatedToastRoot = Animated.createAnimatedComponent(ToastPrimitive.Root);
const [ToastProvider, useToast] = createContext({
  name: 'ToastContext'
});

// --------------------------------------------------

const ToastRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const globalConfig = useToastConfig();
  const {
    children,
    variant: localVariant,
    placement: localPlacement,
    index,
    total,
    heights,
    maxVisibleToasts,
    className,
    style,
    animation: localAnimation,
    isSwipeable: localIsSwipeable,
    isAnimatedStyleActive = true,
    hide,
    ...restProps
  } = props;

  /**
   * Merge global config with local props, ensuring local props take precedence
   */
  const variant = localVariant ?? globalConfig?.variant ?? 'default';
  const placement = localPlacement ?? globalConfig?.placement ?? 'top';
  const animation = localAnimation ?? globalConfig?.animation;
  const isSwipeable = localIsSwipeable ?? globalConfig?.isSwipeable;

  // Access id from props (id is omitted from ToastRootProps type but available at runtime)
  const toastProps = props;
  const {
    id
  } = toastProps;
  const rootClassName = toastClassNames.root({
    className
  });

  // Extract padding and backgroundColor for placeholder Views
  const {
    topStyle,
    bottomStyle
  } = useVerticalPlaceholderStyles({
    rootClassName,
    style
  });
  const {
    rContainerStyle,
    entering,
    exiting,
    panGesture,
    isAllAnimationsDisabled
  } = useToastRootAnimation({
    animation,
    index,
    total,
    heights,
    placement,
    hide,
    id,
    isSwipeable,
    maxVisibleToasts
  });
  const rootStyle = isAnimatedStyleActive ? [toastStyleSheet.root, rContainerStyle, style] : [toastStyleSheet.root, style];
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const contextValue = useMemo(() => ({
    variant,
    hide,
    id
  }), [variant, hide, id]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(ToastProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(GestureDetector, {
        gesture: panGesture,
        children: /*#__PURE__*/_jsxs(Animated.View, {
          className: cn('absolute left-0 right-0', placement === 'top' ? 'top-0' : 'bottom-0'),
          entering: entering,
          exiting: exiting,
          children: [/*#__PURE__*/_jsxs(AnimatedToastRoot, {
            ref: ref,
            className: rootClassName,
            style: rootStyle,
            ...restProps,
            children: [children, /*#__PURE__*/_jsx(View, {
              className: "absolute left-0 right-0 top-0",
              style: topStyle
            }), /*#__PURE__*/_jsx(View, {
              className: "absolute left-0 right-0 bottom-0",
              style: bottomStyle
            })]
          }), /*#__PURE__*/_jsx(AnimatedToastRoot, {
            pointerEvents: "none",
            className: cn(rootClassName, 'absolute opacity-0'),
            style: [toastStyleSheet.root, style],
            onLayout: event => {
              const measuredHeight = event.nativeEvent.layout.height;
              heights.modify(value => {
                'worklet';

                return {
                  ...value,
                  [id]: measuredHeight
                };
              });
            },
            ...restProps,
            children: children
          })]
        })
      })
    })
  });
});

// --------------------------------------------------

const ToastTitle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const {
    variant
  } = useToast();
  const labelClassName = toastClassNames.label({
    variant,
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: labelClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ToastDescription = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const descriptionClassName = toastClassNames.description({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: descriptionClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ToastAction = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    variant,
    size = 'sm',
    animation,
    className,
    ...restProps
  } = props;
  const {
    variant: toastVariant
  } = useToast();
  const actionClassName = toastClassNames.action({
    variant: toastVariant,
    className
  });
  const [themeColorDefaultHover, themeColorAccentHover, themeColorSuccessHover, themeColorWarningHover, themeColorDangerHover] = useThemeColor(['default-hover', 'accent-hover', 'success-hover', 'warning-hover', 'danger-hover']);
  const highlightColorMap = useMemo(() => {
    switch (toastVariant) {
      case 'default':
        return themeColorDefaultHover;
      case 'accent':
        return themeColorAccentHover;
      case 'success':
        return themeColorSuccessHover;
      case 'warning':
        return themeColorWarningHover;
      case 'danger':
        return themeColorDangerHover;
    }
  }, [toastVariant, themeColorDefaultHover, themeColorAccentHover, themeColorSuccessHover, themeColorWarningHover, themeColorDangerHover]);
  const buttonVariant = useMemo(() => {
    if (variant) return variant;
    switch (toastVariant) {
      case 'accent':
        return 'primary';
      case 'danger':
        return 'danger';
      default:
        return 'tertiary';
    }
  }, [toastVariant, variant]);
  const defaultHighlightConfig = useMemo(() => ({
    backgroundColor: {
      value: highlightColorMap
    },
    opacity: {
      value: [0, 1]
    }
  }), [highlightColorMap]);
  const resolvedAnimation = typeof animation === 'object' && animation !== null ? animation : undefined;
  const mergedAnimation = useMemo(() => {
    if (animation === false || animation === 'disabled' || animation === 'disable-all') {
      return animation;
    }
    return {
      scale: false,
      ...resolvedAnimation,
      highlight: resolvedAnimation?.highlight ?? defaultHighlightConfig
    };
  }, [animation, resolvedAnimation, defaultHighlightConfig]);
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: buttonVariant,
    size: size,
    className: actionClassName,
    feedbackVariant: "scale-highlight",
    animation: mergedAnimation,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ToastClose = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    iconProps,
    size = 'sm',
    className,
    onPress,
    ...restProps
  } = props;
  const {
    hide,
    id
  } = useToast();
  const themeColorMuted = useThemeColor('muted');

  /**
   * Handle close button press
   * If hide and id are available from context, use them to hide the toast
   * Otherwise, use the provided onPress handler
   */
  const handlePress = event => {
    if (hide && id) {
      hide(id);
    }
    if (onPress && typeof onPress === 'function') {
      onPress(event);
    }
  };
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: "ghost",
    size: size,
    isIconOnly: true,
    "aria-label": "Close",
    className: className,
    onPress: handlePress,
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(CloseIcon, {
      size: iconProps?.size ?? 16,
      color: iconProps?.color ?? themeColorMuted
    })
  });
});

// --------------------------------------------------

/**
 * Default styled toast component for simplified toast.show() API
 * Used internally when showing toasts with string or config object (without component)
 */
export function DefaultToast(props) {
  const globalConfig = useToastConfig();
  const {
    id,
    variant: localVariant,
    placement: localPlacement,
    isSwipeable: localIsSwipeable,
    animation: localAnimation,
    label,
    description,
    actionLabel,
    onActionPress,
    icon,
    hide,
    show,
    ...toastComponentProps
  } = props;

  /**
   * Merge global config with local props, ensuring local props take precedence
   */
  const variant = localVariant ?? globalConfig?.variant ?? 'default';
  const placement = localPlacement ?? globalConfig?.placement ?? 'top';
  const isSwipeable = localIsSwipeable ?? globalConfig?.isSwipeable;
  const animation = localAnimation ?? globalConfig?.animation;
  const handleActionPress = () => {
    if (onActionPress) {
      onActionPress({
        show,
        hide
      });
    }
  };
  return /*#__PURE__*/_jsxs(ToastRoot, {
    id: id,
    variant: variant,
    placement: placement,
    isSwipeable: isSwipeable,
    animation: animation,
    className: "flex-row gap-3",
    hide: hide,
    show: show,
    ...toastComponentProps,
    children: [icon && /*#__PURE__*/_jsx(View, {
      children: icon
    }), /*#__PURE__*/_jsxs(View, {
      className: "flex-1",
      children: [label && /*#__PURE__*/_jsx(ToastTitle, {
        children: label
      }), description && /*#__PURE__*/_jsx(ToastDescription, {
        children: description
      })]
    }), actionLabel && /*#__PURE__*/_jsx(ToastAction, {
      onPress: handleActionPress,
      children: actionLabel
    })]
  });
}

// --------------------------------------------------

ToastRoot.displayName = DISPLAY_NAME.TOAST_ROOT;
ToastTitle.displayName = DISPLAY_NAME.TOAST_TITLE;
ToastDescription.displayName = DISPLAY_NAME.TOAST_DESCRIPTION;
ToastAction.displayName = DISPLAY_NAME.TOAST_ACTION;
ToastClose.displayName = DISPLAY_NAME.TOAST_CLOSE;

/**
 * Compound Toast component with sub-components
 *
 * @component Toast - Main toast container that displays notification messages with various variants.
 *
 * @component Toast.Title - Title/heading text of the toast notification.
 *
 * @component Toast.Description - Descriptive text content of the toast.
 *
 * @component Toast.Action - Action button within the toast. Variant is automatically determined
 * based on toast variant but can be overridden.
 *
 * @component Toast.Close - Close button for dismissing the toast. Renders as an icon-only button.
 *
 * Props flow from Toast to sub-components via context (variant).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/toast
 */
const CompoundToast = Object.assign(ToastRoot, {
  /** Toast title - renders text content */
  Title: ToastTitle,
  /** Toast description - renders descriptive text */
  Description: ToastDescription,
  /** Toast action button - renders action with appropriate variant */
  Action: ToastAction,
  /** Toast close button - renders icon-only close button */
  Close: ToastClose
});
export default CompoundToast;
//# sourceMappingURL=toast.js.map