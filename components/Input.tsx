import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";
import { Text } from "./Text";
import { colors, spacing, radius, typography } from "./theme";

export interface InputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClear?: () => void;
}

export const Input = ({
  label,
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
          isFocused && styles.focused,
          error && styles.error,
          disabled && styles.disabled,
        ]}
      >
        {prefix && <View style={styles.prefix}>{prefix}</View>}
        <TextInput
          style={[
            styles.input,
            !!prefix && styles.inputWithPrefix,
            !!suffix && styles.inputWithSuffix,
          ]}
          placeholderTextColor={colors.foregroundTertiary}
          value={value}
          editable={!disabled}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          {...props}
        />
        {suffix && <View style={styles.suffix}>{suffix}</View>}
        {onClear && value ? (
          <Pressable
            onPress={onClear}
            style={styles.clearButton}
            accessibilityRole="button"
            accessibilityLabel="Clear"
          >
            <Text color="tertiary" style={styles.clearIcon}>
              ×
            </Text>
          </Pressable>
        ) : null}
      </View>
      {error && (
        <Text variant="caption" color="error" style={styles.message}>
          {error}
        </Text>
      )}
      {hint && !error && (
        <Text variant="caption" color="tertiary" style={styles.message}>
          {hint}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  label: { marginBottom: spacing.sm },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderCurve: "continuous",
    minHeight: 40,
    overflow: "hidden",
  },
  focused: { borderColor: colors.foreground },
  error: { borderColor: colors.error },
  disabled: { opacity: 0.5 },
  input: {
    flex: 1,
    color: colors.foreground,
    fontSize: typography.fontSize.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  inputWithPrefix: { paddingLeft: spacing.xs },
  inputWithSuffix: { paddingRight: spacing.xs },
  prefix: { paddingLeft: spacing.md },
  suffix: { paddingRight: spacing.md },
  clearButton: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  clearIcon: { fontSize: 18 },
  message: { marginTop: spacing.sm },
});
