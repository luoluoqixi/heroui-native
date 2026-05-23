import React from 'react';
import type { GlobalAnimationSettingsContextValue, GlobalAnimationSettingsProviderProps } from './types';
declare const useGlobalAnimationSettings: () => GlobalAnimationSettingsContextValue;
export { useGlobalAnimationSettings };
/**
 * GlobalAnimationSettingsProvider Component
 *
 * @description
 * Provider component that controls global animation settings across the application.
 * When animation is set to 'disable-all', all animations will be disabled globally.
 * Additionally, if the user has enabled reduce motion in accessibility settings,
 * all animations will be disabled automatically.
 *
 * This provider wraps AnimationSettingsProvider to cascade the global setting
 * down through the component tree.
 *
 * @param {GlobalAnimationSettingsProviderProps} props - Provider props
 * @param {AnimationRootDisableAll} [props.animation] - Global animation setting
 * @param {ReactNode} props.children - Child components to wrap
 */
export declare const GlobalAnimationSettingsProviderComponent: React.FC<GlobalAnimationSettingsProviderProps>;
export default GlobalAnimationSettingsProviderComponent;
//# sourceMappingURL=provider.d.ts.map