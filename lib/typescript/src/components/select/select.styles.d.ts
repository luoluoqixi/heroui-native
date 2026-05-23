/**
 * Dialog content style definition
 */
declare const dialogContent: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            content?: import("tailwind-merge").ClassNameValue;
            wrapper?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-merge").ClassNameValue | {
            content?: import("tailwind-merge").ClassNameValue;
            wrapper?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    wrapper: string;
    content: string;
}, undefined, {
    [key: string]: {
        [key: string]: import("tailwind-merge").ClassNameValue | {
            content?: import("tailwind-merge").ClassNameValue;
            wrapper?: import("tailwind-merge").ClassNameValue;
        };
    };
} | {}, {
    wrapper: string;
    content: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    wrapper: string;
    content: string;
}, undefined, unknown, unknown, undefined>>;
export declare const selectClassNames: import("../../helpers/internal/types").CombinedStyles<{
    trigger: import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            unstyled: string;
        };
        isDisabled: {
            true: string;
            false: string;
        };
    }, undefined, "", {
        variant: {
            default: string;
            unstyled: string;
        };
        isDisabled: {
            true: string;
            false: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            unstyled: string;
        };
        isDisabled: {
            true: string;
            false: string;
        };
    }, undefined, "", unknown, unknown, undefined>>;
    portal: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "absolute inset-0", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "absolute inset-0", unknown, unknown, undefined>>;
    overlay: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "absolute inset-0", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "absolute inset-0", unknown, unknown, undefined>>;
    content: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "bg-overlay p-3 rounded-3xl shadow-overlay", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "bg-overlay p-3 rounded-3xl shadow-overlay", unknown, unknown, undefined>>;
    dialogContent: import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                content?: import("tailwind-merge").ClassNameValue;
                wrapper?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-merge").ClassNameValue | {
                content?: import("tailwind-merge").ClassNameValue;
                wrapper?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        wrapper: string;
        content: string;
    }, undefined, {
        [key: string]: {
            [key: string]: import("tailwind-merge").ClassNameValue | {
                content?: import("tailwind-merge").ClassNameValue;
                wrapper?: import("tailwind-merge").ClassNameValue;
            };
        };
    } | {}, {
        wrapper: string;
        content: string;
    }, import("tailwind-variants").TVReturnType<unknown, {
        wrapper: string;
        content: string;
    }, undefined, unknown, unknown, undefined>>;
    close: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "", unknown, unknown, undefined>>;
    value: import("tailwind-variants").TVReturnType<{
        isSelected: {
            true: string;
            false: string;
        };
    }, undefined, "flex-1 text-base", {
        isSelected: {
            true: string;
            false: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        isSelected: {
            true: string;
            false: string;
        };
    }, undefined, "flex-1 text-base", unknown, unknown, undefined>>;
    item: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "flex-row items-center gap-2 px-2 py-3", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "flex-row items-center gap-2 px-2 py-3", unknown, unknown, undefined>>;
    itemLabel: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "flex-1 text-base text-foreground font-medium", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "flex-1 text-base text-foreground font-medium", unknown, unknown, undefined>>;
    itemDescription: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "text-sm/snug text-muted", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "text-sm/snug text-muted", unknown, unknown, undefined>>;
    itemIndicator: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "size-5 items-center justify-center", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "size-5 items-center justify-center", unknown, unknown, undefined>>;
    listLabel: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "text-sm text-muted font-medium px-2 py-1.5", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "text-sm text-muted font-medium px-2 py-1.5", unknown, unknown, undefined>>;
    triggerIndicator: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "items-center justify-center", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "items-center justify-center", unknown, unknown, undefined>>;
}>;
export declare const selectStyleSheet: {
    contentContainer: {
        borderCurve: "continuous";
    };
};
export type DialogContentFallbackSlots = keyof ReturnType<typeof dialogContent>;
export {};
//# sourceMappingURL=select.styles.d.ts.map