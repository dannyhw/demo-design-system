import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { View } from "react-native";
import { Card } from "./Card";
import { Text } from "./Text";

const meta = {
  title: "Design System/Card",
  component: Card,
  args: { onPress: fn() },
  argTypes: {
    variant: {
      options: ["default", "elevated", "outlined"],
      control: { type: "radio" },
    },
    padding: {
      options: ["none", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    onPress: { action: "pressed" },
    style: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    padding: "md",
  },
  render: (args) => (
    <Card {...args}>
      <Text variant="h3">Card Title</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This is a default card with some content inside.
      </Text>
    </Card>
  ),
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    padding: "md",
  },
  render: (args) => (
    <Card {...args}>
      <Text variant="h3">Elevated Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This card has a shadow for depth.
      </Text>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    padding: "md",
  },
  render: (args) => (
    <Card {...args}>
      <Text variant="h3">Outlined Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This card has a transparent background.
      </Text>
    </Card>
  ),
};

export const Pressable: Story = {
  args: {
    variant: "default",
    padding: "md",
  },
  render: (args) => (
    <Card {...args}>
      <Text variant="h3">Pressable Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        Tap me to trigger an action.
      </Text>
    </Card>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Card padding="none">
        <View style={{ backgroundColor: "#333", padding: 16 }}>
          <Text>No padding</Text>
        </View>
      </Card>
      <Card padding="sm">
        <Text>Small padding</Text>
      </Card>
      <Card padding="md">
        <Text>Medium padding</Text>
      </Card>
      <Card padding="lg">
        <Text>Large padding</Text>
      </Card>
    </View>
  ),
};
