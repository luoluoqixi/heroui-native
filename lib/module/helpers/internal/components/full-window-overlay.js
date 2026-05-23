"use strict";

import { Platform } from 'react-native';
import ReactNativeScreensPackage from "../../../optional/react-native-screens.js";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const NativeFullWindowOverlay = ReactNativeScreensPackage?.FullWindowOverlay;

/**
 * Props for the FullWindowOverlay component
 *
 * @description
 * FullWindowOverlay renders content in a separate native window on iOS,
 * which allows overlays (bottom sheets, dialogs, toasts) to appear above
 * native modals and the keyboard. However, this breaks the React Native
 * element inspector because it attaches to the main window.
 *
 * Set `disableFullWindowOverlay={true}` when you need to use the element
 * inspector during development. Note: when disabled, overlay content will
 * not render above native modals. iOS only; has no effect on Android.
 */

/**
 * Wrapper for react-native-screens FullWindowOverlay with optional disable prop.
 *
 * @description
 * On iOS, FullWindowOverlay creates a separate native window for overlay content,
 * which breaks the React Native element inspector. Use `disableFullWindowOverlay`
 * when debugging to render content in the main window instead.
 */
export function FullWindowOverlay({
  disableFullWindowOverlay,
  unstable_accessibilityContainerViewIsModal = false,
  children
}) {
  if (Platform.OS !== 'ios' || disableFullWindowOverlay || !NativeFullWindowOverlay) {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/_jsx(NativeFullWindowOverlay, {
    unstable_accessibilityContainerViewIsModal: unstable_accessibilityContainerViewIsModal,
    children: children
  });
}
//# sourceMappingURL=full-window-overlay.js.map