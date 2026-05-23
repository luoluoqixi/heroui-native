import type { ButtonRootProps } from './button.types';
/**
 * Resolves the animation prop into its object form.
 * Returns `undefined` when the animation is a non-object value (boolean / string).
 */
export declare function resolveAnimationObject(animation: ButtonRootProps['animation']): Record<string, unknown> | undefined;
/**
 * Determines whether all animations should be disabled based on the animation prop value.
 */
export declare function isAnimationDisabled(animation: ButtonRootProps['animation']): boolean;
//# sourceMappingURL=button.utils.d.ts.map