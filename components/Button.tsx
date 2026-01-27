import { StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Text } from './Text';
import { colors, spacing, radius } from './theme';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={fullWidth && styles.fullWidth}
    >
      <View
        style={[
          styles.button,
          variantStyles[variant],
          sizeStyles[size],
          isDisabled && styles.disabled,
          fullWidth && styles.fullWidth,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'primary' ? colors.black : colors.foreground}
          />
        ) : (
          <View style={styles.content}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text
              style={[
                styles.label,
                variantTextStyles[variant],
                sizeTextStyles[size],
              ]}
            >
              {label}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  icon: {
    marginRight: spacing.xs,
  },
  label: {
    fontWeight: '500',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
});

const variantTextStyles = StyleSheet.create({
  primary: {
    color: colors.black,
  },
  secondary: {
    color: colors.foreground,
  },
  ghost: {
    color: colors.foregroundSecondary,
  },
  danger: {
    color: colors.white,
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minHeight: 32,
  },
  md: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    minHeight: 40,
  },
  lg: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    minHeight: 48,
  },
});

const sizeTextStyles = StyleSheet.create({
  sm: {
    fontSize: 13,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 16,
  },
});
