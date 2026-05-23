declare const output: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            text?: import("tailwind-merge").ClassNameValue;
            container?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-merge").ClassNameValue | {
            text?: import("tailwind-merge").ClassNameValue;
            container?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    container: string;
    text: string;
}, undefined, {
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            text?: import("tailwind-merge").ClassNameValue;
            container?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    container: string;
    text: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    container: string;
    text: string;
}, undefined, unknown, unknown, undefined>>;
declare const thumb: import("tailwind-variants").TVReturnType<{
    orientation: {
        horizontal: {
            thumbContainer: string;
        };
        vertical: {
            thumbContainer: string;
        };
    };
}, {
    thumbContainer: string;
    thumbKnob: string;
}, undefined, {
    orientation: {
        horizontal: {
            thumbContainer: string;
        };
        vertical: {
            thumbContainer: string;
        };
    };
}, {
    thumbContainer: string;
    thumbKnob: string;
}, import("tailwind-variants").TVReturnType<{
    orientation: {
        horizontal: {
            thumbContainer: string;
        };
        vertical: {
            thumbContainer: string;
        };
    };
}, {
    thumbContainer: string;
    thumbKnob: string;
}, undefined, unknown, unknown, undefined>>;
declare const sliderClassNames: import("../../helpers/internal/types").CombinedStyles<{
    root: import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
        isDisabled: {
            true: string;
        };
    }, undefined, "gap-2", {
        orientation: {
            horizontal: string;
            vertical: string;
        };
        isDisabled: {
            true: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
        isDisabled: {
            true: string;
        };
    }, undefined, "gap-2", unknown, unknown, undefined>>;
    output: import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                text?: import("tailwind-merge").ClassNameValue;
                container?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-merge").ClassNameValue | {
                text?: import("tailwind-merge").ClassNameValue;
                container?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        container: string;
        text: string;
    }, undefined, {
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                text?: import("tailwind-merge").ClassNameValue;
                container?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        container: string;
        text: string;
    }, import("tailwind-variants").TVReturnType<unknown, {
        container: string;
        text: string;
    }, undefined, unknown, unknown, undefined>>;
    track: import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, "rounded-xl bg-default", {
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, "rounded-xl bg-default", unknown, unknown, undefined>>;
    fill: import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, "absolute rounded-xl bg-accent", {
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: string;
            vertical: string;
        };
    }, undefined, "absolute rounded-xl bg-accent", unknown, unknown, undefined>>;
    thumb: import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: {
                thumbContainer: string;
            };
            vertical: {
                thumbContainer: string;
            };
        };
    }, {
        thumbContainer: string;
        thumbKnob: string;
    }, undefined, {
        orientation: {
            horizontal: {
                thumbContainer: string;
            };
            vertical: {
                thumbContainer: string;
            };
        };
    }, {
        thumbContainer: string;
        thumbKnob: string;
    }, import("tailwind-variants").TVReturnType<{
        orientation: {
            horizontal: {
                thumbContainer: string;
            };
            vertical: {
                thumbContainer: string;
            };
        };
    }, {
        thumbContainer: string;
        thumbKnob: string;
    }, undefined, unknown, unknown, undefined>>;
}>;
export declare const styleSheet: {
    borderCurve: {
        borderCurve: "continuous";
    };
};
export type OutputSlots = keyof ReturnType<typeof output>;
export type ThumbSlots = keyof ReturnType<typeof thumb>;
export { sliderClassNames };
export default sliderClassNames;
//# sourceMappingURL=slider.styles.d.ts.map