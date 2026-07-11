import {
  Button as ExpoButton,
  Host,
  Text,
  type UniversalStyle,
} from "@expo/ui";
import type { ButtonProps } from "./Button.types";
import { colors, radius, spacing } from "./theme";

export type { ButtonProps } from "./Button.types";

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
      >
        <Text
          textStyle={{
            color: variantTextColors[variant],
            fontSize: textSizes[size],
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

const variantSeedColors = {
  primary: colors.white,
  secondary: colors.foreground,
  ghost: colors.foregroundSecondary,
  danger: colors.error,
};
const variantTextColors = {
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
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: { backgroundColor: "transparent" },
  danger: { backgroundColor: colors.error },
};
const sizeStyles: Record<NonNullable<ButtonProps["size"]>, UniversalStyle> = {
  sm: { height: 32, borderRadius: radius.md, paddingHorizontal: spacing.md },
  md: { height: 40, borderRadius: radius.md, paddingHorizontal: spacing.lg },
  lg: { height: 48, borderRadius: radius.md, paddingHorizontal: spacing.xl },
};
const textSizes = { sm: 13, md: 14, lg: 16 };
