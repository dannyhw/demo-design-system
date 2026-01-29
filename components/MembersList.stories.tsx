import type { Meta, StoryObj } from '@storybook/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MembersList } from './MembersList';

const meta = {
  title: 'Screens/MembersList',
  component: MembersList,
  decorators: [
    (Story) => (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }} edges={['top']}>
        <Story />
      </SafeAreaView>
    ),
  ],
  parameters: {
    noSafeArea: true,
  },
} satisfies Meta<typeof MembersList>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleMembers = [
  { id: '1', name: 'Maria Santos', role: 'Community Lead', isOrganizer: true },
  { id: '2', name: 'João Silva', role: 'Senior Mobile Engineer', isOrganizer: true },
  { id: '3', name: 'Pedro Costa', role: 'React Native Developer' },
  { id: '4', name: 'Ana Ferreira', role: 'Software Engineer' },
  { id: '5', name: 'Carlos Rodrigues', role: 'Tech Lead' },
  { id: '6', name: 'Sofia Martins', role: 'Mobile Developer' },
];

export const Default: Story = {
  args: {
    members: sampleMembers,
  },
};

export const WithActions: Story = {
  args: {
    members: sampleMembers,
    onMemberPress: () => {},
    onRemoveMember: () => {},
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
    onAddMember: () => {},
  },
};
