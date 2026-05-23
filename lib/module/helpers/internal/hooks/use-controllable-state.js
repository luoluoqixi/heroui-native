"use strict";

// This project uses code from WorkOS/Radix Primitives.
// The code is licensed under the MIT License.
// https://github.com/radix-ui/primitives/tree/main

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/**
 * Parameters for the useControllableState hook
 */

/**
 * Function type for state setter callbacks
 */

/**
 * A hook that supports both controlled and uncontrolled state.
 * When a value prop is provided, the component is controlled.
 * When no value prop is provided, the component manages its own state.
 *
 * @param params - Configuration object with prop, defaultProp, and onChange
 * @returns A tuple of [value, setValue] similar to useState
 */
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {}
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  /**
   * When the component transitions from controlled (prop !== undefined)
   * back to uncontrolled (prop === undefined), the internal uncontrolled
   * state may hold a stale value from a previous selection. Reset it so
   * the component correctly reflects the "no value" state.
   */
  const prevPropRef = useRef(prop);
  useLayoutEffect(() => {
    const wasControlled = prevPropRef.current !== undefined;
    if (wasControlled && prop === undefined) {
      setUncontrolledProp(undefined);
    }
    prevPropRef.current = prop;
  }, [prop, setUncontrolledProp]);
  const setValue = useCallback(nextValue => {
    if (isControlled) {
      const setter = nextValue;
      const val = typeof nextValue === 'function' ? setter(prop) : nextValue;
      if (val !== prop) handleChange(val);
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, handleChange]);
  return [value, setValue];
}

/**
 * Internal hook for managing uncontrolled state with change callbacks
 */
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);
  const handleChange = useCallbackRef(onChange);
  useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
function useCallbackRef(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
export { useControllableState };
//# sourceMappingURL=use-controllable-state.js.map