"use strict";

import { tv } from 'tailwind-variants';
import { combineStyles } from "../../helpers/internal/utils/index.js";
const root = tv({
  slots: {
    container: '',
    text: 'text-sm text-danger'
  },
  variants: {
    isInsideField: {
      true: {
        container: 'px-1.5',
        text: ''
      }
    }
  }
});
export const fieldErrorClassNames = combineStyles({
  root
});
//# sourceMappingURL=field-error.styles.js.map