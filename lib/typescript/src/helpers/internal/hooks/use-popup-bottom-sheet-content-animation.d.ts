import type { SharedValue } from 'react-native-reanimated';
/**
 * Props for usePopupBottomSheetContentAnimation hook
 */
export interface UsePopupBottomSheetContentAnimationProps {
    /**
     * Animation progress shared value (0=idle, 1=open, 2=close)
     */
    progress: SharedValue<number>;
    /**
     * Dragging state shared value
     */
    isDragging: SharedValue<boolean>;
}
/**
 * Animation hook for popup bottom sheet content components (Popover, Select bottom sheet presentation)
 * Handles synchronization between BottomSheet animatedIndex and popup progress state
 */
export declare function usePopupBottomSheetContentAnimation({ progress, isDragging, }: UsePopupBottomSheetContentAnimationProps): {
    animatedIndex: SharedValue<number>;
    isPanActivated: SharedValue<boolean>;
    isClosingOnSwipe: SharedValue<boolean>;
};
//# sourceMappingURL=use-popup-bottom-sheet-content-animation.d.ts.map