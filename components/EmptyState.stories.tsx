import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "React Native Porto/EmptyState",
  component: EmptyState,
  args: { onAction: fn() },
  argTypes: {
    icon: {
      options: [
        "tray.fill",
        "person.2.fill",
        "calendar",
        "magnifyingglass",
        "exclamationmark",
        "party.popper.fill",
      ],
      control: { type: "select" },
    },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    actionLabel: { control: { type: "text" } },
    onAction: { action: "action pressed" },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "No items found",
    description: "Try adjusting your search or filters.",
  },
};

export const NoMembers: Story = {
  args: {
    icon: "person.2.fill",
    title: "No members yet",
    description: "Be the first to join the React Native Porto community!",
    actionLabel: "Add Member",
    onAction: fn(),
  },
};

export const NoEvents: Story = {
  args: {
    icon: "calendar",
    title: "No upcoming events",
    description: "Check back soon for new meetups and workshops.",
    actionLabel: "Create Event",
    onAction: fn(),
  },
};

export const NoSearchResults: Story = {
  args: {
    icon: "magnifyingglass",
    title: "No results found",
    description: "We couldn't find any members matching your search.",
  },
};

export const ErrorState: Story = {
  args: {
    icon: "exclamationmark",
    title: "Something went wrong",
    description: "We couldn't load the data. Please try again.",
    actionLabel: "Retry",
    onAction: fn(),
  },
};

export const Welcome: Story = {
  args: {
    icon: "party.popper.fill",
    title: "Welcome to React Native Porto!",
    description: "Join our community of mobile developers in Porto.",
    actionLabel: "Get Started",
    onAction: fn(),
  },
};
