"use strict";

import { forwardRef } from 'react';
import Input from "../input/input.js";
import { DISPLAY_NAME } from "./text-area.constants.js";
import { textAreaClassNames } from "./text-area.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const TextAreaRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    multiline = true,
    textAlignVertical = 'top',
    className,
    ...restProps
  } = props;
  const textAreaClassName = textAreaClassNames.root({
    className
  });
  return /*#__PURE__*/_jsx(Input, {
    ref: ref,
    className: textAreaClassName,
    multiline: multiline,
    textAlignVertical: textAlignVertical,
    ...restProps
  });
});

// --------------------------------------------------

TextAreaRoot.displayName = DISPLAY_NAME.TEXT_AREA;

/**
 * TextArea component - A multiline text input component with styled border and background for collecting longer user input.
 * Extends Input component with multiline support, defaulting to 8 lines and top-aligned text.
 * Supports primary and secondary variants, and integrates with form item state context.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/text-area
 */
const TextArea = TextAreaRoot;
export default TextArea;
//# sourceMappingURL=text-area.js.map