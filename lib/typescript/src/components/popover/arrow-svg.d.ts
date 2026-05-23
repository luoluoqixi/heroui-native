import type { ComponentProps } from 'react';
import type { ViewStyle } from 'react-native';
import Svg from 'react-native-svg';
export interface ArrowSvgProps {
    width: number;
    height: number;
    placement: 'top' | 'bottom' | 'left' | 'right';
    fill: string;
    stroke?: string;
    strokeWidth?: number;
    style?: ViewStyle;
    svgProps?: ComponentProps<typeof Svg>;
}
export declare const ArrowSvg: ({ width, height, placement, fill, stroke, strokeWidth, style, svgProps, }: ArrowSvgProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=arrow-svg.d.ts.map