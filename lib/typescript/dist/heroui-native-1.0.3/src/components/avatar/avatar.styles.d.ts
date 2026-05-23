/**
 * Avatar fallback styles with slots
 */
declare const fallback: import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            text: string;
        };
        md: {
            text: string;
        };
        lg: {
            text: string;
        };
    };
    color: {
        default: {
            text: string;
        };
        accent: {
            text: string;
        };
        success: {
            text: string;
        };
        warning: {
            text: string;
        };
        danger: {
            text: string;
        };
    };
}, {
    container: string;
    text: string;
}, undefined, {
    size: {
        sm: {
            text: string;
        };
        md: {
            text: string;
        };
        lg: {
            text: string;
        };
    };
    color: {
        default: {
            text: string;
        };
        accent: {
            text: string;
        };
        success: {
            text: string;
        };
        warning: {
            text: string;
        };
        danger: {
            text: string;
        };
    };
}, {
    container: string;
    text: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            text: string;
        };
        md: {
            text: string;
        };
        lg: {
            text: string;
        };
    };
    color: {
        default: {
            text: string;
        };
        accent: {
            text: string;
        };
        success: {
            text: string;
        };
        warning: {
            text: string;
        };
        danger: {
            text: string;
        };
    };
}, {
    container: string;
    text: string;
}, undefined, unknown, unknown, undefined>>;
export declare const avatarClassNames: import("../../helpers/internal/types").CombinedStyles<{
    root: import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            soft: string;
        };
        size: {
            sm: string;
            md: string;
            lg: string;
        };
        color: {
            accent: string;
            default: string;
            success: string;
            warning: string;
            danger: string;
        };
    }, undefined, "items-center justify-center overflow-hidden rounded-full", {
        variant: {
            default: string;
            soft: string;
        };
        size: {
            sm: string;
            md: string;
            lg: string;
        };
        color: {
            accent: string;
            default: string;
            success: string;
            warning: string;
            danger: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            soft: string;
        };
        size: {
            sm: string;
            md: string;
            lg: string;
        };
        color: {
            accent: string;
            default: string;
            success: string;
            warning: string;
            danger: string;
        };
    }, undefined, "items-center justify-center overflow-hidden rounded-full", unknown, unknown, undefined>>;
    image: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "h-full w-full", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "h-full w-full", unknown, unknown, undefined>>;
    fallback: import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                text: string;
            };
            md: {
                text: string;
            };
            lg: {
                text: string;
            };
        };
        color: {
            default: {
                text: string;
            };
            accent: {
                text: string;
            };
            success: {
                text: string;
            };
            warning: {
                text: string;
            };
            danger: {
                text: string;
            };
        };
    }, {
        container: string;
        text: string;
    }, undefined, {
        size: {
            sm: {
                text: string;
            };
            md: {
                text: string;
            };
            lg: {
                text: string;
            };
        };
        color: {
            default: {
                text: string;
            };
            accent: {
                text: string;
            };
            success: {
                text: string;
            };
            warning: {
                text: string;
            };
            danger: {
                text: string;
            };
        };
    }, {
        container: string;
        text: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                text: string;
            };
            md: {
                text: string;
            };
            lg: {
                text: string;
            };
        };
        color: {
            default: {
                text: string;
            };
            accent: {
                text: string;
            };
            success: {
                text: string;
            };
            warning: {
                text: string;
            };
            danger: {
                text: string;
            };
        };
    }, {
        container: string;
        text: string;
    }, undefined, unknown, unknown, undefined>>;
}>;
export declare const avatarStyleSheet: {
    borderCurve: {
        borderCurve: "continuous";
    };
};
/**
 * Export slot types for type-safe classNames props
 */
export type AvatarFallbackSlots = keyof ReturnType<typeof fallback>;
export {};
//# sourceMappingURL=avatar.styles.d.ts.map