"use strict";

import { forwardRef } from 'react';
import Animated from 'react-native-reanimated';
import { HeroText } from "../../helpers/internal/components/index.js";
import { useFormField } from "../../helpers/internal/contexts/index.js";
import { useDescriptionAnimation } from "./description.animation.js";
import { DISPLAY_NAME } from "./description.constants.js";
import { descriptionClassNames } from "./description.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedText = Animated.createAnimatedComponent(HeroText);

// --------------------------------------------------

const Description = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    nativeID,
    isInvalid: localIsInvalid,
    isDisabled: localIsDisabled,
    hideOnInvalid = false,
    animation,
    ...restProps
  } = props;
  const formField = useFormField();
  const isInvalid = localIsInvalid !== undefined ? localIsInvalid : formField?.isInvalid ?? false;
  const isDisabled = localIsDisabled !== undefined ? localIsDisabled : formField?.isDisabled ?? false;
  const isInsideField = formField?.hasFieldPadding ?? false;
  const rootClassName = descriptionClassNames.root({
    isInvalid,
    isDisabled,
    isInsideField,
    className
  });
  const {
    entering,
    exiting
  } = useDescriptionAnimation({
    animation,
    hideOnInvalid
  });
  if (isInvalid && hideOnInvalid) return null;
  return /*#__PURE__*/_jsx(AnimatedText, {
    ref: ref,
    entering: entering,
    exiting: exiting,
    className: rootClassName,
    nativeID: nativeID,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

Description.displayName = DISPLAY_NAME.DESCRIPTION;

/**
 * Description component for form fields and other UI elements.
 *
 * Provides accessible description text with proper styling. Can be linked to
 * form fields via the nativeID prop for accessibility support.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/description
 */
export default Description;
//# sourceMappingURL=description.js.map