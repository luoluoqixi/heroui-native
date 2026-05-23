"use strict";

import { forwardRef } from 'react';
import { View } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const Root = /*#__PURE__*/forwardRef(({
  asChild,
  isLoading = true,
  ...props
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    accessible: true,
    accessibilityRole: "progressbar",
    accessibilityState: {
      busy: isLoading
    },
    ...props
  });
});
Root.displayName = 'HeroUINative.Primitive.ActivityIndicator.Root';

// --------------------------------------------------

const Indicator = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    ...props
  });
});
Indicator.displayName = 'HeroUINative.Primitive.ActivityIndicator.Indicator';
export { Indicator, Root };
//# sourceMappingURL=activity-indicator.js.map