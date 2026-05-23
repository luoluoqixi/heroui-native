"use strict";

import { DEFAULT_ICON_SIZE } from "./alert.constants.js";
import { DefaultIcon } from "./default-icon.js";
import { SuccessIcon } from "./success-icon.js";
import { WarningIcon } from "./warning-icon.js";

/**
 * Resolves the default icon component based on the current alert status.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export function getStatusIcon(status, iconProps) {
  const {
    size = DEFAULT_ICON_SIZE,
    color
  } = iconProps;
  switch (status) {
    case 'success':
      return /*#__PURE__*/_jsx(SuccessIcon, {
        size: size,
        color: color
      });
    case 'warning':
      return /*#__PURE__*/_jsx(WarningIcon, {
        size: size,
        color: color
      });
    default:
      return /*#__PURE__*/_jsx(DefaultIcon, {
        size: size,
        color: color
      });
  }
}
//# sourceMappingURL=alert.utils.js.map