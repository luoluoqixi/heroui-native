import type { AccordionAnimationContextValue, AccordionContentAnimation, AccordionIndicatorAnimation, AccordionRootAnimation } from './accordion.types';
declare const AccordionAnimationProvider: import("react").Provider<AccordionAnimationContextValue>, useAccordionAnimation: () => AccordionAnimationContextValue;
export { AccordionAnimationProvider, useAccordionAnimation };
/**
 * Animation hook for Accordion root component
 * Handles layout transition configuration and provides context for child components
 */
export declare function useAccordionRootAnimation(options: {
    animation: AccordionRootAnimation | undefined;
}): {
    layoutTransition: NonNullable<import("../../helpers/internal/types").LayoutTransition> | undefined;
    isAllAnimationsDisabled: boolean;
};
/**
 * Animation hook for Accordion Indicator component
 * Handles rotation animation for the chevron icon
 */
export declare function useAccordionIndicatorAnimation(options: {
    animation: AccordionIndicatorAnimation | undefined;
    isExpanded: boolean;
}): {
    rContainerStyle: {
        transform: {
            rotate: string;
        }[];
    };
};
/**
 * Animation hook for Accordion Content component
 * Handles entering and exiting animations
 */
export declare function useAccordionContentAnimation(options: {
    animation: AccordionContentAnimation | undefined;
}): {
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=accordion.animation.d.ts.map