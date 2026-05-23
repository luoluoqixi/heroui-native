"use strict";

import { tv } from 'tailwind-variants';
import { combineStyles } from "../../helpers/internal/utils/index.js";
const root = tv({
  base: 'gap-3'
});
const item = tv({
  base: 'flex-row items-center justify-between gap-3'
});
export const radioGroupClassNames = combineStyles({
  root,
  item
});
//# sourceMappingURL=radio-group.styles.js.map