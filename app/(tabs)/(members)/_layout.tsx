import { Stack } from "expo-router/stack";

export default function MembersStack() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
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
