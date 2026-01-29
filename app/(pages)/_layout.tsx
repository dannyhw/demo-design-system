import { Stack } from "expo-router";
import { colors } from "../../components/theme";

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.foreground,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen name="members" options={{ title: "Members" }} />
      <Stack.Screen name="events" options={{ title: "Events" }} />
      <Stack.Screen name="add-member" options={{ title: "Add Member" }} />
      <Stack.Screen name="member/[id]" options={{ title: "Member" }} />
    </Stack>
  );
}
