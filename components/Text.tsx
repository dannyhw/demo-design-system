import { Text as ExpoText, Host } from "@expo/ui";
import type { UniversalTextStyle } from "@expo/ui";
import { frame } from "@expo/ui/swift-ui/modifiers";
import { Children } from "react";
import {
  type StyleProp,
  type TextProps as RNTextProps,
  type ViewStyle,
} from "react-native";
import { colors, typography } from "./theme";

export interface TextProps extends Omit<RNTextProps, "style"> {
  variant?: "display" | "h1" | "h2" | "h3" | "body" | "bodySmall" | "caption" | "label";
  color?: "primary" | "secondary" | "tertiary" | "accent" | "error" | "success";
  weight?: "regular" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  style?: StyleProp<ViewStyle>;
  textStyle?: UniversalTextStyle;
}

export const Text = ({
  variant = "body",
  color = "primary",
  weight,
  align,
  style,
  textStyle,
  children,
  numberOfLines,
  onPress,
  testID,
}: TextProps) => {
  const isWidthConstrained = numberOfLines !== undefined;

  return (
    <Host
      matchContents={
        isWidthConstrained ? { vertical: true, horizontal: false } : true
      }
      style={[
        { flexShrink: 1, minWidth: 0 },
        isWidthConstrained && { alignSelf: "stretch" },
        style,
      ]}
    >
      <ExpoText
        textStyle={{
          ...variantStyles[variant],
          color: colorStyles[color],
          ...(weight ? { fontWeight: weightStyles[weight] } : undefined),
          ...(align ? { textAlign: align } : undefined),
          ...textStyle,
        }}
        numberOfLines={numberOfLines}
        modifiers={
          isWidthConstrained
            ? [frame({ maxWidth: Infinity, alignment: "leading" })]
            : undefined
        }
        onPress={onPress ? () => onPress({} as never) : undefined}
        testID={testID}
      >
        {Children.toArray(children)
          .filter((child) => typeof child === "string" || typeof child === "number")
          .join("")}
      </ExpoText>
    </Host>
  );
};

const variantStyles: Record<NonNullable<TextProps["variant"]>, UniversalTextStyle> = {
  display: { fontSize: typography.fontSize.display, fontWeight: "700", letterSpacing: -1, lineHeight: typography.fontSize.display * typography.lineHeight.tight },
  h1: { fontSize: typography.fontSize.xxxl, fontWeight: "700", letterSpacing: -0.5, lineHeight: typography.fontSize.xxxl * typography.lineHeight.tight },
  h2: { fontSize: typography.fontSize.xxl, fontWeight: "600", letterSpacing: -0.3, lineHeight: typography.fontSize.xxl * typography.lineHeight.tight },
  h3: { fontSize: typography.fontSize.xl, fontWeight: "600", lineHeight: typography.fontSize.xl * typography.lineHeight.normal },
  body: { fontSize: typography.fontSize.md, fontWeight: "400", lineHeight: typography.fontSize.md * typography.lineHeight.normal },
  bodySmall: { fontSize: typography.fontSize.sm, fontWeight: "400", lineHeight: typography.fontSize.sm * typography.lineHeight.normal },
  caption: { fontSize: typography.fontSize.xs, fontWeight: "400", lineHeight: typography.fontSize.xs * typography.lineHeight.normal },
  label: { fontSize: typography.fontSize.sm, fontWeight: "500", letterSpacing: 0.2, lineHeight: typography.fontSize.sm * typography.lineHeight.normal },
};

const colorStyles: Record<NonNullable<TextProps["color"]>, string> = {
  primary: colors.foreground, secondary: colors.foregroundSecondary,
  tertiary: colors.foregroundTertiary, accent: colors.accent,
  error: colors.error, success: colors.success,
};

const weightStyles: Record<NonNullable<TextProps["weight"]>, UniversalTextStyle["fontWeight"]> = {
  regular: "400", medium: "500", semibold: "600", bold: "700",
};
