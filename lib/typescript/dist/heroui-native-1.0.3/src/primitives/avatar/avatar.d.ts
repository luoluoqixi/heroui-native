import * as React from 'react';
import { Image as RNImage, View } from 'react-native';
import type { AvatarStatus, RootProps } from './avatar.types';
interface IRootContext extends RootProps {
    status: AvatarStatus;
    setStatus: (status: AvatarStatus) => void;
}
export declare function useRootContext(): IRootContext;
declare const Root: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & {
    alt?: string;
} & React.RefAttributes<View>>;
declare const Image: React.ForwardRefExoticComponent<Omit<import("../../helpers/internal/types").ComponentPropsWithAsChild<typeof RNImage>, "source" | "alt"> & {
    children?: React.ReactNode;
    source: import("react-native").ImageProps["source"];
    onLoadingStatusChange?: (status: AvatarStatus) => void;
} & React.RefAttributes<RNImage>>;
declare const Fallback: React.ForwardRefExoticComponent<import("react-native").ViewProps & {
    asChild?: boolean;
} & React.RefAttributes<View>>;
export { Fallback, Image, Root };
//# sourceMappingURL=avatar.d.ts.map