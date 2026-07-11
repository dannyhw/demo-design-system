import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { View } from "react-native";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "React Native Porto/SectionHeader",
  component: SectionHeader,
  args: { onAction: fn() },
  argTypes: {
    title: { control: { type: "text" } },
    action: { control: { type: "text" } },
    count: { control: { type: "number", min: 0, step: 1 } },
    onAction: { action: "action pressed" },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Upcoming Events",
  },
};

export const WithCount: Story = {
  args: {
    title: "Members",
    count: 42,
  },
};

export const WithAction: Story = {
  args: {
    title: "Recent Activity",
    action: "View All",
    onAction: fn(),
  },
};

export const FullExample: Story = {
  args: {
    title: "Organizers",
    count: 3,
    action: "Manage",
    onAction: fn(),
  },
};

export const MultipleSections: Story = {
  args: { title: "Gallery" },
  render: () => (
    <View style={{ gap: 32 }}>
      <View>
        <SectionHeader
          title="Upcoming Events"
          count={2}
          action="View All"
          onAction={() => {}}
        />
      </View>
      <View>
        <SectionHeader title="Recent Members" count={5} />
      </View>
      <View>
        <SectionHeader title="Organizers" count={3} />
      </View>
    </View>
  ),
};
