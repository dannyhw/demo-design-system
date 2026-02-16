import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Avatar } from './Avatar';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
    size: 'lg',
  },
};

export const WithImage: Story = {
  args: {
    name: 'Jane Smith',
    source: { uri: 'https://i.pravatar.cc/150?img=1' },
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    name: 'Small Avatar',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'Medium Avatar',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'Large Avatar',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'XL Avatar',
    size: 'xl',
  },
};

export const WithBorder: Story = {
  args: {
    name: 'Bordered Avatar',
    size: 'lg',
    showBorder: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
    </View>
  ),
};

export const DifferentNames: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Avatar name="Alice Brown" size="lg" />
      <Avatar name="Bob Wilson" size="lg" />
      <Avatar name="Carol Davis" size="lg" />
      <Avatar name="Dan Miller" size="lg" />
    </View>
  ),
};
