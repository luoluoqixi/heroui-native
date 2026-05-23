import React from 'react';
import type { HeroUINativeProviderProps } from './types';
/**
 * HeroUINativeProvider Component
 *
 * @description
 * Main provider component for HeroUI Native that configures the application
 * with global settings. This component should wrap your entire application
 * or the section where you want to use HeroUI Native components.
 *
 * Currently provides:
 * - Global animation settings
 * - Global text component configuration
 * - Toast notification system
 * - Portal management for overlays
 *
 * @param {HeroUINativeProviderProps} props - Provider configuration props
 * @param {ReactNode} props.children - Child components to wrap
 * @param {HeroUINativeConfig} [props.config] - Configuration object
 *
 */
declare const HeroUINativeProvider: React.FC<HeroUINativeProviderProps>;
export default HeroUINativeProvider;
//# sourceMappingURL=provider.d.ts.map