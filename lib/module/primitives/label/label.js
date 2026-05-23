"use strict";

import { forwardRef } from 'react';
import { Pressable, Text as RNText } from 'react-native';
import * as Slot from "../slot/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const Root = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.Pressable : Pressable;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    ...props
  });
});
Root.displayName = 'HeroUINative.Primitive.Label.Root';

// --------------------------------------------------

const Text = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const Component = asChild ? Slot.Text : RNText;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    ...props
  });
});
Text.displayName = 'HeroUINative.Primitive.Label.Text';
export { Root, Text };
//# sourceMappingURL=label.js.map