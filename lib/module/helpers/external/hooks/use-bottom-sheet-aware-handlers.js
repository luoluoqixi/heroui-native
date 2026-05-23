"use strict";

import { useCallback } from 'react';
import { findNodeHandle, TextInput } from 'react-native';
import GorhomBottomSheetPackage from "../../../optional/gorhom-bottom-sheet.js";

/**
 * Return type for the bottom-sheet-aware handlers hook
 */

/**
 * Hook that provides onFocus/onBlur handlers for managing bottom sheet
 * keyboard state when an input is rendered inside a BottomSheet context.
 *
 * Uses `useBottomSheetInternal(true)` (unsafe mode) so it returns `null`
 * instead of throwing when called outside a BottomSheet. When inside a
 * BottomSheet it returns handlers that wire into the keyboard state
 * management logic required by `@gorhom/bottom-sheet`.
 *
 * Pass the returned handlers to your `<Input>` or `<InputOTP>` component:
 *
 * ```tsx
 * const { onFocus, onBlur } = useBottomSheetAwareHandlers();
 * <Input onFocus={onFocus} onBlur={onBlur} />
 * ```
 *
 * @returns onFocus and onBlur handlers for bottom sheet keyboard management
 */
export function useBottomSheetAwareHandlers() {
  const useBottomSheetInternal = GorhomBottomSheetPackage?.useBottomSheetInternal;
  const bottomSheetContext = useBottomSheetInternal?.(true) ?? null;
  const isActive = bottomSheetContext !== null;

  /**
   * Handles focus event: notifies the bottom sheet about the keyboard target.
   */
  const onFocus = useCallback(e => {
    if (isActive && bottomSheetContext) {
      bottomSheetContext.animatedKeyboardState.set(state => ({
        ...state,
        target: e.nativeEvent.target
      }));
    }
  }, [isActive, bottomSheetContext]);

  /**
   * Handles blur event: conditionally clears the keyboard target in the
   * bottom sheet state.
   */
  const onBlur = useCallback(e => {
    if (isActive && bottomSheetContext) {
      const keyboardState = bottomSheetContext.animatedKeyboardState.get();
      const currentFocusedInput = findNodeHandle(TextInput.State.currentlyFocusedInput());
      const shouldRemoveCurrentTarget = keyboardState.target === e.nativeEvent.target;
      const shouldIgnoreBlurEvent = currentFocusedInput && bottomSheetContext.textInputNodesRef.current.has(currentFocusedInput);
      if (shouldRemoveCurrentTarget && !shouldIgnoreBlurEvent) {
        bottomSheetContext.animatedKeyboardState.set(state => ({
          ...state,
          target: undefined
        }));
      }
    }
  }, [isActive, bottomSheetContext]);
  return {
    onFocus,
    onBlur
  };
}
//# sourceMappingURL=use-bottom-sheet-aware-handlers.js.map