import * as React from 'react';
interface AugmentRefProps<T> {
    ref: React.Ref<T>;
    methods?: Record<string, (...args: any[]) => any>;
    deps?: any[];
}
export declare function useAugmentedRef<T>({ ref, methods, deps, }: AugmentRefProps<T>): React.RefObject<T | null>;
export {};
//# sourceMappingURL=use-augmented-ref.d.ts.map