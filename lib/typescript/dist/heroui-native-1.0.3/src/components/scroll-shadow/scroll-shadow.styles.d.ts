export declare const scrollShadowClassNames: import("../../helpers/internal/types").CombinedStyles<{
    root: import("tailwind-variants").TVReturnType<{} | {} | {}, undefined, "", {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "", unknown, unknown, undefined>>;
}>;
/**
 * Native styles for properties not supported by NativeWind
 */
export declare const scrollShadowStyleSheet: {
    topShadow: {
        position: "absolute";
        top: number;
        left: number;
        right: number;
        zIndex: number;
        pointerEvents: "none";
    };
    bottomShadow: {
        position: "absolute";
        bottom: number;
        left: number;
        right: number;
        zIndex: number;
        pointerEvents: "none";
    };
    leftShadow: {
        position: "absolute";
        top: number;
        bottom: number;
        left: number;
        zIndex: number;
        pointerEvents: "none";
    };
    rightShadow: {
        position: "absolute";
        top: number;
        bottom: number;
        right: number;
        zIndex: number;
        pointerEvents: "none";
    };
};
//# sourceMappingURL=scroll-shadow.styles.d.ts.map