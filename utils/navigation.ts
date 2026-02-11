import { Platform } from "react-native";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { colors } from "../components";
import { StackScreenProps } from "expo-router";

const isGlassAvailable = isLiquidGlassAvailable();

export const stackScreenOptions: StackScreenProps["options"] = {
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
};
