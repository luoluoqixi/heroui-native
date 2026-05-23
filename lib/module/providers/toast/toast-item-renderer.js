"use strict";

import { memo } from 'react';
/**
 * Memoized toast item component to prevent unnecessary re-renders
 * Only re-renders when the toast item itself changes
 */
export const ToastItemRenderer = /*#__PURE__*/memo(({
  toastItem,
  show,
  hide,
  index,
  total,
  heights,
  maxVisibleToasts
}) => {
  if (typeof toastItem.component !== 'function') {
    throw new Error('Toast component must be a function that receives ToastComponentProps');
  }
  const content = toastItem.component({
    id: toastItem.id,
    index,
    total,
    heights,
    maxVisibleToasts,
    show,
    hide
  });
  return content;
}, (prevProps, nextProps) => {
  // Only re-render if the toast ID, component reference, or index changed
  // show, hide, total, and heights are stable references, so we don't need to compare them
  return prevProps.toastItem.id === nextProps.toastItem.id && prevProps.toastItem.component === nextProps.toastItem.component && prevProps.index === nextProps.index;
});
//# sourceMappingURL=toast-item-renderer.js.map