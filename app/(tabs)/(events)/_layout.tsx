import { Stack } from "expo-router/stack";
import { colors } from "../../../components/theme";

export default function EventsStack() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Events" }} />
    </Stack>
  );
}
