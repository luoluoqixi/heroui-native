/**
 * Parameters for the useControllableState hook
 */
type UseControllableStateParams<T> = {
    /** The controlled value prop */
    prop?: T | undefined;
    /** The default value for uncontrolled mode */
    defaultProp?: T | undefined;
    /** Callback fired when the value changes */
    onChange?: (state: T) => void;
};
/**
 * A hook that supports both controlled and uncontrolled state.
 * When a value prop is provided, the component is controlled.
 * When no value prop is provided, the component manages its own state.
 *
 * @param params - Configuration object with prop, defaultProp, and onChange
 * @returns A tuple of [value, setValue] similar to useState
 */
declare function useControllableState<T>({ prop, defaultProp, onChange, }: UseControllableStateParams<T>): readonly [T | undefined, import("react").Dispatch<import("react").SetStateAction<T | undefined>>];
export { useControllableState };
//# sourceMappingURL=use-controllable-state.d.ts.map