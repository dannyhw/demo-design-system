import { Button as SwiftButton, Text, Host } from "@expo/ui/swift-ui";
import {
  background,
  buttonStyle,
  containerRelativeFrame,
  disabled as disabledModifier,
  font,
  frame,
  foregroundStyle,
  multilineTextAlignment,
  opacity,
  padding,
  shapes,
  strokeBorder,
} from "@expo/ui/swift-ui/modifiers";
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
  const shape = shapes.roundedRectangle({
    cornerRadius: radius.md,
    roundedCornerStyle: "continuous",
  });

  return (
    <Host
      matchContents={{ vertical: true, horizontal: !fullWidth }}
      style={fullWidth ? { alignSelf: "stretch", width: "100%" } : undefined}
      colorScheme="dark"
      seedColor={variantSeedColors[variant]}
    >
      <SwiftButton
        onPress={onPress}
        role={variant === "danger" ? "destructive" : "default"}
        modifiers={[
          buttonStyle("plain"),
          padding({ horizontal: horizontalPadding[size] }),
          frame({ height: buttonHeights[size] }),
          ...(fullWidth
            ? [containerRelativeFrame({ axes: "horizontal" as const })]
            : []),
          background(backgroundColors[variant], shape),
          ...(variant === "secondary"
            ? [
                strokeBorder({
                  color: colors.border,
                  style: { lineWidth: 1 },
                  shape: "roundedRectangle",
                  cornerRadius: radius.md,
                }),
              ]
            : []),
          disabledModifier(isDisabled),
          ...(isDisabled ? [opacity(0.5)] : []),
        ]}
      >
        <Text
          modifiers={[
            foregroundStyle(variantTextColors[variant]),
            font({ size: textSizes[size], weight: "medium" }),
            multilineTextAlignment("center"),
          ]}
        >
          {loading ? `${label.replace(/\.{3}$/, "")}…` : label}
        </Text>
      </SwiftButton>
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
const backgroundColors = {
  primary: colors.white,
  secondary: "transparent",
  ghost: "transparent",
  danger: colors.error,
};
const horizontalPadding = { sm: spacing.md, md: spacing.lg, lg: spacing.xl };
const buttonHeights = { sm: 32, md: 40, lg: 48 };
const textSizes = { sm: 13, md: 14, lg: 16 };
