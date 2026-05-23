"use strict";

// --------------------------------------------------

export function isTextChildren(children) {
  return Array.isArray(children) ? children.every(child => typeof child === 'string') : typeof children === 'string';
}

// --------------------------------------------------

export function composeRefs(...refs) {
  return node => refs.forEach(ref => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref != null) {
      ref.current = node;
    }
  });
}

// --------------------------------------------------

export function mergeProps(slotProps, childProps) {
  // all child props should override
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      // if the handler exists on both, we compose them
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      }
      // but if it exists only on the slot, we use only this one
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // if it's `style`, we merge them
    else if (propName === 'style') {
      overrideProps[propName] = combineStyles(slotPropValue, childPropValue);
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
    }
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// --------------------------------------------------

/**
 * Combines slot and child styles into a style array.
 *
 * Returns a style array instead of flattening via StyleSheet.flatten,
 * because flatten deep-copies style objects into plain objects, which
 * destroys Reanimated animated style bindings (useAnimatedStyle / SharedValues).
 * React Native natively handles nested style arrays, so an array is safe here.
 */
function combineStyles(slotStyle, childValue) {
  if (typeof slotStyle === 'function' && typeof childValue === 'function') {
    return state => {
      return [slotStyle(state), childValue(state)];
    };
  }
  if (typeof slotStyle === 'function') {
    return state => {
      return childValue ? [slotStyle(state), childValue] : slotStyle(state);
    };
  }
  if (typeof childValue === 'function') {
    return state => {
      return slotStyle ? [slotStyle, childValue(state)] : childValue(state);
    };
  }
  if (!slotStyle) return childValue;
  if (!childValue) return slotStyle;
  return [slotStyle, childValue];
}
//# sourceMappingURL=utils.js.map