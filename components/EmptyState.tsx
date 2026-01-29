import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Text";
import { Button } from "./Button";
import { spacing, colors } from "./theme";
import { SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS } from "rn-icon-mapper";

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

// Convert SF Symbol name to Material Community Icon name
const getIconName = (sfSymbolName: string): string => {
  // Try to convert SF Symbol to Material Community Icon
  const mapped =
    SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS[
      sfSymbolName as keyof typeof SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS
    ];
  if (mapped) {
    return mapped;
  }

  // If not found in mapping, assume it's already a Material Community Icon name
  return sfSymbolName;
};

export const EmptyState = ({
  icon = "tray.fill",
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  const iconName = getIconName(icon);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName as any}
        size={48}
        color={colors.foregroundSecondary}
        style={styles.icon}
      />
      <Text variant="h3" align="center" style={styles.title}>
        {title}
      </Text>
      {description && (
        <Text
          variant="body"
          color="secondary"
          align="center"
          style={styles.description}
        >
          {description}
        </Text>
      )}
      {actionLabel && onAction && (
        <View style={styles.action}>
          <Button
            variant="secondary"
            size="md"
            label={actionLabel}
            onPress={onAction}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xxxl,
  },
  icon: {
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.sm,
  },
  description: {
    maxWidth: 280,
    marginBottom: spacing.lg,
  },
  action: {
    marginTop: spacing.sm,
  },
});
