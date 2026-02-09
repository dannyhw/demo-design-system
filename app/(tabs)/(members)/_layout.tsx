import { Stack } from "expo-router/stack";
import { PlatformColor } from "react-native";
import { colors } from "../../../components/theme";

export default function MembersStack() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerTitleStyle: { color: colors.foreground },

        headerBackButtonDisplayMode: "minimal",
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Members", headerLargeTitle: true }}
      />
      <Stack.Screen name="add-member" options={{ title: "Add Member" }} />
      <Stack.Screen name="[id]" options={{ title: "Member" }} />
    </Stack>
  );
}
