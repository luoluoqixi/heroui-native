import type { PopupPopoverContentAnimation } from '../types/animation';
/**
 * Placement options for popover/select content
 */
export type PopoverContentPlacement = 'top' | 'bottom' | 'left' | 'right';
/**
 * Props for usePopupPopoverContentAnimation hook
 */
export interface UsePopupPopoverContentAnimationProps {
    /**
     * Placement of the popover/select content
     */
    placement: PopoverContentPlacement;
    /**
     * Alignment offset for the popover content
     */
    offset: number;
    /**
     * Animation configuration for content
     */
    animation?: PopupPopoverContentAnimation;
}
/**
 * Animation hook for popover/select content components
 * Returns entering and exiting animations based on configuration and placement
 */
export declare function usePopupPopoverContentAnimation({ placement, offset, animation, }: UsePopupPopoverContentAnimationProps): {
    entering: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
    exiting: import("react-native-reanimated").BaseAnimationBuilder | ((targetValues: import("react-native-reanimated").EntryAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | ((targetValues: import("react-native-reanimated").ExitAnimationsValues) => import("react-native-reanimated").LayoutAnimation) | import("react-native-reanimated").ReanimatedKeyframe | undefined;
};
//# sourceMappingURL=use-popup-popover-content-animation.d.ts.map