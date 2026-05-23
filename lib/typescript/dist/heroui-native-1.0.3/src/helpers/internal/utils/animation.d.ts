import type { Animation, AnimationRoot, AnimationValue } from '../types/animation';
/**
 * Check if the entire animation is disabled
 * @param animation - Animation configuration
 * @returns true if animation is disabled
 */
export declare function isAnimationDisabled<TConfig extends Record<string, any>>(animation: Animation<TConfig> | AnimationRoot<TConfig> | undefined): boolean;
/**
 * Check if root animation should cascade disable to all children
 * @param animation - Root animation configuration
 * @returns true if all animations should be disabled (including children)
 */
export declare function shouldDisableAll<TConfig extends Record<string, any>>(animation: AnimationRoot<TConfig> | undefined): boolean;
/**
 * Get animation state including config and disabled status
 * @param animation - Animation configuration
 * @returns Object with animationConfig and isAnimationDisabled
 */
export declare function getAnimationState<TConfig extends Record<string, any>>(animation: Animation<TConfig> | undefined): {
    animationConfig: TConfig | undefined;
    isAnimationDisabled: boolean;
};
/**
 * Get root animation state including config, disabled status, and cascade flag
 * @param animation - Root animation configuration
 * @returns Object with animationConfig, isAnimationDisabled, and isAllAnimationsDisabled
 */
export declare function getRootAnimationState<TConfig extends Record<string, any>>(animation: AnimationRoot<TConfig> | undefined): {
    animationConfig: TConfig | undefined;
    isAnimationDisabled: boolean;
    isAllAnimationsDisabled: boolean;
};
/**
 * Get animation value property or return default
 * Extracts a property from the animation value config object
 *
 * @param options - Object containing animationValue, property, and defaultValue
 * @param options.animationValue - The animation value configuration
 * @param options.property - Property name to extract
 * @param options.defaultValue - Default value if property is not found
 * @returns The property value or default (never undefined)
 *
 * @example
 * const scaleValue = getAnimationValueProperty({
 *   animationValue: animation?.scale,
 *   property: 'value',
 *   defaultValue: 0.95
 * });
 */
export declare function getAnimationValueProperty<TConfig extends Record<string, any>, K extends keyof TConfig, D extends NonNullable<TConfig[K]>>(options: {
    animationValue: AnimationValue<TConfig> | undefined;
    property: K;
    defaultValue: D;
}): NonNullable<TConfig[K]>;
/**
 * Get animation value merged config or return default
 * Merges the animation value config with defaults, useful when you need multiple properties
 *
 * @param options - Object containing animationValue, property, and defaultValue
 * @param options.animationValue - The animation value configuration
 * @param options.property - Property name to extract from the config
 * @param options.defaultValue - Default configuration object
 * @returns The merged config object or default
 *
 * @example
 * const scaleConfig = getAnimationValueMergedConfig({
 *   animationValue: animation?.scale,
 *   property: 'timingConfig',
 *   defaultValue: { duration: 150 }
 * });
 */
export declare function getAnimationValueMergedConfig<TConfig extends Record<string, any>, K extends keyof TConfig>(options: {
    animationValue: AnimationValue<TConfig> | undefined;
    property: K;
    defaultValue: TConfig[K];
}): TConfig[K];
/**
 * Determine if animations should be disabled based on disabled flags
 * Priority: isAllAnimationsDisabled > isAnimationDisabled
 *
 * @param options - Object containing isAnimationDisabled and isAllAnimationsDisabled
 * @param options.isAnimationDisabled - Whether animation is explicitly disabled
 * @param options.isAllAnimationsDisabled - Whether all animations should be disabled (cascading from root/global)
 * @returns true if animations should be disabled, false otherwise
 *
 * @example
 * const isDisabled = getIsAnimationDisabledValue({
 *   isAnimationDisabled: false,
 *   isAllAnimationsDisabled: true
 * });
 * // Returns: true (all animations disabled takes priority)
 */
export declare function getIsAnimationDisabledValue(options: {
    isAnimationDisabled: boolean;
    isAllAnimationsDisabled: boolean | undefined;
}): boolean;
/**
 * Combine global, parent, and own animation disabled states
 * Priority: Global > Parent > Own (global wins if enabled)
 *
 * @param options - Object containing globalIsAllAnimationsDisabled, parentIsAllAnimationsDisabled, and ownIsAllAnimationsDisabled
 * @param options.globalIsAllAnimationsDisabled - Whether global provider has disable-all (from GlobalAnimationSettingsProvider)
 * @param options.parentIsAllAnimationsDisabled - Whether parent context has disable-all (from AnimationSettingsContext)
 * @param options.ownIsAllAnimationsDisabled - Whether own animation prop has disable-all
 * @returns Combined isAllAnimationsDisabled value (global || parent || own)
 *
 * @example
 * const combined = getCombinedAnimationDisabledState({
 *   globalIsAllAnimationsDisabled: true,
 *   parentIsAllAnimationsDisabled: false,
 *   ownIsAllAnimationsDisabled: false
 * });
 * // Returns: true (global wins)
 */
export declare function getCombinedAnimationDisabledState(options: {
    globalIsAllAnimationsDisabled?: boolean;
    parentIsAllAnimationsDisabled: boolean | undefined;
    ownIsAllAnimationsDisabled: boolean;
}): boolean;
//# sourceMappingURL=animation.d.ts.map