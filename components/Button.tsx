import { Button as ExpoButton, Host, Text, type UniversalStyle } from "@expo/ui";
import { colors, radius } from "./theme";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  label,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <Host
      matchContents={{ vertical: true, horizontal: !fullWidth }}
      style={fullWidth ? { alignSelf: "stretch" } : undefined}
      colorScheme="dark"
      seedColor={variantSeedColors[variant]}
    >
      <ExpoButton
        variant={nativeVariants[variant]}
        onPress={onPress}
        disabled={isDisabled}
        style={{
          ...sizeStyles[size],
          ...(isDisabled ? { opacity: 0.5 } : undefined),
        }}
      >
        <Text
          textStyle={{
            color: variantTextColors[variant],
            fontSize: sizeTextSizes[size],
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {loading ? `${label.replace(/\.{3}$/, "")}…` : label}
        </Text>
      </ExpoButton>
    </Host>
  );
};

const nativeVariants = {
  primary: "filled",
  secondary: "outlined",
  ghost: "text",
  danger: "filled",
} as const;

const variantSeedColors: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: colors.white,
  secondary: colors.foreground,
  ghost: colors.foregroundSecondary,
  danger: colors.error,
};

const variantTextColors: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: colors.black,
  secondary: colors.foreground,
  ghost: colors.foregroundSecondary,
  danger: colors.white,
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, UniversalStyle> = {
  sm: { height: 32, borderRadius: radius.md },
  md: { height: 40, borderRadius: radius.md },
  lg: { height: 48, borderRadius: radius.md },
};

const sizeTextSizes: Record<NonNullable<ButtonProps["size"]>, number> = {
  sm: 13,
  md: 14,
  lg: 16,
};
