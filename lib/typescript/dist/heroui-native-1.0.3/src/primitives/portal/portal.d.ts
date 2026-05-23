import * as React from 'react';
import { type View, type ViewStyle } from 'react-native';
export declare function PortalHost({ name }: {
    name?: string;
}): import("react/jsx-runtime").JSX.Element | null;
export declare function Portal({ name, hostName, children, }: {
    name: string;
    hostName?: string;
    children: React.ReactNode;
}): null;
/**
 * @deprecated use `FullWindowOverlay` from `react-native-screens` instead
 * @example
import { FullWindowOverlay } from "react-native-screens"
const WindowOverlay = Platform.OS === "ios" ? FullWindowOverlay : Fragment
// Wrap the `<PortalHost/>` with `<WindowOverlay/>`
<WindowOverlay><PortalHost/></WindowOverlay>
 */
export declare function useModalPortalRoot(): {
    ref: React.RefObject<View | null>;
    offset: number;
    onLayout: () => void;
    style: ViewStyle;
};
//# sourceMappingURL=portal.d.ts.map