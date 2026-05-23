"use strict";

import { getElementByDisplayName } from "./get-element-by-display-name.js";
export const getElementWithDefault = (children, displayName, defaultElement) => {
  const element = getElementByDisplayName(children, displayName);
  if (!element) {
    return defaultElement;
  }
  return element;
};
//# sourceMappingURL=get-element-with-default.js.map