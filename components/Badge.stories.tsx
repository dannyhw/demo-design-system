import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Badge } from "./Badge";

const meta = {
  title: "Design System/Badge",
  component: Badge,
  argTypes: {
    label: { control: { type: "text" } },
    variant: {
      options: ["default", "success", "warning", "error", "accent"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default",
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    label: "Active",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Pending",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Failed",
    variant: "error",
  },
};

export const Accent: Story = {
  args: {
    label: "New",
    variant: "accent",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "sm",
  },
};

export const AllVariants: Story = {
  args: { label: "Gallery" },
  render: () => (
    <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
      <Badge label="Default" variant="default" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Accent" variant="accent" />
    </View>
  ),
};

export const MeetupBadges: Story = {
  args: { label: "Gallery" },
  render: () => (
    <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
      <Badge label="Organizer" variant="accent" />
      <Badge label="Speaker" variant="success" />
      <Badge label="Member" variant="default" />
      <Badge label="New" variant="warning" />
    </View>
  ),
};
