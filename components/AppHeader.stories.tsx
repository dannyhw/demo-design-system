import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { AppHeader } from './AppHeader';
import { IconButton } from './IconButton';

const meta = {
  title: 'React Native Porto/AppHeader',
  component: AppHeader,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {},
};

export const WithSubtitle: Story = {
  args: {
    subtitle: 'Mobile Development Community',
  },
};

export const WithBackButton: Story = {
  args: {
    title: 'Member Profile',
    showBack: true,
    onBack: () => {},
  },
};

export const WithRightAction: Story = {
  args: {
    rightAction: <IconButton icon="+" size="sm" accessibilityLabel="Add" />,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Events',
    subtitle: '3 upcoming',
  },
};

export const FullHeader: Story = {
  args: {
    title: 'Members',
    subtitle: '42 members',
    showBack: true,
    onBack: () => {},
    rightAction: <IconButton icon="+" size="sm" accessibilityLabel="Add member" />,
  },
};
