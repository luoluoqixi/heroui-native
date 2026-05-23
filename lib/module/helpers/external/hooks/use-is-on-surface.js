"use strict";

import { useSurface } from "../../../components/surface/index.js";
export const useIsOnSurface = () => {
  const surfaceContext = useSurface();
  return surfaceContext?.variant && surfaceContext.variant !== 'transparent' ? true : false;
};
//# sourceMappingURL=use-is-on-surface.js.map