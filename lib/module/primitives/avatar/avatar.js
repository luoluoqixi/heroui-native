"use strict";

import * as React from 'react';
import { createContext, forwardRef, useEffect, useMemo, useState } from 'react';
import { Image as RNImage, View } from 'react-native';
import * as Slot from "../slot/index.js";
import { isSameSource, isValidSource } from "./avatar.utils.js";
import { jsx as _jsx } from "react/jsx-runtime";
const RootContext = /*#__PURE__*/createContext(null);
export function useRootContext() {
  const context = React.useContext(RootContext);
  if (!context) {
    throw new Error('Avatar compound components cannot be rendered outside the Avatar component');
  }
  return context;
}

// --------------------------------------------------

const Root = /*#__PURE__*/forwardRef(({
  asChild,
  alt = 'Avatar',
  ...viewProps
}, ref) => {
  const [status, setStatus] = useState('error');
  const Component = asChild ? Slot.View : View;
  const value = useMemo(() => ({
    alt,
    status,
    setStatus
  }), [alt, status, setStatus]);
  return /*#__PURE__*/_jsx(RootContext.Provider, {
    value: value,
    children: /*#__PURE__*/_jsx(Component, {
      ref: ref,
      ...viewProps
    })
  });
});
Root.displayName = 'HeroUINative.Primitive.Avatar.Root';

// --------------------------------------------------

const Image = /*#__PURE__*/forwardRef(({
  asChild,
  onLoad: onLoadProps,
  onError: onErrorProps,
  onLoadingStatusChange,
  ...props
}, ref) => {
  const {
    alt,
    setStatus,
    status
  } = useRootContext();

  // Use ref to track the previous source value for comparison
  const previousSourceRef = React.useRef(undefined);
  useEffect(() => {
    const currentSource = props?.source;
    const previousSource = previousSourceRef.current;

    // Only reset status if the source actually changed (not just reference)
    const sourceChanged = !isSameSource(currentSource, previousSource);
    if (sourceChanged) {
      // Update the ref to track the new source
      previousSourceRef.current = currentSource;
      if (isValidSource(currentSource)) {
        setStatus('loading');
      } else {
        setStatus('error');
      }
    }

    // Cleanup: only reset to error if component unmounts or source becomes invalid
    return () => {
      // Only reset if source is no longer valid or component is unmounting
      if (!isValidSource(currentSource)) {
        setStatus('error');
      }
    };
  }, [props?.source, setStatus]);
  const onLoad = React.useCallback(e => {
    setStatus('loaded');
    onLoadingStatusChange?.('loaded');
    onLoadProps?.(e);
  }, [onLoadProps, setStatus, onLoadingStatusChange]);
  const onError = React.useCallback(e => {
    setStatus('error');
    onLoadingStatusChange?.('error');
    onErrorProps?.(e);
  }, [onErrorProps, setStatus, onLoadingStatusChange]);
  const Component = asChild ? Slot.Image : RNImage;
  if (status === 'error') {
    return null;
  }
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    alt: alt,
    onLoad: onLoad,
    onError: onError,
    ...props
  });
});
Image.displayName = 'HeroUINative.Primitive.Avatar.Image';

// --------------------------------------------------

const Fallback = /*#__PURE__*/forwardRef(({
  asChild,
  ...props
}, ref) => {
  const {
    alt,
    status
  } = useRootContext();
  if (status !== 'error') {
    return null;
  }
  const Component = asChild ? Slot.View : View;
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    role: 'img',
    "aria-label": alt,
    ...props
  });
});
Fallback.displayName = 'HeroUINative.Primitive.Avatar.Fallback';

// --------------------------------------------------

export { Fallback, Image, Root };
//# sourceMappingURL=avatar.js.map