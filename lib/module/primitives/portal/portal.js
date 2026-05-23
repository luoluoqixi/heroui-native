"use strict";

import * as React from 'react';
import { useEffect, useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const DEFAULT_PORTAL_HOST = 'HEROUI_NATIVE_DEFAULT_HOST_NAME';
const store = {
  map: new Map().set(DEFAULT_PORTAL_HOST, new Map()),
  listeners: new Set()
};

// --------------------------------------------------

function emit() {
  for (const cb of store.listeners) cb();
}
function getSnapshot() {
  return store.map;
}
function subscribe(cb) {
  store.listeners.add(cb);
  return () => {
    store.listeners.delete(cb);
  };
}
function updatePortal(hostName, name, children) {
  const next = new Map(store.map);
  const portal = next.get(hostName) ?? new Map();
  portal.set(name, children);
  next.set(hostName, portal);
  store.map = next;
  emit();
}
function removePortal(hostName, name) {
  const next = new Map(store.map);
  const portal = next.get(hostName) ?? new Map();
  portal.delete(name);
  next.set(hostName, portal);
  store.map = next;
  emit();
}

// --------------------------------------------------

export function PortalHost({
  name = DEFAULT_PORTAL_HOST
}) {
  const map = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const portalMap = map.get(name) ?? new Map();
  if (portalMap.size === 0) return null;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: Array.from(portalMap.values())
  });
}

// --------------------------------------------------

export function Portal({
  name,
  hostName = DEFAULT_PORTAL_HOST,
  children
}) {
  useEffect(() => {
    updatePortal(hostName, name, children);
  }, [hostName, name, children]);
  useEffect(() => {
    return () => {
      removePortal(hostName, name);
    };
  }, [hostName, name]);
  return null;
}

// --------------------------------------------------

const ROOT = {
  flex: 1
};

/**
 * @deprecated use `FullWindowOverlay` from `react-native-screens` instead
 * @example
import { FullWindowOverlay } from "react-native-screens"
const WindowOverlay = Platform.OS === "ios" ? FullWindowOverlay : Fragment
// Wrap the `<PortalHost/>` with `<WindowOverlay/>`
<WindowOverlay><PortalHost/></WindowOverlay>
 */
export function useModalPortalRoot() {
  const ref = React.useRef(null);
  const [offset, setSideOffSet] = React.useState(0);
  const onLayout = React.useCallback(() => {
    if (Platform.OS === 'web') return;
    ref.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
      setSideOffSet(-pageY);
    });
  }, []);
  return {
    ref,
    offset,
    onLayout,
    style: ROOT
  };
}
//# sourceMappingURL=portal.js.map