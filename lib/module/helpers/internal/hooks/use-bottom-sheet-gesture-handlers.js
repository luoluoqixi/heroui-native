"use strict";

import GorhomBottomSheetPackage from "../../../optional/gorhom-bottom-sheet.js";
import { useBottomSheetIsDragging } from "../contexts/bottom-sheet-is-dragging-context.js";
export const useBottomSheetGestureHandlers = () => {
  const {
    isDragging
  } = useBottomSheetIsDragging();
  const defaultHandlers = GorhomBottomSheetPackage.useGestureEventsHandlersDefault();
  const handleOnStart = (source, payload) => {
    'worklet';

    isDragging.set(true);
    defaultHandlers.handleOnStart(source, payload);
  };
  const handleOnChange = (source, payload) => {
    'worklet';

    defaultHandlers.handleOnChange(source, payload);
  };
  const handleOnEnd = (source, payload) => {
    'worklet';

    isDragging.set(false);
    defaultHandlers.handleOnEnd(source, payload);
  };
  const handleOnFinalize = (source, payload) => {
    'worklet';

    isDragging.set(false);
    defaultHandlers.handleOnFinalize(source, payload);
  };
  return {
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize
  };
};
//# sourceMappingURL=use-bottom-sheet-gesture-handlers.js.map