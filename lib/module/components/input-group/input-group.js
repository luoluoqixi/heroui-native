"use strict";

import { forwardRef, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { AnimationSettingsProvider, useFormField } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import { Input } from "../input/index.js";
import { useInputGroupRootAnimation } from "./input-group.animation.js";
import { DISPLAY_NAME } from "./input-group.constants.js";
import { inputGroupClassNames } from "./input-group.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [InputGroupProvider, useInputGroup] = createContext({
  name: 'InputGroupContext',
  strict: false
});

// --------------------------------------------------

const InputGroupRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    animation,
    isDisabled = false,
    ...restProps
  } = props;
  const [prefixWidth, setPrefixWidth] = useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);
  const {
    isAllAnimationsDisabled
  } = useInputGroupRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const inputGroupContextValue = useMemo(() => ({
    isDisabled,
    prefixWidth,
    suffixWidth,
    setPrefixWidth,
    setSuffixWidth
  }), [isDisabled, prefixWidth, suffixWidth]);
  return /*#__PURE__*/_jsx(InputGroupProvider, {
    value: inputGroupContextValue,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContextValue,
      children: /*#__PURE__*/_jsx(View, {
        ref: ref,
        ...restProps,
        children: children
      })
    })
  });
});

// --------------------------------------------------

const InputGroupPrefix = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    isDecorative = false,
    onLayout: onLayoutProp,
    ...restProps
  } = props;
  const context = useInputGroup();
  const formField = useFormField();
  const isDisabled = context?.isDisabled ?? formField?.isDisabled ?? false;
  const onLayout = useCallback(event => {
    context?.setPrefixWidth(event.nativeEvent.layout.width);
    onLayoutProp?.(event);
  }, [context, onLayoutProp]);
  const prefixClassName = inputGroupClassNames.prefix({
    className,
    isDisabled
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: prefixClassName,
    onLayout: onLayout,
    pointerEvents: isDecorative || isDisabled ? 'none' : undefined,
    accessibilityElementsHidden: isDecorative || undefined,
    importantForAccessibility: isDecorative ? 'no-hide-descendants' : undefined,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const InputGroupSuffix = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    isDecorative = false,
    onLayout: onLayoutProp,
    ...restProps
  } = props;
  const context = useInputGroup();
  const formField = useFormField();
  const isDisabled = context?.isDisabled ?? formField?.isDisabled ?? false;
  const suffixClassName = inputGroupClassNames.suffix({
    className,
    isDisabled
  });
  const onLayout = useCallback(event => {
    context?.setSuffixWidth(event.nativeEvent.layout.width);
    onLayoutProp?.(event);
  }, [context, onLayoutProp]);
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: suffixClassName,
    onLayout: onLayout,
    pointerEvents: isDecorative || isDisabled ? 'none' : undefined,
    accessibilityElementsHidden: isDecorative || undefined,
    importantForAccessibility: isDecorative ? 'no-hide-descendants' : undefined,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const InputGroupInput = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    style,
    isDisabled: localIsDisabled,
    ...restProps
  } = props;
  const context = useInputGroup();
  const isDisabled = localIsDisabled ?? context?.isDisabled ?? undefined;
  const autoPaddingStyle = useMemo(() => {
    const paddingLeft = context?.prefixWidth && context.prefixWidth > 0 ? context.prefixWidth : undefined;
    const paddingRight = context?.suffixWidth && context.suffixWidth > 0 ? context.suffixWidth : undefined;
    if (paddingLeft === undefined && paddingRight === undefined) {
      return undefined;
    }
    return {
      paddingLeft,
      paddingRight
    };
  }, [context?.prefixWidth, context?.suffixWidth]);
  return /*#__PURE__*/_jsx(Input, {
    ref: ref,
    style: [autoPaddingStyle, style],
    isDisabled: isDisabled,
    ...restProps
  });
});

// --------------------------------------------------

InputGroupRoot.displayName = DISPLAY_NAME.INPUT_GROUP;
InputGroupPrefix.displayName = DISPLAY_NAME.INPUT_GROUP_PREFIX;
InputGroupSuffix.displayName = DISPLAY_NAME.INPUT_GROUP_SUFFIX;
InputGroupInput.displayName = DISPLAY_NAME.INPUT_GROUP_INPUT;

/**
 * Compound InputGroup component with sub-components.
 *
 * @component InputGroup - Layout container (plain View) that wraps
 * Prefix, Input, and Suffix. Provides animation settings and a
 * measurement context so Prefix/Suffix widths are automatically applied
 * as padding on the Input.
 *
 * @component InputGroup.Prefix - Absolutely positioned View anchored to
 * the left side of the Input. Its measured width is applied as
 * `paddingLeft` on InputGroup.Input automatically. Set `isDecorative`
 * to make touches pass through to the Input and hide from accessibility.
 *
 * @component InputGroup.Suffix - Absolutely positioned View anchored to
 * the right side of the Input. Its measured width is applied as
 * `paddingRight` on InputGroup.Input automatically. Set `isDecorative`
 * to make touches pass through to the Input and hide from accessibility.
 *
 * @component InputGroup.Input - Pass-through to the Input component.
 * Accepts all Input props directly (value, onChangeText, isDisabled, etc.).
 * Automatically receives paddingLeft/paddingRight from measured Prefix/Suffix.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/input-group
 */
const CompoundInputGroup = Object.assign(InputGroupRoot, {
  /** Absolutely positioned View for leading prefix content */
  Prefix: InputGroupPrefix,
  /** Absolutely positioned View for trailing suffix content */
  Suffix: InputGroupSuffix,
  /** Pass-through to Input — accepts all Input props directly */
  Input: InputGroupInput
});
export default CompoundInputGroup;
//# sourceMappingURL=input-group.js.map