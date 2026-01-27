import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Divider } from './Divider';
import { Text } from './Text';

const meta = {
  title: 'Design System/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <View>
      <Text>Content above</Text>
      <Divider />
      <Text>Content below</Text>
    </View>
  ),
};

export const NoSpacing: Story = {
  render: () => (
    <View>
      <Text>Content above</Text>
      <Divider spacing="none" />
      <Text>Content below</Text>
    </View>
  ),
};

export const SmallSpacing: Story = {
  render: () => (
    <View>
      <Text>Content above</Text>
      <Divider spacing="sm" />
      <Text>Content below</Text>
    </View>
  ),
};

export const LargeSpacing: Story = {
  render: () => (
    <View>
      <Text>Content above</Text>
      <Divider spacing="lg" />
      <Text>Content below</Text>
    </View>
  ),
};
