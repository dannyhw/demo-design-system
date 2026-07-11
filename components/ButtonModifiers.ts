type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export const getButtonModifiers = (_options: {
  variant: Variant;
  size: Size;
  fullWidth: boolean;
  isDisabled: boolean;
}) => [];
