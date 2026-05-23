"use strict";

import { Children, forwardRef, useMemo } from 'react';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { HeroText } from "../../helpers/internal/components/index.js";
import { CloseIcon } from "../../helpers/internal/components/close-icon.js";
import { AnimationSettingsProvider, FormFieldProvider } from "../../helpers/internal/contexts/index.js";
import { childrenToString, createContext } from "../../helpers/internal/utils/index.js";
import * as TagGroupPrimitives from "../../primitives/tag-group/index.js";
import { useItemContext as usePrimitiveItemContext, useRootContext as usePrimitiveRootContext } from "../../primitives/tag-group/index.js";
import { useTagGroupRootAnimation } from "./tag-group.animation.js";
import { DISPLAY_NAME } from "./tag-group.constants.js";
import { tagGroupClassNames, tagGroupStyleSheet } from "./tag-group.styles.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Internal context for size and variant. Not exported — consumers use useTagGroup or useTagGroupItem.
 */
const [TagGroupProvider, useInnerTagGroupContext] = createContext({
  name: 'TagGroupContext'
});

/** Re-exports primitive useRootContext */
const useTagGroup = usePrimitiveRootContext;

/** Re-exports primitive useItemContext */
const useTagGroupItem = usePrimitiveItemContext;

// --------------------------------------------------

const TagGroupRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    size = 'md',
    variant = 'default',
    className,
    style,
    animation,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    ...restProps
  } = props;
  const rootClassName = tagGroupClassNames.root({
    className
  });
  const {
    isAllAnimationsDisabled
  } = useTagGroupRootAnimation({
    animation
  });
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  const formFieldContextValue = useMemo(() => ({
    isDisabled: isDisabled ?? false,
    isInvalid: isInvalid ?? false,
    isRequired: isRequired ?? false,
    hasFieldPadding: false
  }), [isDisabled, isInvalid, isRequired]);
  const contextValue = useMemo(() => ({
    size,
    variant
  }), [size, variant]);
  return /*#__PURE__*/_jsx(AnimationSettingsProvider, {
    value: animationSettingsContextValue,
    children: /*#__PURE__*/_jsx(FormFieldProvider, {
      value: formFieldContextValue,
      children: /*#__PURE__*/_jsx(TagGroupProvider, {
        value: contextValue,
        children: /*#__PURE__*/_jsx(TagGroupPrimitives.Root, {
          ref: ref,
          className: rootClassName,
          style: style,
          isDisabled: isDisabled,
          ...restProps,
          children: children
        })
      })
    })
  });
});

// --------------------------------------------------

const TagGroupList = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    style,
    renderEmptyState,
    ...restProps
  } = props;
  const listClassName = tagGroupClassNames.list({
    className
  });
  const hasChildren = Children.count(children) > 0;
  return /*#__PURE__*/_jsx(TagGroupPrimitives.List, {
    ref: ref,
    className: listClassName,
    style: style,
    ...restProps,
    children: hasChildren ? children : renderEmptyState?.()
  });
});

// --------------------------------------------------

const TagGroupItem = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    style,
    id,
    isDisabled: isDisabledProp,
    ...restProps
  } = props;
  const {
    variant,
    size
  } = useInnerTagGroupContext();
  const {
    selectedKeys,
    disabledKeys,
    isDisabled: isRootDisabled
  } = usePrimitiveRootContext();
  const isSelected = selectedKeys.has(id);
  const isDisabled = isRootDisabled || disabledKeys.has(id) || (isDisabledProp ?? false);
  const tagClassName = tagGroupClassNames.tag({
    variant,
    size,
    isSelected,
    isDisabled,
    className
  });
  if (typeof children === 'function') {
    const renderProps = {
      isSelected,
      isDisabled
    };
    return /*#__PURE__*/_jsx(TagGroupPrimitives.Item, {
      ref: ref,
      id: id,
      isDisabled: isDisabledProp,
      className: tagClassName,
      style: [tagGroupStyleSheet.tag, style],
      ...restProps,
      children: children(renderProps)
    });
  }
  const stringifiedChildren = childrenToString(children);
  return /*#__PURE__*/_jsx(TagGroupPrimitives.Item, {
    ref: ref,
    id: id,
    isDisabled: isDisabledProp,
    className: tagClassName,
    style: [tagGroupStyleSheet.tag, style],
    ...restProps,
    children: stringifiedChildren ? /*#__PURE__*/_jsx(TagGroupItemLabel, {
      children: stringifiedChildren
    }) : children
  });
});

