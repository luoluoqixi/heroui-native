"use strict";

import * as React from 'react';
/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext(options = {}) {
  const {
    strict = true,
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name
  } = options;
  const Context = /*#__PURE__*/React.createContext(undefined);
  Context.displayName = name;
  function useContext() {
    const context = React.useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext, Context];
}
//# sourceMappingURL=create-context.js.map