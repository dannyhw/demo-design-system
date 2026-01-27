import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { colors, spacing, radius } from './theme';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'accent';
  size?: 'sm' | 'md';
  label: string;
}

export const Badge = ({
  variant = 'default',
  size = 'md',
  label,
}: BadgeProps) => {
  return (
    <View style={[styles.badge, variantStyles[variant], sizeStyles[size]]}>
      <Text
        style={[styles.label, variantTextStyles[variant], sizeTextStyles[size]]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
  },
  label: {
    fontWeight: '500',
  },
});

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  success: {
    backgroundColor: colors.successLight,
  },
  warning: {
    backgroundColor: colors.warningLight,
  },
  error: {
    backgroundColor: colors.errorLight,
  },
  accent: {
    backgroundColor: colors.accentLight,
  },
});

const variantTextStyles = StyleSheet.create({
  default: {
    color: colors.foregroundSecondary,
  },
  success: {
    color: colors.success,
  },
  warning: {
    color: colors.warning,
  },
  error: {
    color: colors.error,
  },
  accent: {
    color: colors.accent,
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  md: {
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
  },
});

const sizeTextStyles = StyleSheet.create({
  sm: {
    fontSize: 10,
  },
  md: {
    fontSize: 12,
  },
});
