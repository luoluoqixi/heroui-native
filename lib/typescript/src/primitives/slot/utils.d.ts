import { type PressableStateCallbackType } from 'react-native';
import type { AnyProps } from './types';
export declare function isTextChildren(children: React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode)): boolean;
export declare function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]): (node: T) => void;
export declare function mergeProps(slotProps: AnyProps, childProps: AnyProps): {
    [x: string]: any;
};
//# sourceMappingURL=utils.d.ts.map