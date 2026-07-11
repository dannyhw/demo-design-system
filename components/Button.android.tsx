import { Host } from "@expo/ui";
import {
  Button as ComposeButton,
  OutlinedButton,
  Shape,
  Text,
  TextButton,
} from "@expo/ui/jetpack-compose";
import { fillMaxWidth, height } from "@expo/ui/jetpack-compose/modifiers";
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
  const NativeButton =
    variant === "secondary"
      ? OutlinedButton
      : variant === "ghost"
        ? TextButton
        : ComposeButton;
  const isDisabled = disabled || loading;

  return (
    <Host
      matchContents={{ vertical: true, horizontal: !fullWidth }}
      style={fullWidth ? { alignSelf: "stretch" } : undefined}
      colorScheme="dark"
    >
      <NativeButton
        onClick={onPress}
        enabled={!isDisabled}
        colors={buttonColors[variant]}
        contentPadding={contentPadding[size]}
        shape={buttonShape}
        modifiers={[
          height(buttonHeights[size]),
          ...(fullWidth ? [fillMaxWidth()] : []),
        ]}
      >
        <Text
          color={variantTextColors[variant]}
          style={{ fontSize: textSizes[size], fontWeight: "500" }}
        >
          {loading ? `${label.replace(/\.{3}$/, "")}…` : label}
        </Text>
      </NativeButton>
    </Host>
  );
};

const cornerRadii = {
  topStart: radius.md,
  topEnd: radius.md,
  bottomStart: radius.md,
  bottomEnd: radius.md,
};
const buttonShape = Shape.RoundedCorner({ cornerRadii });

const buttonColors = {
  primary: {
    containerColor: colors.white,
    contentColor: colors.black,
    disabledContainerColor: colors.white,
    disabledContentColor: colors.black,
  },
  secondary: {
    containerColor: "transparent",
    contentColor: colors.foreground,
    disabledContainerColor: "transparent",
    disabledContentColor: colors.foreground,
  },
  ghost: {
    containerColor: "transparent",
    contentColor: colors.foregroundSecondary,
    disabledContainerColor: "transparent",
    disabledContentColor: colors.foregroundSecondary,
  },
  danger: {
    containerColor: colors.error,
    contentColor: colors.white,
    disabledContainerColor: colors.error,
    disabledContentColor: colors.white,
  },
};

const variantTextColors = {
  primary: colors.black,
  secondary: colors.foreground,
  ghost: colors.foregroundSecondary,
  danger: colors.white,
};

const buttonHeights = { sm: 32, md: 40, lg: 48 };
const textSizes = { sm: 13, md: 14, lg: 16 };
const contentPadding = {
  sm: { start: 12, end: 12 },
  md: { start: 16, end: 16 },
  lg: { start: 24, end: 24 },
};
