import { Stack } from "expo-router/stack";
import { Platform } from "react-native";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { colors } from "../../../components";

const isGlassAvailable = isLiquidGlassAvailable();

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerLargeTitle: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTransparent: Platform.OS === "ios" && isGlassAvailable,
          headerShadowVisible: false,
          headerLargeTitleShadowVisible: false,
          headerLargeStyle:
            Platform.OS === "ios" && isGlassAvailable
              ? { backgroundColor: "transparent" }
              : { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.foreground },
          headerLargeTitle: true,
          contentStyle: { backgroundColor: colors.background },
          headerBlurEffect: "prominent",
        }}
      />
    </Stack>
  );
}
