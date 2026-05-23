import { ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import * as TabsPrimitives from '../../primitives/tabs';
import { useTabsMeasurements } from './tabs.context';
import type { TabsContentProps, TabsIndicatorProps, TabsLabelProps, TabsListProps, TabsProps, TabsScrollViewProps, TabsSeparatorProps, TabsTriggerProps } from './tabs.types';
declare const useTabs: typeof TabsPrimitives.useRootContext;
declare const useTabsTrigger: typeof TabsPrimitives.useTriggerContext;
/**
 * Compound Tabs component with sub-components
 *
 * @component Tabs - Main container for the tabs system
 *
 * @component Tabs.List - Container for tab triggers
 *
 * @component Tabs.ScrollView - Scrollable wrapper for tab triggers
 *
 * @component Tabs.Trigger - Individual tab button
 *
 * @component Tabs.Label - Label text for tab triggers
 *
 * @component Tabs.Indicator - Visual indicator for active tab
 *
 * @component Tabs.Separator - Visual separator between tabs
 *
 * @component Tabs.Content - Content panel for each tab
 *
 * Props flow from Tabs to sub-components via context.
 *
 * @see Full documentation: https://heroui.com/docs/native/components/tabs
 */
declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<import("react-native").View>> & {
    /** Container for tab triggers */
    List: import("react").ForwardRefExoticComponent<TabsListProps & import("react").RefAttributes<import("react-native").View>>;
    /** Scrollable wrapper for tab triggers */
    ScrollView: import("react").ForwardRefExoticComponent<TabsScrollViewProps & import("react").RefAttributes<ScrollView>>;
    /** Individual tab button */
    Trigger: import("react").ForwardRefExoticComponent<TabsTriggerProps & import("react").RefAttributes<import("react-native").View>>;
    /** Label text for tab triggers */
    Label: import("react").ForwardRefExoticComponent<TabsLabelProps & import("react").RefAttributes<import("react-native").Text>>;
    /** Visual indicator for active tab */
    Indicator: import("react").ForwardRefExoticComponent<TabsIndicatorProps & import("react").RefAttributes<import("react-native").View>>;
    /** Visual separator between tabs */
    Separator: import("react").ForwardRefExoticComponent<TabsSeparatorProps & import("react").RefAttributes<Animated.View>>;
    /** Content panel for each tab */
    Content: import("react").ForwardRefExoticComponent<TabsContentProps & import("react").RefAttributes<import("react-native").View>>;
};
export { useTabs, useTabsMeasurements, useTabsTrigger };
export default Tabs;
//# sourceMappingURL=tabs.d.ts.map