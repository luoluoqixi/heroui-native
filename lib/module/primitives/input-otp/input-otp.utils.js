"use strict";

/**
 * Regex pattern for digits only
 */
export const REGEXP_ONLY_DIGITS = '^\\d+$';

/**
 * Regex pattern for letters only
 */
export const REGEXP_ONLY_CHARS = '^[a-zA-Z]+$';

/**
 * Regex pattern for digits and letters
 */
export const REGEXP_ONLY_DIGITS_AND_CHARS = '^[a-zA-Z0-9]+$';

/**
 * Default paste transformer that extracts OTP from pasted text
 * Matches exactly maxLength digits, not preceded or followed by another digit
 *
 * @param maxLength - Maximum length of the OTP
 * @returns Function that transforms pasted text to extract OTP
 */
export function defaultPasteTransformer(maxLength) {
  return pasted => {
    // Match exactly maxLength digits, not preceded or followed by another digit
    const otpRegex = new RegExp(`(?<!\\d)(\\d{${maxLength}})(?!\\d)`);
    const match = pasted.match(otpRegex);
    return match?.[1] ?? '';
  };
}
//# sourceMappingURL=input-otp.utils.js.map