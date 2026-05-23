"use strict";

import { Children, forwardRef, useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { ChevronDownIcon } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import * as AccordionPrimitive from "../../primitives/accordion/index.js";
import { AccordionAnimationProvider, useAccordionAnimation, useAccordionContentAnimation, useAccordionIndicatorAnimation, useAccordionRootAnimation } from "./accordion.animation.js";
import { DEFAULT_ICON_SIZE, DISPLAY_NAME } from "./accordion.constants.js";
import { accordionClassNames, accordionStyleSheet } from "./accordion.styles.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const AnimatedRootView = Animated.createAnimatedComponent(AccordionPrimitive.Root);
const AnimatedItemView = Animated.createAnimatedComponent(AccordionPrimitive.Item);
const AnimatedIndicator = Animated.createAnimatedComponent(AccordionPrimitive.Indicator);

// ------------------------------------------------------------------------------

const [AccordionInnerProvider, useAccordionInnerContext] = createContext({
  name: 'AccordionInnerContext'
});
const useAccordion = AccordionPrimitive.useRootContext;
const useAccordionItem = AccordionPrimitive.useItemContext;

// ------------------------------------------------------------------------------

const Root = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    variant = 'default',
    hideSeparator = false,
    className,
    classNames,
    styles,
    style,
    animation,
    ...restProps
  } = props;
  const {
    container,
    separator
  } = accordionClassNames.root({
    variant
  });
  const containerClassName = container({
    className: [className, classNames?.container]
  });
  const separatorClassName = separator({
    className: classNames?.separator
  });
  const {
    layoutTransition,
    isAllAnimationsDisabled
  } = useAccordionRootAnimation({
    animation
  });
  const contextValue = useMemo(() => ({
    variant
  }), [variant]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const animationContextValue = useMemo(() => ({
    layoutTransition
  }), [layoutTransition]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(AccordionAnimationProvider, {
      value: animationContextValue,
      children: /*#__PURE__*/_jsx(AccordionInnerProvider, {
        value: contextValue,
        children: /*#__PURE__*/_jsx(AnimatedRootView, {
          ref: ref,
          className: containerClassName,
          style: [accordionStyleSheet.root, style, styles?.container],
          layout: layoutTransition,
          ...restProps,
          children: Children.map(children, (child, index) => /*#__PURE__*/_jsxs(_Fragment, {
            children: [child, !hideSeparator && index < Children.count(children) - 1 && /*#__PURE__*/_jsx(Animated.View, {
              className: separatorClassName,
              style: styles?.separator,
              layout: layoutTransition
            })]
          }))
        })
      })
    })
  });
});

// ------------------------------------------------------------------------------

const Item = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    value,
    layout: layoutProp,
    className,
    isDisabled: isDisabledProp,
    ...restProps
  } = props;
  const itemClassName = accordionClassNames.item({
    className
  });
  const {
    layoutTransition
  } = useAccordionAnimation();
  const {
    value: rootValue
  } = useAccordion();
  const itemValue = value;
  const isExpanded = Array.isArray(rootValue) ? rootValue.includes(itemValue) : rootValue === itemValue;
  const renderProps = useMemo(() => ({
    isExpanded,
    value: itemValue
  }), [isExpanded, itemValue]);
  const content = typeof children === 'function' ? children(renderProps) : children;
  return /*#__PURE__*/_jsx(AnimatedItemView, {
    ref: ref,
    layout: layoutProp || layoutTransition,
    value: value,
    className: itemClassName,
    isDisabled: isDisabledProp,
    ...restProps,
    children: content
  });
});

// ------------------------------------------------------------------------------

const Trigger = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const {
    variant
  } = useAccordionInnerContext();
  const triggerClassName = accordionClassNames.trigger({
    variant,
    className
  });
  return /*#__PURE__*/_jsx(AccordionPrimitive.Header, {
    children: /*#__PURE__*/_jsx(AccordionPrimitive.Trigger, {
      ref: ref,
      className: triggerClassName,
      ...restProps,
      children: children
    })
  });
});

