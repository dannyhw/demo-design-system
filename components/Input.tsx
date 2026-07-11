import { Column, Host, Text as ExpoText, TextInput as ExpoTextInput, useNativeState, type UniversalStyle } from "@expo/ui";
import { useEffect } from "react";
import { type TextInputProps as RNTextInputProps } from "react-native";
import { colors, spacing, radius, typography } from "./theme";

export interface InputProps extends Omit<RNTextInputProps, "style" | "onFocus" | "onBlur"> {
  label?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input = ({
  label, placeholder, error, hint, disabled = false, value = "", onChangeText,
  onFocus, onBlur, autoCapitalize, autoCorrect, autoFocus, keyboardType,
  multiline, secureTextEntry, returnKeyType, maxLength, testID,
}: InputProps) => {
  const nativeValue = useNativeState(String(value));

  useEffect(() => {
    // Expo UI's observable state intentionally exposes a mutable native value.
    // eslint-disable-next-line react-hooks/immutability
    nativeValue.value = String(value);
  }, [nativeValue, value]);

  return (
    <Host
      matchContents={{ vertical: true, horizontal: false }}
      style={{ alignSelf: "stretch", opacity: disabled ? 0.5 : 1 }}
      colorScheme="dark"
      seedColor={error ? colors.error : colors.foreground}
    >
      <Column spacing={spacing.sm}>
        {label && (
          <ExpoText textStyle={labelTextStyle}>{label}</ExpoText>
        )}
        <ExpoTextInput
          value={nativeValue}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.foregroundTertiary}
          editable={!disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          testID={testID}
          cursorColor={error ? colors.error : colors.foreground}
          style={{ ...inputStyle, ...(error ? inputErrorStyle : undefined) }}
          textStyle={inputTextStyle}
        />
        {error && <ExpoText textStyle={errorTextStyle}>{error}</ExpoText>}
        {hint && !error && <ExpoText textStyle={hintTextStyle}>{hint}</ExpoText>}
      </Column>
    </Host>
  );
};

const inputStyle: UniversalStyle = {
  height: 44,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
  backgroundColor: colors.backgroundSecondary,
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
};

const inputErrorStyle: UniversalStyle = { borderColor: colors.error };
const inputTextStyle = { color: colors.foreground, fontSize: typography.fontSize.md };
const labelTextStyle = { color: colors.foregroundSecondary, fontSize: typography.fontSize.sm, fontWeight: "500" as const };
const errorTextStyle = { color: colors.error, fontSize: typography.fontSize.xs };
const hintTextStyle = { color: colors.foregroundTertiary, fontSize: typography.fontSize.xs };
