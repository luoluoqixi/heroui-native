"use strict";

import { createContext } from "../../helpers/internal/utils/index.js";
/**
 * Avatar context provider and hook
 * Provides size, color, and animation state to child components
 */
export const [AvatarProvider, useInnerAvatarContext] = createContext({
  name: 'AvatarContext'
});
//# sourceMappingURL=avatar.context.js.map