// ------------------------------------------------------------------------------

const Indicator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    iconProps,
    animation,
    isAnimatedStyleActive = true,
    style,
    ...restProps
  } = props;
  const {
    isExpanded
  } = useAccordionItem();
  const themeColorForeground = useThemeColor('foreground');
  const indicatorClassName = accordionClassNames.indicator({
    className
  });
  const {
    rContainerStyle
  } = useAccordionIndicatorAnimation({
    animation,
    isExpanded
  });
  const indicatorStyle = isAnimatedStyleActive ? [rContainerStyle, style] : style;
  if (children) {
    return /*#__PURE__*/_jsx(AnimatedIndicator, {
      ref: ref,
      className: indicatorClassName,
      style: style,
      ...restProps,
      children: children
    });
  }
  return /*#__PURE__*/_jsx(AnimatedIndicator, {
    ref: ref,
    className: indicatorClassName,
    style: indicatorStyle,
    ...restProps,
    children: /*#__PURE__*/_jsx(ChevronDownIcon, {
      size: iconProps?.size ?? DEFAULT_ICON_SIZE,
      color: iconProps?.color ?? themeColorForeground
    })
  });
});

// ------------------------------------------------------------------------------

const Content = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    animation,
    ...restProps
  } = props;
  const {
    variant
  } = useAccordionInnerContext();
  const {
    isExpanded
  } = useAccordionItem();
  const contentClassName = accordionClassNames.content({
    variant,
    className
  });
  const {
    entering: animatedEntering,
    exiting: animatedExiting
  } = useAccordionContentAnimation({
    animation
  });
  if (!isExpanded) {
    return null;
  }
  return /*#__PURE__*/_jsx(Animated.View, {
    entering: animatedEntering,
    exiting: animatedExiting,
    children: /*#__PURE__*/_jsx(AccordionPrimitive.Content, {
      ref: ref,
      className: contentClassName,
      ...restProps,
      children: children
    })
  });
});

// ------------------------------------------------------------------------------

Root.displayName = DISPLAY_NAME.ROOT;
Item.displayName = DISPLAY_NAME.ITEM;
Trigger.displayName = DISPLAY_NAME.TRIGGER;
Indicator.displayName = DISPLAY_NAME.INDICATOR;
Content.displayName = DISPLAY_NAME.CONTENT;

/**
 * Compound Accordion component with sub-components
 *
 * @component Accordion - Main container that manages the accordion state and behavior.
 * Controls expansion/collapse of items, supports single or multiple selection modes,
 * and provides variant styling (default or surface).
 *
 * @component Accordion.Item - Container for individual accordion items.
 * Wraps the trigger and content, managing the expanded state for each item.
 * Supports render function children that receive expansion state.
 *
 * @component Accordion.Trigger - Interactive element that toggles item expansion.
 * Built on Header and Trigger primitives.
 *
 * @component Accordion.Indicator - Optional visual indicator showing expansion state.
 * Defaults to an animated chevron icon that rotates based on item state.
 * Supports custom animation configuration.
 *
 * @component Accordion.Content - Container for expandable content.
 * Animated with layout transitions for smooth expand/collapse effects.
 * Supports custom entering and exiting animations.
 *
 * Props flow from Accordion to sub-components via context (variant).
 * Animation state flows via AccordionAnimationProvider.
 * Item expansion state is managed by the primitive accordion context.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/accordion
 */
const CompoundAccordion = Object.assign(Root, {
  /** @required Container for individual accordion items */
  Item,
  /** @required Interactive trigger element */
  Trigger,
  /** @optional Visual indicator showing expansion state (defaults to chevron) */
  Indicator,
  /** @required Container for expandable content with animations */
  Content
});
export default CompoundAccordion;
export { useAccordion, useAccordionItem };
//# sourceMappingURL=accordion.js.map