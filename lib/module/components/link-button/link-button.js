"use strict";

import { forwardRef } from 'react';
import { Button } from "../button/index.js";
import { resolveAnimationObject } from "../button/button.utils.js";
import { DISPLAY_NAME } from "./link-button.constants.js";
import linkButtonClassNames from "./link-button.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const LinkButtonRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    animation,
    ...restProps
  } = props;
  const rootClassName = linkButtonClassNames.root({
    className
  });
  const resolvedAnimation = {
    ...resolveAnimationObject(animation),
    highlight: false
  };
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: "ghost",
    className: rootClassName,
    animation: resolvedAnimation,
    ...restProps
  });
});

// --------------------------------------------------

const LinkButtonLabel = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/_jsx(Button.Label, {
    ref: ref,
    ...props
  });
});

// --------------------------------------------------

LinkButtonRoot.displayName = DISPLAY_NAME.LINK_BUTTON_ROOT;
LinkButtonLabel.displayName = DISPLAY_NAME.LINK_BUTTON_LABEL;

/**
 * Compound LinkButton component
 *
 * @component LinkButton - A ghost-variant button with no highlight feedback,
 * designed for inline link-style interactions (e.g. "Terms" / "Privacy Policy" links).
 * The ghost variant and disabled highlight are enforced internally and cannot be overridden.
 *
 * @component LinkButton.Label - Text content of the link button. Inherits size and variant
 * styling from the parent LinkButton context (delegates to Button.Label).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/link-button
 */
const LinkButton = Object.assign(LinkButtonRoot, {
  /** Link button label - renders text or custom content */
  Label: LinkButtonLabel
});
export default LinkButton;
//# sourceMappingURL=link-button.js.map