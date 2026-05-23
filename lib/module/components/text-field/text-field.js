"use strict";

import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { AnimationSettingsProvider, FormFieldProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import { useTextFieldRootAnimation } from "./text-field.animation.js";
import { DISPLAY_NAME } from "./text-field.constants.js";
import { textFieldClassNames } from "./text-field.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [TextFieldProvider, useTextField] = createContext({
  name: 'TextFieldContext',
  strict: false
});

// --------------------------------------------------

const TextFieldRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    animation,
    ...restProps
  } = props;
  const rootClassName = textFieldClassNames.root({
    className
  });
  const {
    isAllAnimationsDisabled
  } = useTextFieldRootAnimation({
    animation
  });
  const contextValue = useMemo(() => ({
    isDisabled,
    isInvalid,
    isRequired
  }), [isDisabled, isInvalid, isRequired]);
  const formFieldContextValue = useMemo(() => ({
    isDisabled,
    isInvalid,
    isRequired,
    hasFieldPadding: false
  }), [isDisabled, isInvalid, isRequired]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(FormFieldProvider, {
      value: formFieldContextValue,
      children: /*#__PURE__*/_jsx(TextFieldProvider, {
        value: contextValue,
        children: /*#__PURE__*/_jsx(View, {
          ref: ref,
          className: rootClassName,
          ...restProps,
          children: children
        })
      })
    })
  });
});

// --------------------------------------------------

TextFieldRoot.displayName = DISPLAY_NAME.ROOT;

/**
 * TextField component - Main container that provides gap-1 spacing between children.
 * Handles disabled state and validation state for the entire field.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/text-field
 */
const TextField = TextFieldRoot;
export default TextField;
export { useTextField };
//# sourceMappingURL=text-field.js.map