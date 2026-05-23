"use strict";

import { createContext } from "../utils/index.js";

/**
 * Context value for global animation settings
 */

const [AnimationSettingsProvider, useAnimationSettings] = createContext({
  name: 'AnimationSettingsContext',
  strict: false
});
export { AnimationSettingsProvider, useAnimationSettings };
//# sourceMappingURL=animation-settings-context.js.map