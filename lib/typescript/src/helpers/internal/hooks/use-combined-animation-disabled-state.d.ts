import type { AnimationRoot } from '../types/animation';
/**
 * Hook to combine global, parent, and own animation disabled states
 *
 * @description
 * This hook combines three sources of animation disabled state:
 * 1. Global state from GlobalAnimationSettingsProvider
 * 2. Parent state from AnimationSettingsContext (component tree cascading)
 * 3. Own state from the component's animation prop
 *
 * Priority: Global > Parent > Own (global wins if enabled)
 *
 * @param animation - Root animation configuration for the component
 * @returns Combined isAllAnimationsDisabled value
 *
 * @example
 * ```tsx
 * const isAllAnimationsDisabled = useCombinedAnimationDisabledState(animation);
 * ```
 */
export declare function useCombinedAnimationDisabledState<TConfig extends Record<string, any>>(animation: AnimationRoot<TConfig> | undefined): boolean;
//# sourceMappingURL=use-combined-animation-disabled-state.d.ts.map