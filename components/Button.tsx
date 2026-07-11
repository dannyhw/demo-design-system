import {
  Button as ExpoButton,
  Host,
  Text,
  type UniversalStyle,
} from "@expo/ui";
import { colors, radius, spacing } from "./theme";
import { getButtonModifiers } from "./ButtonModifiers";

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
      style={fullWidth ? { alignSelf: "stretch", width: "100%" } : undefined}
      colorScheme="dark"
      seedColor={variantSeedColors[variant]}
    >
      <ExpoButton
        variant="text"
        onPress={onPress}
        disabled={isDisabled}
        style={{
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...(fullWidth ? { width: "100%" as const } : undefined),
          ...(isDisabled ? { opacity: 0.5 } : undefined),
        }}
        modifiers={getButtonModifiers({
          variant,
          size,
          fullWidth,
          isDisabled,
        })}
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

const variantStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  UniversalStyle
> = {
  primary: { backgroundColor: colors.white },
  secondary: { backgroundColor: "transparent" },
  ghost: { backgroundColor: "transparent" },
  danger: { backgroundColor: colors.error },
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, UniversalStyle> = {
  sm: { height: 32, borderRadius: radius.md, paddingHorizontal: spacing.md },
  md: { height: 40, borderRadius: radius.md, paddingHorizontal: spacing.lg },
  lg: { height: 48, borderRadius: radius.md, paddingHorizontal: spacing.xl },
};

const sizeTextSizes: Record<NonNullable<ButtonProps["size"]>, number> = {
  sm: 13,
  md: 14,
  lg: 16,
};
