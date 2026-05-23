"use strict";

import { forwardRef } from 'react';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { CloseIcon } from "../../helpers/internal/components/index.js";
import { Button } from "../button/index.js";
import { DISPLAY_NAME } from "./close-button.constants.js";
import closeButtonClassNames from "./close-button.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const CloseButtonRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    iconProps,
    className,
    children,
    ...restProps
  } = props;
  const themeColorMuted = useThemeColor('muted');

  /** Resolved root className from close-button styles */
  const rootClassName = closeButtonClassNames.root({
    className
  });
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: "tertiary",
    size: "sm",
    isIconOnly: true,
    className: rootClassName,
    hitSlop: 12,
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(CloseIcon, {
      size: iconProps?.size ?? 18,
      color: iconProps?.color ?? themeColorMuted
    })
  });
});

// --------------------------------------------------

CloseButtonRoot.displayName = DISPLAY_NAME.CLOSE_BUTTON_ROOT;

/**
 * Compound CloseButton component
 *
 * @component CloseButton - A specialized button component that renders a close icon by default.
 * It is a Button with default variant='tertiary', size='sm', and isIconOnly=true.
 * The close icon can be customized via the iconProps prop, or you can provide custom children.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/close-button
 */
const CloseButton = CloseButtonRoot;
export default CloseButton;
//# sourceMappingURL=close-button.js.map