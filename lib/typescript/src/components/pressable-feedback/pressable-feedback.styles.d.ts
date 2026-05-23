/**
 * PressableFeedback ripple style definition
 *
 * Contains two slots:
 * - `container`: Outer container (`absolute inset-0`) that handles touch events and positioning - styles can be fully customized
 * - `ripple`: Inner ripple element (`absolute top-0 left-0 rounded-full`) that contains animated styles
 *
 * @note ANIMATED PROPERTIES (cannot be set via className on the `ripple` slot only):
 * The following properties on the `ripple` slot are animated and cannot be overridden using Tailwind classes:
 * - `width`, `height`, `borderRadius` - Animated for ripple circle size calculations (based on container diagonal)
 * - `opacity` - Animated for ripple visibility transitions (unpressed: 0, expanding: 0.1, fading: 0)
 * - `transform` (specifically `translateX`, `translateY`, `scale`) - Animated for ripple position and expansion from touch point
 *
 * The `container` slot styles can be fully customized via className or `classNames.container`.
 *
 * To customize the animated properties on the `ripple` slot, use the `animation` prop on `PressableFeedback.Ripple`:
 * ```tsx
 * <PressableFeedback.Ripple
 *   animation={{
 *     opacity: { value: [0, 0.1, 0], timingConfig: { duration: 400 } },
 *     scale: { value: [0, 1, 1] },
 *     backgroundColor: { value: '#3f3f46' }
 *   }}
 * />
 * ```
 *
 * Touch handlers (`onTouchStart`, `onTouchEnd`, `onTouchCancel`) can be customized via props and will be called alongside animation handlers.
 *
 * To completely disable animated styles and apply your own via className or style prop,
 * set `isAnimatedStyleActive={false}` on `PressableFeedback.Ripple`.
 */
declare const ripple: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            container?: import("tailwind-merge").ClassNameValue;
            ripple?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-merge").ClassNameValue | {
            container?: import("tailwind-merge").ClassNameValue;
            ripple?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    container: string;
    ripple: string;
}, undefined, {
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            container?: import("tailwind-merge").ClassNameValue;
            ripple?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    container: string;
    ripple: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    container: string;
    ripple: string;
}, undefined, unknown, unknown, undefined>>;
export declare const pressableFeedbackClassNames: import("../../helpers/internal/types").CombinedStyles<{
    root: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "overflow-hidden", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "overflow-hidden", unknown, unknown, undefined>>;
    highlight: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "absolute inset-0", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "absolute inset-0", unknown, unknown, undefined>>;
    ripple: import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                container?: import("tailwind-merge").ClassNameValue;
                ripple?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-merge").ClassNameValue | {
                container?: import("tailwind-merge").ClassNameValue;
                ripple?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        container: string;
        ripple: string;
    }, undefined, {
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                container?: import("tailwind-merge").ClassNameValue;
                ripple?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        container: string;
        ripple: string;
    }, import("tailwind-variants").TVReturnType<unknown, {
        container: string;
        ripple: string;
    }, undefined, unknown, unknown, undefined>>;
}>;
export declare const pressableFeedbackStyleSheet: {
    root: {
        borderCurve: "continuous";
    };
};
export type RippleSlots = keyof ReturnType<typeof ripple>;
export {};
//# sourceMappingURL=pressable-feedback.styles.d.ts.map