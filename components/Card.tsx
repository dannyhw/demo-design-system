import { StyleSheet, View, ViewProps, TouchableOpacity } from 'react-native';
import { colors, spacing, radius, shadows } from './theme';

export interface CardProps extends ViewProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onPress?: () => void;
}

export const Card = ({
  variant = 'default',
  padding = 'md',
  onPress,
  style,
  children,
  ...props
}: CardProps) => {
  const content = (
    <View
      style={[
        styles.card,
        variantStyles[variant],
        paddingStyles[padding],
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
});

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  elevated: {
    backgroundColor: colors.backgroundSecondary,
    ...shadows.md,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
});

const paddingStyles = StyleSheet.create({
  none: {
    padding: 0,
  },
  sm: {
    padding: spacing.md,
  },
  md: {
    padding: spacing.lg,
  },
  lg: {
    padding: spacing.xl,
  },
});
