"use strict";

import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { useIsOnSurface } from "../../helpers/external/hooks/index.js";
import { useFormField } from "../../helpers/internal/contexts/index.js";
import { DISPLAY_NAME } from "./input.constants.js";
import { inputClassNames, inputStyleSheet } from "./input.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const InputRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    isInvalid: localIsInvalid,
    isDisabled: localIsDisabled,
    variant,
    className,
    style,
    selectionColorClassName: selectionColorClassNameProp,
    placeholderColorClassName: placeholderColorClassNameProp,
    ...restProps
  } = props;
  const formField = useFormField();
  const isInvalid = localIsInvalid !== undefined ? localIsInvalid : formField?.isInvalid ?? false;
  const isDisabled = localIsDisabled !== undefined ? localIsDisabled : formField?.isDisabled ?? false;
  const isOnSurfaceAutoDetected = useIsOnSurface();
  const finalVariant = variant !== undefined ? variant : isOnSurfaceAutoDetected ? 'secondary' : 'primary';
  const inputClassName = inputClassNames.input({
    variant: finalVariant,
    isInvalid,
    isDisabled,
    className
  });
  const placeholderColorClassName = inputClassNames.placeholderTextColor({
    className: placeholderColorClassNameProp
  });
  const selectionColorClassName = inputClassNames.inputSelectionColor({
    isInvalid,
    className: selectionColorClassNameProp
  });
  return /*#__PURE__*/_jsx(TextInput, {
    ref: ref,
    className: inputClassName,
    style: [inputStyleSheet.borderCurve, style],
    placeholderTextColorClassName: placeholderColorClassName,
    selectionColorClassName: selectionColorClassName,
    editable: !isDisabled,
    ...restProps
  });
});

// --------------------------------------------------

InputRoot.displayName = DISPLAY_NAME.INPUT;

/**
 * Input component - A text input component with styled border and background for collecting user input.
 * Supports primary and secondary variants, and integrates with form item state context.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/input
 */
const Input = InputRoot;
export default Input;
//# sourceMappingURL=input.js.map