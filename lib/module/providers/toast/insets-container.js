"use strict";

import { useMemo } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FullWindowOverlay } from "../../helpers/internal/components/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Container component that applies inset padding to position toasts
 * away from screen edges and safe areas
 *
 * Combines custom insets with safe area insets:
 * - If custom inset is provided, it overrides safe area + default padding
 * - If not provided, uses platform-specific defaults:
 *   - iOS: safe area inset + 0px for top, + 6px for bottom, + 12px for left/right
 *   - Android: safe area inset + 12px for all edges
 */
export function InsetsContainer({
  insets,
  contentWrapper,
  children,
  disableFullWindowOverlay,
  unstable_accessibilityContainerViewIsModal
}) {
  const safeAreaInsets = useSafeAreaInsets();
  const finalInsets = useMemo(() => {
    return {
      top: insets?.top ?? safeAreaInsets.top + (Platform.OS === 'ios' ? 0 : 12),
      bottom: insets?.bottom ?? safeAreaInsets.bottom + (Platform.OS === 'ios' ? 6 : 12),
      left: insets?.left ?? safeAreaInsets.left + 12,
      right: insets?.right ?? safeAreaInsets.right + 12
    };
  }, [safeAreaInsets, insets]);
  const content = /*#__PURE__*/_jsx(View, {
    className: "absolute inset-0 pointer-events-box-none",
    style: {
      paddingTop: finalInsets.top,
      paddingBottom: finalInsets.bottom,
      paddingLeft: finalInsets.left,
      paddingRight: finalInsets.right
    },
    children: contentWrapper ? contentWrapper(children) : children
  });
  if (Platform.OS !== 'ios') {
    return content;
  }
  return /*#__PURE__*/_jsx(FullWindowOverlay, {
    disableFullWindowOverlay: disableFullWindowOverlay,
    unstable_accessibilityContainerViewIsModal: unstable_accessibilityContainerViewIsModal,
    children: content
  });
}
//# sourceMappingURL=insets-container.js.map