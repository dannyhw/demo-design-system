import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { colors, typography } from './theme';

export interface TextProps extends RNTextProps {
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption' | 'label';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'error' | 'success';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
}

export const Text = ({
  variant = 'body',
  color = 'primary',
  weight,
  align,
  style,
  children,
  ...props
}: TextProps) => {
  return (
    <RNText
      style={[
        styles.base,
        variantStyles[variant],
        colorStyles[color],
        weight && weightStyles[weight],
        align && { textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.foreground,
  },
});

const variantStyles = StyleSheet.create({
  display: {
    fontSize: typography.fontSize.display,
    fontWeight: '700',
    letterSpacing: -1,
    lineHeight: typography.fontSize.display * typography.lineHeight.tight,
  },
  h1: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: typography.fontSize.xxxl * typography.lineHeight.tight,
  },
  h2: {
    fontSize: typography.fontSize.xxl,
    fontWeight: '600',
    letterSpacing: -0.3,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.tight,
  },
  h3: {
    fontSize: typography.fontSize.xl,
    fontWeight: '600',
    lineHeight: typography.fontSize.xl * typography.lineHeight.normal,
  },
  body: {
    fontSize: typography.fontSize.md,
    fontWeight: '400',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: '400',
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: '400',
    lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    letterSpacing: 0.2,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
  },
});

const colorStyles = StyleSheet.create({
  primary: {
    color: colors.foreground,
  },
  secondary: {
    color: colors.foregroundSecondary,
  },
  tertiary: {
    color: colors.foregroundTertiary,
  },
  accent: {
    color: colors.accent,
  },
  error: {
    color: colors.error,
  },
  success: {
    color: colors.success,
  },
});

const weightStyles = StyleSheet.create({
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  semibold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
});
