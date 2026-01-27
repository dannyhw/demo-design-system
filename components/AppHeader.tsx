import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { IconButton } from './IconButton';
import { colors, spacing } from './theme';

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const AppHeader = ({
  title = 'React Native Porto',
  subtitle,
  showBack = false,
  onBack,
  rightAction,
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {showBack && (
          <IconButton
            icon="←"
            variant="ghost"
            size="md"
            onPress={onBack}
            accessibilityLabel="Go back"
          />
        )}
      </View>

      <View style={styles.centerSection}>
        <View style={styles.logoRow}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>RN</Text>
          </View>
          <Text variant="h3" weight="bold" style={styles.title}>
            {title}
          </Text>
        </View>
        {subtitle && (
          <Text variant="caption" color="secondary" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      <View style={styles.rightSection}>
        {rightAction}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    backgroundColor: colors.background,
  },
  leftSection: {
    width: 48,
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    width: 48,
    alignItems: 'flex-end',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  logoText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.foreground,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
});
