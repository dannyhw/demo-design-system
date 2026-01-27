import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import { colors, spacing } from './theme';

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
}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text variant="label" color="secondary" style={styles.title}>
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
        <TouchableOpacity onPress={onAction}>
          <Text variant="bodySmall" color="accent">
            {action}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    letterSpacing: 0.5,
  },
  countBadge: {
    marginLeft: spacing.sm,
    backgroundColor: colors.backgroundTertiary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
