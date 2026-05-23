"use strict";

import { forwardRef } from 'react';
import Animated from 'react-native-reanimated';
import { HeroText } from "../../helpers/internal/components/index.js";
import { useFormField } from "../../helpers/internal/contexts/index.js";
import { childrenToString } from "../../helpers/internal/utils/index.js";
import { useFieldErrorRootAnimation } from "./field-error.animation.js";
import { DISPLAY_NAME } from "./field-error.constants.js";
import { fieldErrorClassNames } from "./field-error.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const FieldErrorRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    classNames,
    style,
    styles,
    textProps,
    isInvalid: localIsInvalid,
    animation,
    ...restProps
  } = props;
  const formField = useFormField();

  // Merge form field state with local props (local takes precedence)
  const isInvalid = localIsInvalid !== undefined ? localIsInvalid : formField?.isInvalid ?? false;
  const isInsideField = formField?.hasFieldPadding ?? false;
  const {
    container,
    text
  } = fieldErrorClassNames.root({
    isInsideField
  });
  const containerClassName = container({
    className: [className, classNames?.container]
  });
  const textClassName = text({
    className: [classNames?.text, textProps?.className]
  });
  const {
    entering,
    exiting
  } = useFieldErrorRootAnimation({
    animation
  });
  if (!isInvalid) return null;
  const stringifiedChildren = childrenToString(children);
  const renderedChildren = stringifiedChildren ? /*#__PURE__*/_jsx(HeroText, {
    className: textClassName,
    style: styles?.text,
    ...textProps,
    children: stringifiedChildren
  }) : children;
  return /*#__PURE__*/_jsx(Animated.View, {
    ref: ref,
    entering: entering,
    exiting: exiting,
    className: containerClassName,
    style: [style, styles?.container],
    ...restProps,
    children: renderedChildren
  });
});

// --------------------------------------------------

FieldErrorRoot.displayName = DISPLAY_NAME.ROOT;

/**
 * FieldError component for displaying validation errors
 *
 * @component FieldError - Error message container with entering/exiting animations.
 * Automatically wraps string children with Text component.
 * Hidden when isInvalid is false.
 */
const FieldError = FieldErrorRoot;
export default FieldError;
//# sourceMappingURL=field-error.js.map