/**
 * Context value for global animation settings
 */
export interface AnimationSettingsContextValue {
    /**
     * Whether all animations should be disabled (cascading from parent)
     */
    isAllAnimationsDisabled: boolean;
}
declare const AnimationSettingsProvider: import("react").Provider<AnimationSettingsContextValue>, useAnimationSettings: () => AnimationSettingsContextValue;
export { AnimationSettingsProvider, useAnimationSettings };
//# sourceMappingURL=animation-settings-context.d.ts.map