import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { IconButton } from './IconButton';

const meta = {
  title: 'Design System/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: '+',
    accessibilityLabel: 'Add',
  },
};

export const Ghost: Story = {
  args: {
    icon: '×',
    variant: 'ghost',
    accessibilityLabel: 'Close',
  },
};

export const Small: Story = {
  args: {
    icon: '←',
    size: 'sm',
    accessibilityLabel: 'Back',
  },
};

export const Large: Story = {
  args: {
    icon: '→',
    size: 'lg',
    accessibilityLabel: 'Next',
  },
};

export const Disabled: Story = {
  args: {
    icon: '+',
    disabled: true,
    accessibilityLabel: 'Add (disabled)',
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <IconButton icon="+" size="sm" accessibilityLabel="Small" />
      <IconButton icon="+" size="md" accessibilityLabel="Medium" />
      <IconButton icon="+" size="lg" accessibilityLabel="Large" />
    </View>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <IconButton icon="+" accessibilityLabel="Add" />
      <IconButton icon="×" accessibilityLabel="Close" />
      <IconButton icon="←" accessibilityLabel="Back" />
      <IconButton icon="→" accessibilityLabel="Forward" />
      <IconButton icon="⋮" accessibilityLabel="More" />
    </View>
  ),
};
