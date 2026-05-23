"use strict";

import React from 'react';
export const getElementByDisplayName = (children, displayName) => {
  const element = React.Children.toArray(children).find(child => /*#__PURE__*/React.isValidElement(child) && child.type?.displayName === displayName);
  return element;
};
//# sourceMappingURL=get-element-by-display-name.js.map