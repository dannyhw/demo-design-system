import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'React Native Porto/SectionHeader',
  component: SectionHeader,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: 'Upcoming Events',
  },
};

export const WithCount: Story = {
  args: {
    title: 'Members',
    count: 42,
  },
};

export const WithAction: Story = {
  args: {
    title: 'Recent Activity',
    action: 'View All',
    onAction: () => {},
  },
};

export const FullExample: Story = {
  args: {
    title: 'Organizers',
    count: 3,
    action: 'Manage',
    onAction: () => {},
  },
};

export const MultipleSections: Story = {
  render: () => (
    <View style={{ gap: 32 }}>
      <View>
        <SectionHeader title="Upcoming Events" count={2} action="View All" onAction={() => {}} />
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
