import * as InputOTPPrimitives from '../../primitives/input-otp';
import type { InputOTPGroupProps, InputOTPRootProps, InputOTPSeparatorProps, InputOTPSlotCaretProps, InputOTPSlotContextValue, InputOTPSlotPlaceholderProps, InputOTPSlotProps, InputOTPSlotValueProps } from './input-otp.types';
declare const useInputOTPSlot: () => InputOTPSlotContextValue;
declare const useInputOTP: typeof InputOTPPrimitives.useInputOTPContext;
declare const REGEXP_ONLY_CHARS = "^[a-zA-Z]+$";
declare const REGEXP_ONLY_DIGITS = "^\\d+$";
declare const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]+$";
/**
 * Compound InputOTP component with sub-components
 *
 * @component InputOTP - Main container for OTP input. Manages the input state,
 * handles text changes, and provides context to child components.
 *
 * @component InputOTP.Group - Container for grouping multiple slots together.
 * Use this to visually group related slots (e.g., groups of 3 digits).
 *
 * @component InputOTP.Slot - Individual slot that displays a single character
 * or placeholder. Each slot must have a unique index matching its position
 * in the OTP sequence.
 *
 * @component InputOTP.SlotPlaceholder - Text component that displays the
 * placeholder character for a slot when it's empty. Used by default in Slot
 * if no children provided.
 *
 * @component InputOTP.SlotValue - Text component that displays the actual
 * character value for a slot with animations. Used by default in Slot
 * if no children provided.
 *
 * @component InputOTP.SlotCaret - Animated caret indicator that shows the
 * current input position. Place this inside a Slot to show where the user
 * is currently typing.
 *
 * @component InputOTP.Separator - Visual separator between groups of slots.
 * Use this to visually separate different groups of OTP digits.
 *
 * Props flow from InputOTP to sub-components via context (value, isDisabled,
 * isInvalid, slots). The component handles focus management, text input,
 * and validation automatically.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/input-otp
 */
declare const InputOTP: import("react").ForwardRefExoticComponent<InputOTPRootProps & import("react").RefAttributes<InputOTPPrimitives.RootRef>> & {
    /** @optional Container for grouping multiple slots together */
    Group: import("react").ForwardRefExoticComponent<InputOTPGroupProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Individual slot that displays a single character or placeholder */
    Slot: import("react").ForwardRefExoticComponent<InputOTPSlotProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Text component that displays the placeholder character for a slot */
    SlotPlaceholder: import("react").ForwardRefExoticComponent<InputOTPSlotPlaceholderProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Text component that displays the actual character value for a slot */
    SlotValue: import("react").ForwardRefExoticComponent<InputOTPSlotValueProps & import("react").RefAttributes<import("react-native").Text>>;
    /** @optional Animated caret indicator for the current input position */
    SlotCaret: import("react").ForwardRefExoticComponent<InputOTPSlotCaretProps & import("react").RefAttributes<import("react-native").View>>;
    /** @optional Visual separator between groups of slots */
    Separator: import("react").ForwardRefExoticComponent<InputOTPSeparatorProps & import("react").RefAttributes<import("react-native").View>>;
};
export default InputOTP;
export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS, useInputOTP, useInputOTPSlot, };
//# sourceMappingURL=input-otp.d.ts.map