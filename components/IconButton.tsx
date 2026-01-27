import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { colors, spacing, radius } from './theme';

export interface IconButtonProps {
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon: string;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export const IconButton = ({
  variant = 'default',
  size = 'md',
  icon,
  onPress,
  disabled = false,
  accessibilityLabel,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        style={[
          styles.button,
          variantStyles[variant],
          sizeStyles[size],
          disabled && styles.disabled,
        ]}
      >
        <Text style={[styles.icon, iconSizeStyles[size]]}>{icon}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
  },
  icon: {
    color: colors.foreground,
  },
  disabled: {
    opacity: 0.5,
  },
});

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    width: 28,
    height: 28,
  },
  md: {
    width: 36,
    height: 36,
  },
  lg: {
    width: 44,
    height: 44,
  },
});

const iconSizeStyles = StyleSheet.create({
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 18,
  },
  lg: {
    fontSize: 22,
  },
});
