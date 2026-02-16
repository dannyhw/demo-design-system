import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { MemberCard } from "./MemberCard";

const meta = {
  title: "React Native Porto/MemberCard",
  component: MemberCard,
} satisfies Meta<typeof MemberCard>;

export default meta;

type Story = StoryObj<typeof MemberCard>;

export const Default: Story = {
  args: {
    member: {
      id: "1",
      name: "João Silva",
      role: "React Native Developer",
    },
  },
};

export const Organizer: Story = {
  args: {
    member: {
      id: "2",
      name: "Maria Santos",
      role: "Senior Mobile Engineer",
      isOrganizer: true,
    },
  },
};

export const WithAvatar: Story = {
  args: {
    member: {
      id: "3",
      name: "Pedro Costa",
      role: "Tech Lead",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  },
};

export const WithRemoveAction: Story = {
  args: {
    member: {
      id: "4",
      name: "Ana Ferreira",
      role: "Mobile Developer",
    },
    onRemove: () => {},
  },
};

export const Pressable: Story = {
  args: {
    member: {
      id: "5",
      name: "Carlos Rodrigues",
      role: "Software Engineer",
    },
    onPress: () => {},
  },
};

export const MemberList: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <MemberCard
        member={{
          id: "1",
          name: "Maria Santos",
          role: "Community Lead",
          isOrganizer: true,
        }}
      />
      <MemberCard
        member={{
          id: "2",
          name: "João Silva",
          role: "React Native Developer",
        }}
      />
      <MemberCard
        member={{
          id: "3",
          name: "Pedro Costa",
          role: "Mobile Engineer",
        }}
      />
    </View>
  ),
};
