import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import { Text } from './Text';
import { colors, spacing, radius, typography } from './theme';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClear?: () => void;
}

export const Input = ({
  label,
  placeholder,
  error,
  hint,
  disabled = false,
  prefix,
  suffix,
  value,
  onClear,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="label" color="secondary" style={styles.label}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          error && styles.inputWrapperError,
          disabled && styles.inputWrapperDisabled,
        ]}
      >
        {prefix && <View style={styles.prefix}>{prefix}</View>}
        <TextInput
          style={[
            styles.input,
            prefix && styles.inputWithPrefix,
            suffix && styles.inputWithSuffix,
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.foregroundTertiary}
          value={value}
          editable={!disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {suffix && <View style={styles.suffix}>{suffix}</View>}
        {onClear && value && (
          <TouchableOpacity onPress={onClear} style={styles.clearButton}>
            <Text color="tertiary" style={styles.clearIcon}>×</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text variant="caption" color="error" style={styles.errorText}>
          {error}
        </Text>
      )}
      {hint && !error && (
        <Text variant="caption" color="tertiary" style={styles.hintText}>
          {hint}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: spacing.sm,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    minHeight: 40,
  },
  inputWrapperFocused: {
    borderColor: colors.foreground,
  },
  inputWrapperError: {
    borderColor: colors.error,
  },
  inputWrapperDisabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    color: colors.foreground,
    fontSize: typography.fontSize.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  inputWithPrefix: {
    paddingLeft: spacing.xs,
  },
  inputWithSuffix: {
    paddingRight: spacing.xs,
  },
  prefix: {
    paddingLeft: spacing.md,
  },
  suffix: {
    paddingRight: spacing.md,
  },
  clearButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  clearIcon: {
    fontSize: 18,
  },
  errorText: {
    marginTop: spacing.sm,
  },
  hintText: {
    marginTop: spacing.sm,
  },
});
