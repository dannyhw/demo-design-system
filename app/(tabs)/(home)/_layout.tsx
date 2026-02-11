import { Stack } from "expo-router/stack";
import { stackScreenOptions } from "../../../utils/navigation";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerLargeTitle: true }}>
      <Stack.Screen name="index" options={stackScreenOptions} />
    </Stack>
  );
}
