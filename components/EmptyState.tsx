import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { Button } from './Button';
import { spacing } from './theme';

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({
  icon = '📭',
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text variant="h3" align="center" style={styles.title}>
        {title}
      </Text>
      {description && (
        <Text variant="body" color="secondary" align="center" style={styles.description}>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxxl,
  },
  icon: {
    fontSize: 48,
    lineHeight: 64,
    height: 64,
    marginBottom: spacing.lg,
    textAlign: 'center',
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
