import { FadeIn, FadeOut } from 'react-native-reanimated';
/**
 * Display names for Accordion components
 */
export declare const DISPLAY_NAME: {
    readonly ROOT: "HeroUINative.Accordion.Root";
    readonly ITEM: "HeroUINative.Accordion.Item";
    readonly TRIGGER: "HeroUINative.Accordion.Trigger";
    readonly INDICATOR: "HeroUINative.Accordion.Indicator";
    readonly CONTENT: "HeroUINative.Accordion.Content";
    readonly CHEVRON_DOWN_ICON: "HeroUINative.Accordion.ChevronDownIcon";
};
/**
 * Default layout transition for accordion animations
 */
export declare const ACCORDION_LAYOUT_TRANSITION: import("react-native-reanimated").ComplexAnimationBuilder;
/**
 * Default icon size for the indicator
 */
export declare const DEFAULT_ICON_SIZE = 16;
/**
 * Rotation values for indicator animation
 */
export declare const INDICATOR_ROTATION: {
    COLLAPSED: string;
    EXPANDED: string;
};
/**
 * Spring configuration for indicator animation
 */
export declare const INDICATOR_SPRING_CONFIG: {
    damping: number;
    stiffness: number;
    mass: number;
};
/**
 * Default entering animation for accordion content
 */
export declare const DEFAULT_CONTENT_ENTERING: FadeIn;
/**
 * Default exiting animation for accordion content
 */
export declare const DEFAULT_CONTENT_EXITING: FadeOut;
//# sourceMappingURL=accordion.constants.d.ts.map