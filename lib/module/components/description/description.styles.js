"use strict";

import { tv } from 'tailwind-variants';
import { combineStyles } from "../../helpers/internal/utils/index.js";
const root = tv({
  base: 'text-sm text-muted',
  variants: {
    isInsideField: {
      true: 'px-1.5'
    },
    isInvalid: {
      true: 'text-danger'
    },
    isDisabled: {
      true: 'opacity-disabled',
      false: ''
    }
  },
  defaultVariants: {
    isDisabled: false
  }
});
export const descriptionClassNames = combineStyles({
  root
});
//# sourceMappingURL=description.styles.js.map