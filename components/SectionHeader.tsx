import { StyleSheet, View } from "react-native";
import { Text } from "./Text";
import { colors, spacing } from "./theme";

export interface SectionHeaderProps {
  title: string;
  action?: string;
  onAction?: () => void;
  count?: number;
}

export const SectionHeader = ({
  title,
  action,
  onAction,
  count,
}: SectionHeaderProps) => (
  <View style={styles.container}>
    <View style={styles.titleRow}>
      <Text
        variant="label"
        color="secondary"
        textStyle={{ letterSpacing: 0.5 }}
      >
        {title.toUpperCase()}
      </Text>
      {count !== undefined && (
        <View style={styles.countBadge}>
          <Text variant="caption" color="secondary">
            {count}
          </Text>
        </View>
      )}
    </View>
    {action && onAction && (
      <Text variant="bodySmall" color="accent" onPress={onAction}>
        {action}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.sm,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  countBadge: {
    marginLeft: spacing.sm,
    backgroundColor: colors.backgroundTertiary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
