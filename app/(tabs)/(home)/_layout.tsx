import { Stack } from "expo-router/stack";
import { colors } from "../../../components/theme";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Image } from "expo-image";

export default function HomeStack() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerTitleStyle: { color: colors.foreground },
        // headerBlurEffect: "prominent",

        headerLargeTitle: true,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
