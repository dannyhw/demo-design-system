import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { MembersList } from "./MembersList";

const meta = {
  title: "Screens/MembersList",
  component: MembersList,
  parameters: {
    noSafeArea: true,
  },
  args: {
    onMemberPress: fn(),
    onRemoveMember: fn(),
    onAddMember: fn(),
  },
  argTypes: {
    members: { control: { type: "object" } },
    onMemberPress: { action: "member pressed" },
    onRemoveMember: { action: "member removed" },
    onAddMember: { action: "add member" },
  },
} satisfies Meta<typeof MembersList>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleMembers = [
  { id: "1", name: "Maria Santos", role: "Community Lead", isOrganizer: true },
  {
    id: "2",
    name: "João Silva",
    role: "Senior Mobile Engineer",
    isOrganizer: true,
  },
  { id: "3", name: "Pedro Costa", role: "React Native Developer" },
  { id: "4", name: "Ana Ferreira", role: "Software Engineer" },
  { id: "5", name: "Carlos Rodrigues", role: "Tech Lead" },
  { id: "6", name: "Sofia Martins", role: "Mobile Developer" },
];

export const Default: Story = {
  args: {
    members: sampleMembers,
  },
};

export const WithActions: Story = {
  args: {
    members: sampleMembers,
    onMemberPress: fn(),
    onRemoveMember: fn(),
  },
};

export const OnlyOrganizers: Story = {
  args: {
    members: sampleMembers.filter((m) => m.isOrganizer),
  },
};

export const OnlyMembers: Story = {
  args: {
    members: sampleMembers.filter((m) => !m.isOrganizer),
  },
};

export const Empty: Story = {
  args: {
    members: [],
    onAddMember: fn(),
  },
};
