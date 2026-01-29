import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { Text } from "../../components";
import { colors, spacing } from "../../components/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1">My Design System</Text>
      {process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true" ? (
        <Link href="/(storybook)" asChild>
          <Pressable style={styles.link}>
            <Text variant="body" color={"accent"}>
              Open Storybook
            </Text>
          </Pressable>
        </Link>
      ) : (
        <Text variant="body" color="secondary">
          Storybook disabled
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    gap: spacing.lg,
  },
  link: {
    padding: spacing.md,
  },
});
