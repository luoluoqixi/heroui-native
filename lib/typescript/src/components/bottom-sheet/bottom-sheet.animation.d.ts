import type { AnimationDisabled } from '../../helpers/internal/types';
import type { BottomSheetAnimationContextValue } from './bottom-sheet.types';
declare const BottomSheetAnimationProvider: import("react").Provider<BottomSheetAnimationContextValue>, useBottomSheetAnimation: () => BottomSheetAnimationContextValue;
export { BottomSheetAnimationProvider, useBottomSheetAnimation };
/**
 * Animation hook for BottomSheet Content component
 * Handles animation disabled state based on local and global animation settings
 */
export declare function useBottomSheetContentAnimation(options: {
    /** Animation configuration for bottom sheet content */
    animation: AnimationDisabled | undefined;
}): {
    isAnimationDisabledValue: boolean;
};
//# sourceMappingURL=bottom-sheet.animation.d.ts.map