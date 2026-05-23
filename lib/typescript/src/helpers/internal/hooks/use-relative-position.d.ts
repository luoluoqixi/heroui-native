import { type LayoutRectangle, type ScaledSize } from 'react-native';
import type { Insets } from '../types';
type UseRelativePositionArgs = Omit<GetContentStyleArgs, 'triggerPosition' | 'contentLayout' | 'dimensions'> & {
    triggerPosition: LayoutPosition | null;
    contentLayout: LayoutRectangle | null;
    disablePositioningStyle?: boolean;
};
export declare function useRelativePosition({ align, avoidCollisions, triggerPosition, contentLayout, alignOffset, insets, offset, placement, disablePositioningStyle, }: UseRelativePositionArgs): ({
    readonly position: "absolute";
} & {
    top: number;
    left?: undefined;
} & {
    top: number;
    maxHeight: number;
    maxWidth: number;
    left?: undefined;
}) | ({
    readonly position: "absolute";
} & {
    left: number;
    top?: undefined;
} & {
    left: number;
    maxWidth: number;
    top?: undefined;
    maxHeight?: undefined;
}) | {
    readonly position?: undefined;
    opacity?: undefined;
    top?: undefined;
} | {
    readonly position: "absolute";
    readonly opacity: 0;
    readonly top: number;
};
export interface LayoutPosition {
    pageY: number;
    pageX: number;
    width: number;
    height: number;
}
interface GetPositionArgs {
    dimensions: ScaledSize;
    avoidCollisions: boolean;
    triggerPosition: LayoutPosition;
    contentLayout: LayoutRectangle;
    insets?: Insets;
}
interface GetSidePositionArgs extends GetPositionArgs {
    placement: 'top' | 'bottom' | 'left' | 'right';
    offset: number;
}
interface GetAlignPositionArgs extends GetPositionArgs {
    align: 'start' | 'center' | 'end';
    alignOffset: number;
    placement: 'top' | 'bottom' | 'left' | 'right';
}
type GetContentStyleArgs = GetPositionArgs & GetSidePositionArgs & GetAlignPositionArgs;
export {};
//# sourceMappingURL=use-relative-position.d.ts.map