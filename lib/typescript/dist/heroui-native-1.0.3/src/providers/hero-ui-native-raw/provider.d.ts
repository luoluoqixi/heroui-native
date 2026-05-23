import React from 'react';
import type { HeroUINativeProviderRawProps } from './types';
/**
 * HeroUINativeProviderRaw Component
 *
 * @description
 * Raw provider component for HeroUI Native that configures the application
 * with global settings but without ToastProvider and PortalHost.
 * Use this when you need to manage toast and portal functionality separately
 * (e.g. nested providers or custom setups).
 *
 * Currently provides:
 * - Global animation settings
 * - Global text component configuration
 *
 * @param {HeroUINativeProviderRawProps} props - Provider configuration props
 * @param {ReactNode} props.children - Child components to wrap
 * @param {HeroUINativeConfigRaw} [props.config] - Configuration object
 *
 */
declare const HeroUINativeProviderRaw: React.FC<HeroUINativeProviderRawProps>;
export default HeroUINativeProviderRaw;
//# sourceMappingURL=provider.d.ts.map