"use strict";

import { cloneElement, forwardRef, isValidElement } from 'react';
import { composeRefs, isTextChildren, mergeProps } from "./utils.js";

// --------------------------------------------------
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const Pressable = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    children,
    ...pressableSlotProps
  } = props;
  if (! /*#__PURE__*/isValidElement(children)) {
    console.log('Slot.Pressable - Invalid asChild element', children);
    return null;
  }
  return /*#__PURE__*/cloneElement(isTextChildren(children) ? /*#__PURE__*/_jsx(_Fragment, {}) : children, {
    ...mergeProps(pressableSlotProps, children.props),
    ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref
  });
});
Pressable.displayName = 'HeroUINative.Primitive.Slot.Pressable';

// --------------------------------------------------

const View = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    children,
    ...viewSlotProps
  } = props;
  if (! /*#__PURE__*/isValidElement(children)) {
    console.log('Slot.View - Invalid asChild element', children);
    return null;
  }
  return /*#__PURE__*/cloneElement(isTextChildren(children) ? /*#__PURE__*/_jsx(_Fragment, {}) : children, {
    ...mergeProps(viewSlotProps, children.props),
    ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref
  });
});
View.displayName = 'HeroUINative.Primitive.Slot.View';

// --------------------------------------------------

const Text = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    children,
    ...textSlotProps
  } = props;
  if (! /*#__PURE__*/isValidElement(children)) {
    console.log('Slot.Text - Invalid asChild element', children);
    return null;
  }
  return /*#__PURE__*/cloneElement(isTextChildren(children) ? /*#__PURE__*/_jsx(_Fragment, {}) : children, {
    ...mergeProps(textSlotProps, children.props),
    ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref
  });
});
Text.displayName = 'HeroUINative.Primitive.Slot.Text';

// --------------------------------------------------

const Image = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    children,
    ...imageSlotProps
  } = props;
  if (! /*#__PURE__*/isValidElement(children)) {
    console.log('Slot.Image - Invalid asChild element', children);
    return null;
  }
  return /*#__PURE__*/cloneElement(isTextChildren(children) ? /*#__PURE__*/_jsx(_Fragment, {}) : children, {
    ...mergeProps(imageSlotProps, children.props),
    ref: forwardedRef ? composeRefs(forwardedRef, children.ref) : children.ref
  });
});
Image.displayName = 'HeroUINative.Primitive.Slot.Image';
export { Image, Pressable, Text, View };
//# sourceMappingURL=slot.js.map