"use strict";

import { forwardRef, useMemo } from 'react';
import { HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider, useFormField } from "../../helpers/internal/contexts/index.js";
import { childrenToString, createContext } from "../../helpers/internal/utils/index.js";
import * as LabelPrimitives from "../../primitives/label/index.js";
import { useControlField } from "../control-field/control-field.context.js";
import { useRadioGroupItem } from "../radio-group/radio-group.context.js";
import { useLabelRootAnimation } from "./label.animation.js";
import { DISPLAY_NAME } from "./label.constants.js";
import { labelClassNames } from "./label.styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const [LabelProvider, useLabel] = createContext({
  name: 'LabelContext'
});

// --------------------------------------------------

const Label = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    isDisabled: localIsDisabled,
    isRequired: localIsRequired,
    isInvalid: localIsInvalid,
    className,
    animation,
    ...restProps
  } = props;
  const formField = useFormField();
  const controlFieldContext = useControlField();
  const radioGroupItemContext = useRadioGroupItem();
  const isInsideField = formField?.hasFieldPadding ?? false;
  const isInsideControlField = Boolean(controlFieldContext) || Boolean(radioGroupItemContext);

  // Merge form field state with local props (local takes precedence)
  const isDisabled = localIsDisabled !== undefined ? localIsDisabled : formField?.isDisabled ?? false;
  const isRequired = localIsRequired !== undefined ? localIsRequired : formField?.isRequired ?? false;
  const isInvalid = localIsInvalid !== undefined ? localIsInvalid : formField?.isInvalid ?? false;
  const stringifiedChildren = childrenToString(children);
  const {
    isAllAnimationsDisabled
  } = useLabelRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const contextValue = useMemo(() => ({
    isDisabled,
    isRequired,
    isInvalid
  }), [isDisabled, isRequired, isInvalid]);
  const rootClassName = labelClassNames.root({
    isDisabled,
    isInsideField,
    isInsideControlField,
    className
  });
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(LabelProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(LabelPrimitives.Root, {
        ref: ref,
        isDisabled: isDisabled,
        className: rootClassName,
        ...restProps,
        children: stringifiedChildren ? /*#__PURE__*/_jsx(LabelText, {
          children: stringifiedChildren
        }) : children
      })
    })
  });
});

// --------------------------------------------------

const LabelText = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    classNames,
    styles,
    style,
    ...restProps
  } = props;
  const {
    isDisabled,
    isRequired,
    isInvalid
  } = useLabel();
  const {
    text,
    asterisk
  } = labelClassNames.label({
    isDisabled,
    isInvalid
  });
  const textClassName = text({
    className: [className, classNames?.text]
  });
  const asteriskClassName = asterisk({
    className: classNames?.asterisk
  });
  return /*#__PURE__*/_jsxs(HeroText, {
    ref: ref,
    className: textClassName,
    style: [style, styles?.text],
    ...restProps,
    children: [children, isRequired && /*#__PURE__*/_jsxs(HeroText, {
      className: asteriskClassName,
      style: styles?.asterisk,
      children: [' ', "*"]
    })]
  });
});

// --------------------------------------------------

Label.displayName = DISPLAY_NAME.LABEL_ROOT;
LabelText.displayName = DISPLAY_NAME.LABEL_TEXT;

/**
 * Compound Label component with sub-components
 *
 * @component Label - Main container that displays a label. Renders with
 * string children as Label.Text or accepts compound components for custom layouts.
 *
 * @component Label.Text - Text content of the label. When string is provided,
 * it renders as Text. Otherwise renders children as-is. Shows asterisk when required.
 *
 * Props flow from Label to sub-components via context (isDisabled, isRequired, isInvalid).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/label
 */
const CompoundLabel = Object.assign(Label, {
  /** Label text - renders text or custom content with optional asterisk */
  Text: LabelText
});
export { useLabel };
export default CompoundLabel;
//# sourceMappingURL=label.js.map