// --------------------------------------------------

const TagGroupItemLabel = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const {
    isSelected
  } = usePrimitiveItemContext();
  const {
    size
  } = useInnerTagGroupContext();
  const tagLabelClassName = tagGroupClassNames.tagLabel({
    size,
    isSelected,
    className
  });
  return /*#__PURE__*/_jsx(TagGroupPrimitives.ItemLabel, {
    asChild: true,
    children: /*#__PURE__*/_jsx(HeroText, {
      ref: ref,
      className: tagLabelClassName,
      ...restProps,
      children: children
    })
  });
});

// --------------------------------------------------
const TagGroupItemRemoveButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    iconProps,
    hitSlop = 8,
    ...restProps
  } = props;
  const {
    isSelected
  } = usePrimitiveItemContext();
  const [themeColorFieldForeground, themeColorAccentForeground] = useThemeColor(['field-foreground', 'accent-soft-foreground']);
  const removeButtonClassName = tagGroupClassNames.removeButton({
    className
  });
  const defaultIconColor = isSelected ? themeColorAccentForeground : themeColorFieldForeground;
  const defaultIcon = /*#__PURE__*/_jsx(CloseIcon, {
    size: iconProps?.size ?? 12,
    color: iconProps?.color ?? defaultIconColor
  });
  return /*#__PURE__*/_jsx(TagGroupPrimitives.RemoveButton, {
    ref: ref,
    className: removeButtonClassName,
    hitSlop: hitSlop,
    ...restProps,
    children: children ?? defaultIcon
  });
});

// --------------------------------------------------

TagGroupRoot.displayName = DISPLAY_NAME.TAG_GROUP_ROOT;
TagGroupList.displayName = DISPLAY_NAME.TAG_GROUP_LIST;
TagGroupItem.displayName = DISPLAY_NAME.TAG_GROUP_ITEM;
TagGroupItemLabel.displayName = DISPLAY_NAME.TAG_GROUP_ITEM_LABEL;
TagGroupItemRemoveButton.displayName = DISPLAY_NAME.TAG_GROUP_ITEM_REMOVE_BUTTON;

// --------------------------------------------------

/**
 * Compound TagGroup component with sub-components
 *
 * @component TagGroup - Main container that manages tag selection state,
 * disabled keys, and remove functionality. Provides size and variant
 * context to all child components.
 *
 * @component TagGroup.List - Container for rendering the list of tags
 * with optional empty state rendering.
 *
 * @component TagGroup.Item - Individual tag within the group. Supports string
 * children (auto-wrapped in TagGroup.ItemLabel), render function children,
 * or custom layouts.
 *
 * @component TagGroup.ItemLabel - Text label for the tag. Automatically
 * rendered when string children are provided, or can be used explicitly.
 *
 * @component TagGroup.ItemRemoveButton - Remove button for the tag. Must be
 * placed explicitly by the consumer when removal is needed.
 *
 * Props flow from TagGroup to sub-components via context (size, variant).
 *
 * @see Full documentation: https://heroui.com/docs/native/components/tag-group
 */
const TagGroup = Object.assign(TagGroupRoot, {
  /** Container for the list of tags */
  List: TagGroupList,
  /** Individual tag item within the group */
  Item: TagGroupItem,
  /** Text label for the tag item */
  ItemLabel: TagGroupItemLabel,
  /** Remove button for the tag item */
  ItemRemoveButton: TagGroupItemRemoveButton
});
export { TagGroup, useTagGroup, useTagGroupItem };
export default TagGroup;
//# sourceMappingURL=tag-group.js.map