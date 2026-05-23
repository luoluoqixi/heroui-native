"use strict";

/**
 * Resolves the animation prop into its object form.
 * Returns `undefined` when the animation is a non-object value (boolean / string).
 */
export function resolveAnimationObject(animation) {
  if (typeof animation === 'object' && animation !== null) {
    return animation;
  }
  return undefined;
}

/**
 * Determines whether all animations should be disabled based on the animation prop value.
 */
export function isAnimationDisabled(animation) {
  if (animation === false || animation === 'disabled' || animation === 'disable-all') {
    return true;
  }
  if (typeof animation === 'object' && animation !== null) {
    const {
      state
    } = animation;
    return state === false || state === 'disabled' || state === 'disable-all';
  }
  return false;
}
//# sourceMappingURL=button.utils.js.map