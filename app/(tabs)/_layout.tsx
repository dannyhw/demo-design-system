import { NativeTabs } from "expo-router/unstable-native-tabs";
import { colors } from "../../components/theme";

export default function TabsLayout() {
  return (
    <NativeTabs
      tintColor={colors.accent}
      backgroundColor={colors.backgroundSecondary}
      indicatorColor={colors.backgroundHover}
      rippleColor={colors.accentLight}
      iconColor={colors.foregroundSecondary}
      badgeTextColor={colors.foreground}
      labelStyle={{ color: colors.foregroundSecondary }}
    >
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
          md="home"
        />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(members)">
        <NativeTabs.Trigger.Icon
          sf={{ default: "person.2", selected: "person.2.fill" }}
          md="person"
        />
        <NativeTabs.Trigger.Label>Members</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(events)">
        <NativeTabs.Trigger.Icon
          sf={{ default: "calendar", selected: "calendar" }}
          md="calendar_today"
        />
        <NativeTabs.Trigger.Label>Events</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
