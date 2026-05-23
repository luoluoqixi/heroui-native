"use strict";

import { useImperativeHandle, useRef } from 'react';
export function useAugmentedRef({
  ref,
  methods,
  deps = []
}) {
  const augmentedRef = useRef(null);
  useImperativeHandle(ref, () => {
    if (typeof augmentedRef === 'function' || !augmentedRef?.current) {
      return {};
    }
    return {
      ...augmentedRef.current,
      ...methods
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  return augmentedRef;
}
//# sourceMappingURL=use-augmented-ref.js.map