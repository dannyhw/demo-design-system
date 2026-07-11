import {
  background,
  buttonStyle,
  containerRelativeFrame,
  disabled,
  frame,
  opacity,
  padding,
  shapes,
  strokeBorder,
  type ModifierConfig,
} from "@expo/ui/swift-ui/modifiers";
import { colors, radius, spacing } from "./theme";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export const getButtonModifiers = ({
  variant,
  size,
  fullWidth,
  isDisabled,
}: {
  variant: Variant;
  size: Size;
  fullWidth: boolean;
  isDisabled: boolean;
}): ModifierConfig[] => {
  const shape = shapes.roundedRectangle({
    cornerRadius: radius.md,
    roundedCornerStyle: "continuous",
  });

  return [
    buttonStyle("plain"),
    padding({ horizontal: horizontalPadding[size] }),
    frame({ height: buttonHeights[size] }),
    ...(fullWidth ? [containerRelativeFrame({ axes: "horizontal" })] : []),
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
    disabled(isDisabled),
    ...(isDisabled ? [opacity(0.5)] : []),
  ];
};

const backgroundColors = {
  primary: colors.white,
  secondary: "transparent",
  ghost: "transparent",
  danger: colors.error,
};
const horizontalPadding = { sm: spacing.md, md: spacing.lg, lg: spacing.xl };

const buttonHeights = { sm: 32, md: 40, lg: 48 };
