import { Stack } from "expo-router/stack";

export default function EventsStack() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Events" }} />
      <Stack.Screen
        name="[id]"
        options={{ title: "Event", headerLargeTitle: false }}
      />
    </Stack>
  );
}
