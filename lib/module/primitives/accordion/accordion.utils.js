"use strict";

export function toStringArray(value) {
  return Array.isArray(value) ? value : value ? [value] : [];
}
export function isItemSelected(rootValue, value) {
  return Array.isArray(rootValue) ? rootValue.includes(value) : rootValue === value;
}
//# sourceMappingURL=accordion.utils.js.map