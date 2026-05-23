"use strict";

import { forwardRef, useMemo } from 'react';
import { Pressable } from 'react-native';
import { HeroText } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider } from "../../helpers/internal/contexts/index.js";
import { childrenToString, createContext } from "../../helpers/internal/utils/index.js";
import { useChipRootAnimation } from "./chip.animation.js";
import { DISPLAY_NAME } from "./chip.constants.js";
import { chipClassNames, chipStyleSheet } from "./chip.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [ChipProvider, useChip] = createContext({
  name: 'ChipContext'
});

// --------------------------------------------------

const Chip = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    color = 'accent',
    className,
    style,
    animation,
    ...restProps
  } = props;
  const stringifiedChildren = childrenToString(children);
  const rootClassName = chipClassNames.root({
    size,
    variant,
    color,
    className
  });
  const {
    isAllAnimationsDisabled
  } = useChipRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const contextValue = useMemo(() => ({
    size,
    variant,
    color
  }), [size, variant, color]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(ChipProvider, {
      value: contextValue,
      children: /*#__PURE__*/_jsx(Pressable, {
        ref: ref,
        className: rootClassName,
        style: [chipStyleSheet.root, style],
        ...restProps,
        children: stringifiedChildren ? /*#__PURE__*/_jsx(ChipLabel, {
          children: stringifiedChildren
        }) : children
      })
    })
  });
});

// --------------------------------------------------

const ChipLabel = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const {
    size,
    variant,
    color
  } = useChip();
  const labelClassName = chipClassNames.label({
    size,
    variant,
    color,
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: labelClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

Chip.displayName = DISPLAY_NAME.CHIP_ROOT;
ChipLabel.displayName = DISPLAY_NAME.CHIP_LABEL_CONTENT;

/**
 * Compound Chip component with sub-components
 *
 * @component Chip - Main container that displays a compact element. Renders with
 * string children as label or accepts compound components for custom layouts.
 *
 * @component Chip.Label - Text content of the chip. When string is provided,
 * it renders as Text. Otherwise renders children as-is.
 *
 * Props flow from Chip to sub-components via context (size, variant, color).
 * All components use animated views with layout transitions for smooth animations.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/chip
 */
const CompoundChip = Object.assign(Chip, {
  /** Chip label - renders text or custom content */
  Label: ChipLabel
});
export { useChip };
export default CompoundChip;
//# sourceMappingURL=chip.js.map