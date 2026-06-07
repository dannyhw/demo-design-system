import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { AddMemberForm } from "./AddMemberForm";

const meta = {
  title: "Screens/AddMemberForm",
  component: AddMemberForm,
  parameters: {
    noSafeArea: true,
  },
  args: {
    onSubmit: fn(),
  },
  argTypes: {
    isLoading: { control: { type: "boolean" } },
    onSubmit: { action: "submitted" },
    onCancel: { action: "cancelled" },
  },
} satisfies Meta<typeof AddMemberForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
  },
};

export const WithCancel: Story = {
  args: {
    onCancel: fn(),
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    onCancel: fn(),
    isLoading: true,
  },
};
