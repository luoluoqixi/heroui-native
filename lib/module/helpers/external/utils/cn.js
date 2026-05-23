"use strict";

import { cnMerge } from 'tailwind-variants';
export function cn(...args) {
  return cnMerge(args)({
    twMerge: true,
    twMergeConfig: {
      classGroups: {
        opacity: [{
          opacity: ['disabled']
        }]
      }
    }
  });
}
//# sourceMappingURL=cn.js.map