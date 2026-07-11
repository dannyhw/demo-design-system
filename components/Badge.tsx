import { Host, Row, Text as ExpoText, type UniversalStyle } from "@expo/ui";
import { colors, spacing, radius } from "./theme";

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "accent";
  size?: "sm" | "md";
  label: string;
}

export const Badge = ({
  variant = "default",
  size = "md",
  label,
}: BadgeProps) => (
  <Host matchContents colorScheme="dark">
    <Row style={{ ...variantStyles[variant], ...sizeStyles[size] }}>
      <ExpoText
        textStyle={{
          fontWeight: "500",
          color: variantTextColors[variant],
          fontSize: sizeTextSizes[size],
        }}
      >
        {label}
      </ExpoText>
    </Row>
  </Host>
);

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, UniversalStyle> = {
  default: {
    backgroundColor: colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.full,
  },
  success: { backgroundColor: colors.successLight, borderRadius: radius.full },
  warning: { backgroundColor: colors.warningLight, borderRadius: radius.full },
  error: { backgroundColor: colors.errorLight, borderRadius: radius.full },
  accent: { backgroundColor: colors.accentLight, borderRadius: radius.full },
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, UniversalStyle> = {
  sm: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm },
  md: { paddingVertical: spacing.xs + 2, paddingHorizontal: spacing.md },
};

const variantTextColors: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: colors.foregroundSecondary,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  accent: colors.accent,
};

const sizeTextSizes: Record<NonNullable<BadgeProps["size"]>, number> = {
  sm: 10,
  md: 12,
};
