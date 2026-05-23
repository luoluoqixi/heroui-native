/**
 * Big thank you to https://github.com/yjose/input-otp-native for logic and inspiration
 */
import { View } from 'react-native';
import type { InputOTPContext, RootProps, RootRef } from './input-otp.types';
declare const InputOTPContext: import("react").Context<InputOTPContext | null>;
/**
 * Hook to access InputOTP context
 * @throws Error if used outside InputOTP component
 */
declare function useInputOTPContext(): InputOTPContext;
declare const Root: import("react").ForwardRefExoticComponent<RootProps & import("react").RefAttributes<RootRef>>;
declare const Group: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
declare const Slot: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    index: number;
    className?: string;
} & import("react").RefAttributes<View>>;
declare const Separator: import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & import("react").RefAttributes<View>>;
export { Group, Root, Separator, Slot, useInputOTPContext };
//# sourceMappingURL=input-otp.d.ts.map