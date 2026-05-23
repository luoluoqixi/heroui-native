"use strict";

import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { ChevronRightIcon, HeroText } from "../../helpers/internal/components/index.js";
import Surface from "../surface/surface.js";
import { DEFAULT_ICON_SIZE, DISPLAY_NAME } from "./list-group.constants.js";
import listGroupClassNames, { styleSheet } from "./list-group.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
// --------------------------------------------------

const ListGroupRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    variant = 'default',
    className,
    style,
    ...restProps
  } = props;
  const rootClassName = listGroupClassNames.root({
    className
  });
  return /*#__PURE__*/_jsx(Surface, {
    ref: ref,
    variant: variant,
    className: rootClassName,
    style: [styleSheet.root, style],
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ListGroupItem = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const itemClassName = listGroupClassNames.item({
    className
  });
  return /*#__PURE__*/_jsx(Pressable, {
    ref: ref,
    className: itemClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ListGroupItemPrefix = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ListGroupItemContent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    style,
    ...restProps
  } = props;
  const contentClassName = listGroupClassNames.itemContent({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: contentClassName,
    style: style,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const ListGroupItemTitle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const titleClassName = listGroupClassNames.itemTitle({
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

const ListGroupItemDescription = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const descriptionClassName = listGroupClassNames.itemDescription({
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

const ListGroupItemSuffix = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    iconProps,
    ...restProps
  } = props;
  const themeColorMuted = useThemeColor('muted');
  const resolvedIconProps = {
    size: iconProps?.size ?? DEFAULT_ICON_SIZE,
    color: iconProps?.color ?? themeColorMuted
  };
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(ChevronRightIcon, {
      size: resolvedIconProps.size,
      color: resolvedIconProps.color
    })
  });
});

// --------------------------------------------------

ListGroupRoot.displayName = DISPLAY_NAME.ROOT;
ListGroupItem.displayName = DISPLAY_NAME.ITEM;
ListGroupItemPrefix.displayName = DISPLAY_NAME.ITEM_PREFIX;
ListGroupItemContent.displayName = DISPLAY_NAME.ITEM_CONTENT;
ListGroupItemTitle.displayName = DISPLAY_NAME.ITEM_TITLE;
ListGroupItemDescription.displayName = DISPLAY_NAME.ITEM_DESCRIPTION;
ListGroupItemSuffix.displayName = DISPLAY_NAME.ITEM_SUFFIX;

/**
 * Compound ListGroup component with sub-components
 *
 * @component ListGroup - Surface-based container that groups related list items.
 * Supports all Surface variants (default, secondary, tertiary, transparent).
 *
 * @component ListGroup.Item - Horizontal flex-row container for a single item,
 * providing consistent spacing and alignment.
 *
 * @component ListGroup.ItemPrefix - Optional leading content slot for icons,
 * avatars, or other visual elements.
 *
 * @component ListGroup.ItemContent - Flex-1 wrapper for title and description,
 * occupying the remaining horizontal space.
 *
 * @component ListGroup.ItemTitle - Primary text label styled with foreground color
 * and medium font weight.
 *
 * @component ListGroup.ItemDescription - Secondary text styled with muted color
 * and smaller font size.
 *
 * @component ListGroup.ItemSuffix - Optional trailing content slot. Renders a
 * chevron-right icon by default; accepts children to override the default icon.
 * Supports iconProps (size, color) for customising the default chevron.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/list-group
 */
const CompoundListGroup = Object.assign(ListGroupRoot, {
  /** @optional Single item row with flex-row layout */
  Item: ListGroupItem,
  /** @optional Leading visual element (icon / avatar) */
  ItemPrefix: ListGroupItemPrefix,
  /** @optional Flex-1 content wrapper for title and description */
  ItemContent: ListGroupItemContent,
  /** @optional Primary text label */
  ItemTitle: ListGroupItemTitle,
  /** @optional Secondary descriptive text */
  ItemDescription: ListGroupItemDescription,
  /** @optional Trailing element, defaults to chevron-right icon */
  ItemSuffix: ListGroupItemSuffix
});
export default CompoundListGroup;
//# sourceMappingURL=list-group.js.map