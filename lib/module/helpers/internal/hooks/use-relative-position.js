"use strict";

import * as React from 'react';
import { Dimensions } from 'react-native';
export function useRelativePosition({
  align,
  avoidCollisions,
  triggerPosition,
  contentLayout,
  alignOffset,
  insets,
  offset,
  placement,
  disablePositioningStyle
}) {
  const dimensions = Dimensions.get('screen');
  return React.useMemo(() => {
    if (disablePositioningStyle) {
      return {};
    }
    if (!triggerPosition || !contentLayout) {
      return {
        position: 'absolute',
        opacity: 0,
        top: dimensions.height
      };
    }
    return getContentStyle({
      align,
      avoidCollisions,
      contentLayout,
      placement,
      triggerPosition,
      alignOffset,
      insets,
      offset,
      dimensions
    });
  }, [align, avoidCollisions, placement, alignOffset, insets, triggerPosition, contentLayout, dimensions, disablePositioningStyle, offset]);
}
function getSidePosition({
  placement,
  triggerPosition,
  contentLayout,
  offset,
  insets,
  avoidCollisions,
  dimensions
}) {
  const insetTop = insets?.top ?? 0;
  const insetBottom = insets?.bottom ?? 0;
  const insetLeft = insets?.left ?? 0;
  const insetRight = insets?.right ?? 0;

  // Handle vertical sides (top/bottom)
  if (placement === 'top' || placement === 'bottom') {
    const positionTop = triggerPosition?.pageY - offset - contentLayout.height;
    const positionBottom = triggerPosition.pageY + triggerPosition.height + offset;
    if (!avoidCollisions) {
      return {
        top: placement === 'top' ? positionTop : positionBottom
      };
    }
    if (placement === 'top') {
      return {
        top: Math.min(Math.max(insetTop, positionTop), dimensions.height - insetBottom - contentLayout.height)
      };
    }
    return {
      top: Math.min(dimensions.height - insetBottom - contentLayout.height, positionBottom)
    };
  }

  // Handle horizontal sides (left/right)
  const maxContentWidth = dimensions.width - insetLeft - insetRight;
  const contentWidth = Math.min(contentLayout.width, maxContentWidth);
  const positionLeft = triggerPosition.pageX - offset - contentWidth;
  const positionRight = triggerPosition.pageX + triggerPosition.width + offset;
  if (!avoidCollisions) {
    return {
      left: placement === 'left' ? positionLeft : positionRight
    };
  }
  if (placement === 'left') {
    return {
      left: Math.min(Math.max(insetLeft, positionLeft), dimensions.width - insetRight - contentWidth)
    };
  }

  // For right placement, ensure content doesn't go beyond left inset
  return {
    left: Math.max(insetLeft, Math.min(dimensions.width - insetRight - contentWidth, positionRight))
  };
}
function getAlignPosition({
  align,
  avoidCollisions,
  contentLayout,
  triggerPosition,
  alignOffset,
  insets,
  dimensions,
  placement
}) {
  const insetLeft = insets?.left ?? 0;
  const insetRight = insets?.right ?? 0;
  const insetTop = insets?.top ?? 0;
  const insetBottom = insets?.bottom ?? 0;

  // For top/bottom sides, align horizontally
  if (placement === 'top' || placement === 'bottom') {
    const maxContentWidth = dimensions.width - insetLeft - insetRight;
    const contentWidth = Math.min(contentLayout.width, maxContentWidth);
    let left = getHorizontalAlignPosition(align, triggerPosition.pageX, triggerPosition.width, contentWidth, alignOffset, insetLeft, insetRight, dimensions);
    if (avoidCollisions) {
      const doesCollide = left < insetLeft || left + contentWidth > dimensions.width - insetRight;
      if (doesCollide) {
        const spaceLeft = left - insetLeft;
        const spaceRight = dimensions.width - insetRight - (left + contentWidth);
        if (spaceLeft > spaceRight && spaceLeft >= contentWidth) {
          left = insetLeft;
        } else if (spaceRight >= contentWidth) {
          left = dimensions.width - insetRight - contentWidth;
        } else {
          const centeredPosition = Math.max(insetLeft, (dimensions.width - contentWidth - insetRight) / 2);
          left = centeredPosition;
        }
      }
    }
    return {
      left,
      maxWidth: maxContentWidth
    };
  }

  // For left/right sides, align vertically and constrain width
  const maxContentHeight = dimensions.height - insetTop - insetBottom;
  const maxContentWidth = dimensions.width - insetLeft - insetRight;
  const contentHeight = Math.min(contentLayout.height, maxContentHeight);
  let top = getVerticalAlignPosition(align, triggerPosition.pageY, triggerPosition.height, contentHeight, alignOffset, insetTop, insetBottom, dimensions);
  if (avoidCollisions) {
    const doesCollide = top < insetTop || top + contentHeight > dimensions.height - insetBottom;
    if (doesCollide) {
      const spaceTop = top - insetTop;
      const spaceBottom = dimensions.height - insetBottom - (top + contentHeight);
      if (spaceTop > spaceBottom && spaceTop >= contentHeight) {
        top = insetTop;
      } else if (spaceBottom >= contentHeight) {
        top = dimensions.height - insetBottom - contentHeight;
      } else {
        const centeredPosition = Math.max(insetTop, (dimensions.height - contentHeight - insetBottom) / 2);
        top = centeredPosition;
      }
    }
  }
  return {
    top,
    maxHeight: maxContentHeight,
    maxWidth: maxContentWidth
  };
}
function getHorizontalAlignPosition(align, triggerPageX, triggerWidth, contentWidth, alignOffset, insetLeft, insetRight, dimensions) {
  let left = 0;
  if (align === 'start') {
    left = triggerPageX;
  }
  if (align === 'center') {
    left = triggerPageX + triggerWidth / 2 - contentWidth / 2;
  }
  if (align === 'end') {
    left = triggerPageX + triggerWidth - contentWidth;
  }
  return Math.max(insetLeft, Math.min(left + alignOffset, dimensions.width - contentWidth - insetRight));
}
function getVerticalAlignPosition(align, triggerPageY, triggerHeight, contentHeight, alignOffset, insetTop, insetBottom, dimensions) {
  let top = 0;
  if (align === 'start') {
    top = triggerPageY;
  }
  if (align === 'center') {
    top = triggerPageY + triggerHeight / 2 - contentHeight / 2;
  }
  if (align === 'end') {
    top = triggerPageY + triggerHeight - contentHeight;
  }
  return Math.max(insetTop, Math.min(top + alignOffset, dimensions.height - contentHeight - insetBottom));
}
function getContentStyle({
  align,
  avoidCollisions,
  contentLayout,
  placement,
  triggerPosition,
  alignOffset,
  insets,
  offset,
  dimensions
}) {
  return Object.assign({
    position: 'absolute'
  }, getSidePosition({
    placement,
    triggerPosition,
    contentLayout,
    offset,
    insets,
    avoidCollisions,
    dimensions
  }), getAlignPosition({
    align,
    avoidCollisions,
    triggerPosition,
    contentLayout,
    alignOffset,
    insets,
    dimensions,
    placement
  }));
}
//# sourceMappingURL=use-relative-position.js.map