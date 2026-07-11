import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  title: "Design System/Divider",
  component: Divider,
  argTypes: {
    spacing: {
      options: ["none", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    style: { table: { disable: true } },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spacing: "md",
  },
};

export const NoSpacing: Story = {
  args: {
    spacing: "none",
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: "sm",
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: "lg",
  },
};
