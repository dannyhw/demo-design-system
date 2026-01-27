import { StyleSheet, View, ViewProps } from 'react-native';
import { colors, spacing } from './theme';

export interface DividerProps extends ViewProps {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export const Divider = ({
  spacing: spacingProp = 'md',
  style,
  ...props
}: DividerProps) => {
  return (
    <View
      style={[styles.divider, spacingStyles[spacingProp], style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    width: '100%',
  },
});

const spacingStyles = StyleSheet.create({
  none: {
    marginVertical: 0,
  },
  sm: {
    marginVertical: spacing.sm,
  },
  md: {
    marginVertical: spacing.md,
  },
  lg: {
    marginVertical: spacing.lg,
  },
});
