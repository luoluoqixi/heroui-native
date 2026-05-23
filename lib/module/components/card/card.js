"use strict";

import { forwardRef } from 'react';
import { View } from 'react-native';
import { HeroText } from "../../helpers/internal/components/index.js";
import { Surface } from "../surface/index.js";
import { DISPLAY_NAME } from "./card.constants.js";
import { cardClassNames } from "./card.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const CardRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    variant = 'default',
    className,
    ...restProps
  } = props;
  const rootClassName = cardClassNames.root({
    className
  });
  return /*#__PURE__*/_jsx(Surface, {
    ref: ref,
    variant: variant,
    className: rootClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const CardHeader = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const headerClassName = cardClassNames.header({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: headerClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const CardBody = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const bodyClassName = cardClassNames.body({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: bodyClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const CardFooter = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const footerClassName = cardClassNames.footer({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: footerClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const CardTitle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const titleClassName = cardClassNames.label({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: titleClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const CardDescription = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const descriptionClassName = cardClassNames.description({
    className
  });
  return /*#__PURE__*/_jsx(HeroText, {
    ref: ref,
    className: descriptionClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

CardRoot.displayName = DISPLAY_NAME.ROOT;
CardHeader.displayName = DISPLAY_NAME.HEADER;
CardBody.displayName = DISPLAY_NAME.BODY;
CardFooter.displayName = DISPLAY_NAME.FOOTER;
CardTitle.displayName = DISPLAY_NAME.TITLE;
CardDescription.displayName = DISPLAY_NAME.DESCRIPTION;

/**
 * Compound Card component with sub-components
 *
 * @component Card - Main container that extends Surface component. Provides base card structure
 * with configurable surface variants and handles overall layout.
 *
 * @component Card.Header - Header section for top-aligned content like icons or badges.
 *
 * @component Card.Body - Main content area with flex-1 that expands to fill all available space
 * between Card.Header and Card.Footer.
 *
 * @component Card.Title - Title text with foreground color and medium font weight.
 *
 * @component Card.Description - Description text with muted color and smaller font size.
 *
 * @component Card.Footer - Footer section for bottom-aligned actions like buttons.
 *
 * All sub-components support asChild pattern for custom element composition.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/card
 */
const CompoundCard = Object.assign(CardRoot, {
  /** @optional Top-aligned header section */
  Header: CardHeader,
  /** @optional Main content area that expands between header and footer */
  Body: CardBody,
  /** @optional Bottom-aligned footer for actions */
  Footer: CardFooter,
  /** @optional Title text with styled typography */
  Title: CardTitle,
  /** @optional Description text with muted styling */
  Description: CardDescription
});
export default CompoundCard;
//# sourceMappingURL=card.js.map