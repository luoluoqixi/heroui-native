import type { BottomSheetProps } from '@gorhom/bottom-sheet';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import type { BaseBottomSheetContentProps } from '../types/bottom-sheet';
/**
 * Props for the reusable BottomSheetContent component
 */
export interface BottomSheetContentProps extends BaseBottomSheetContentProps, Partial<BottomSheetProps> {
    /**
     * Whether the bottom sheet is open
     */
    isOpen: boolean;
    /**
     * Animation progress shared value (0=idle, 1=open, 2=close)
     */
    progress: SharedValue<number>;
    /**
     * Whether the bottom sheet is dragging
     */
    isDragging: SharedValue<boolean>;
    /**
     * Callback when the bottom sheet open state changes
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Initial index of the bottom sheet
     */
    index?: number;
    /**
     * Additional style for the background
     */
    backgroundStyle?: StyleProp<ViewStyle>;
}
/**
 * Reusable BottomSheetContent component
 *
 * This component provides a reusable bottom sheet content wrapper used across
 * Popover, Select, and other components when using bottom-sheet presentation.
 * It handles animation coordination, styling, and gesture handling.
 *
 * @example
 * ```tsx
 * <BottomSheetContent
 *   isOpen={isOpen}
 *   progress={progress}
 *   isDragging={isDragging}
 *   onOpenChange={onOpenChange}
 *   index={0}
 * >
 *   {children}
 * </BottomSheetContent>
 * ```
 */
export declare const BottomSheetContent: import("react").ForwardRefExoticComponent<BottomSheetContentProps & import("react").RefAttributes<import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
//# sourceMappingURL=bottom-sheet-content.d.ts.map