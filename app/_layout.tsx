import { Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { colors } from "../components/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";

const StorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export const unstable_settings = {
  initialRouteName: StorybookEnabled ? "(storybook)/index" : "(tabs)",
};

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.accent,
    background: colors.background,
    card: colors.backgroundSecondary,
    text: colors.foreground,
    border: colors.border,
    notification: colors.error,
  },
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.foreground,
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Protected guard={StorybookEnabled}>
            <Stack.Screen
              name="(storybook)/index"
              options={{ title: "Storybook", headerShown: false }}
            />
          </Stack.Protected>

          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              headerTransparent: Platform.OS === "ios",
              headerShadowVisible: false,
              headerLargeTitleShadowVisible: false,
              headerLargeStyle:
                Platform.OS === "ios" ? { backgroundColor: "transparent" } : {},
              headerTitleStyle: { color: colors.foreground },
              headerLargeTitle: true,
              contentStyle: { backgroundColor: colors.background },
              headerBlurEffect: "prominent",
            }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
