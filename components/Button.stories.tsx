import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Button } from "./Button";
import { Column, Host } from "@expo/ui";
import { Platform, View } from "react-native";

const meta = {
  title: "Design System/Button",
  component: Button,
  args: { onPress: fn() },
  argTypes: {
    label: { control: { type: "text" } },
    variant: {
      options: ["primary", "secondary", "ghost", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
    loading: { control: { type: "boolean" } },
    fullWidth: { control: { type: "boolean" } },
    icon: { table: { disable: true } },
    onPress: { action: "pressed" },
  },
  render: (args) => {
    if (Platform.OS === "android") {
      // this is needed because otherwise the buttons jump into view
      return (
        <View
          style={{
            height: "25%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button {...args} />
        </View>
      );
    }
    return (
      // this is needed because otherwise the buttons jump into view
      <Host
        style={{
          height: "25%",
          width: "100%",
        }}
      >
        <Column alignment="center">
          <Button {...args} />
        </Column>
      </Host>
    );
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Learn More",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Cancel",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Delete",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
};

export const Loading: Story = {
  args: {
    label: "Loading...",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
};

export const AllVariants: Story = {
  args: { label: "Gallery", fullWidth: true },
  render: (args) => (
    <View style={{ width: "100%", gap: 12, alignItems: "center" }}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="danger" label="Danger" />
    </View>
  ),
};
