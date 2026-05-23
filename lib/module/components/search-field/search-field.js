"use strict";

import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { useThemeColor } from "../../helpers/external/hooks/index.js";
import { CloseIcon } from "../../helpers/internal/components/index.js";
import { AnimationSettingsProvider, FormFieldProvider } from "../../helpers/internal/contexts/index.js";
import { createContext } from "../../helpers/internal/utils/index.js";
import { Button } from "../button/index.js";
import { Input } from "../input/index.js";
import { useSearchFieldRootAnimation } from "./search-field.animation.js";
import { DISPLAY_NAME } from "./search-field.constants.js";
import { searchFieldClassNames } from "./search-field.styles.js";
import { SearchIcon } from "./search-icon.js";
import { jsx as _jsx } from "react/jsx-runtime";
const [SearchFieldProvider, useSearchField] = createContext({
  name: 'SearchFieldContext',
  strict: false
});

// --------------------------------------------------

const SearchFieldRoot = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    value,
    onChange,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    animation,
    ...restProps
  } = props;
  const rootClassName = searchFieldClassNames.root({
    className
  });
  const {
    isAllAnimationsDisabled
  } = useSearchFieldRootAnimation({
    animation
  });
  const searchFieldContextValue = useMemo(() => ({
    value,
    onChange,
    isDisabled,
    isInvalid,
    isRequired
  }), [value, onChange, isDisabled, isInvalid, isRequired]);
  const formFieldContextValue = useMemo(() => ({
    isDisabled,
    isInvalid,
    isRequired,
    hasFieldPadding: false
  }), [isDisabled, isInvalid, isRequired]);
  const animationSettingsContextValue = useMemo(() => ({
    isAllAnimationsDisabled
  }), [isAllAnimationsDisabled]);
  return /*#__PURE__*/_jsx(SearchFieldProvider, {
    value: searchFieldContextValue,
    children: /*#__PURE__*/_jsx(AnimationSettingsProvider, {
      value: animationSettingsContextValue,
      children: /*#__PURE__*/_jsx(FormFieldProvider, {
        value: formFieldContextValue,
        children: /*#__PURE__*/_jsx(View, {
          ref: ref,
          className: rootClassName,
          ...restProps,
          children: children
        })
      })
    })
  });
});

// --------------------------------------------------

const SearchFieldGroup = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  const groupClassName = searchFieldClassNames.group({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: groupClassName,
    ...restProps,
    children: children
  });
});

// --------------------------------------------------

const SearchFieldSearchIcon = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    className,
    iconProps,
    ...restProps
  } = props;
  const searchIconClassName = searchFieldClassNames.searchIcon({
    className
  });
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    className: searchIconClassName,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(SearchIcon, {
      size: iconProps?.size,
      color: iconProps?.color
    })
  });
});

// --------------------------------------------------

const SearchFieldInput = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    placeholder = 'Search...',
    returnKeyType = 'search',
    accessibilityRole = 'search',
    accessibilityLabel = 'Search',
    ...restProps
  } = props;
  const searchField = useSearchField();
  const inputClassName = searchFieldClassNames.input({
    className
  });
  return /*#__PURE__*/_jsx(Input, {
    ref: ref,
    className: inputClassName,
    value: searchField?.value,
    onChangeText: searchField?.onChange,
    placeholder: placeholder,
    returnKeyType: returnKeyType,
    accessibilityRole: accessibilityRole,
    accessibilityLabel: accessibilityLabel,
    ...restProps
  });
});

// --------------------------------------------------

const SearchFieldClearButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    iconProps,
    className,
    children,
    onPress,
    ...restProps
  } = props;
  const searchField = useSearchField();
  const themeColorMuted = useThemeColor('muted');
  if (searchField?.value !== undefined && searchField.value.length === 0) {
    return null;
  }
  const handlePress = event => {
    searchField?.onChange?.('');
    if (typeof onPress === 'function') {
      onPress(event);
    }
  };
  const clearButtonClassName = searchFieldClassNames.clearButton({
    className
  });
  return /*#__PURE__*/_jsx(Button, {
    ref: ref,
    variant: "tertiary",
    size: "sm",
    isIconOnly: true,
    className: clearButtonClassName,
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: "Clear search",
    onPress: handlePress,
    ...restProps,
    children: children ?? /*#__PURE__*/_jsx(CloseIcon, {
      size: iconProps?.size ?? 14,
      color: iconProps?.color ?? themeColorMuted
    })
  });
});

// --------------------------------------------------

SearchFieldRoot.displayName = DISPLAY_NAME.SEARCH_FIELD;
SearchFieldGroup.displayName = DISPLAY_NAME.SEARCH_FIELD_GROUP;
SearchFieldSearchIcon.displayName = DISPLAY_NAME.SEARCH_FIELD_SEARCH_ICON;
SearchFieldInput.displayName = DISPLAY_NAME.SEARCH_FIELD_INPUT;
SearchFieldClearButton.displayName = DISPLAY_NAME.SEARCH_FIELD_CLEAR_BUTTON;

/**
 * Compound SearchField component with sub-components.
 *
 * @component SearchField - Root container that accepts `value`, `onChange`,
 * `isDisabled`, `isInvalid`, and `isRequired`, providing them to children via
 * SearchFieldContext. Also provides FormFieldProvider and animation settings.
 *
 * @component SearchField.Group - Flex-row container for the search icon, input,
 * and clear button.
 *
 * @component SearchField.SearchIcon - Magnifying glass icon positioned
 * absolutely on the left.
 *
 * @component SearchField.Input - Wraps the Input component with search-specific
 * defaults: "Search..." placeholder, left padding for the search icon, and
 * search a11y role. Reads `value` / `onChangeText` from SearchFieldContext.
 *
 * @component SearchField.ClearButton - Small button that clears the search
 * input. Automatically hidden when value is empty. Calls `onChange("")` from
 * context on press.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/search-field
 */
const CompoundSearchField = Object.assign(SearchFieldRoot, {
  /** Flex-row container for search icon, input, and clear button */
  Group: SearchFieldGroup,
  /** Magnifying glass search icon */
  SearchIcon: SearchFieldSearchIcon,
  /** Text input with search-specific defaults */
  Input: SearchFieldInput,
  /** Small clear button to dismiss search text */
  ClearButton: SearchFieldClearButton
});
export { useSearchField };
export default CompoundSearchField;
//# sourceMappingURL=search-field.js.map