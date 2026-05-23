import { type BlurEvent, type FocusEvent } from 'react-native';
/**
 * Return type for the bottom-sheet-aware handlers hook
 */
interface UseBottomSheetAwareHandlersReturn {
    /** Focus handler that notifies the bottom sheet about the keyboard target */
    onFocus: (e: FocusEvent) => void;
    /** Blur handler that conditionally clears the keyboard target in the bottom sheet */
    onBlur: (e: BlurEvent) => void;
}
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
export declare function useBottomSheetAwareHandlers(): UseBottomSheetAwareHandlersReturn;
export {};
//# sourceMappingURL=use-bottom-sheet-aware-handlers.d.ts.map