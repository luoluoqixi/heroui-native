"use strict";

import { tv } from 'tailwind-variants';
import { combineStyles } from "../../helpers/internal/utils/index.js";
const root = tv({
  base: 'h-8'
});
const closeButtonClassNames = combineStyles({
  root
});
export { closeButtonClassNames };
export default closeButtonClassNames;
//# sourceMappingURL=close-button.styles.js.map