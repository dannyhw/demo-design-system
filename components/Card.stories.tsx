import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Card } from './Card';
import { Text } from './Text';

const meta = {
  title: 'Design System/Card',
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Text variant="h3">Card Title</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This is a default card with some content inside.
      </Text>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <Text variant="h3">Elevated Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This card has a shadow for depth.
      </Text>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined">
      <Text variant="h3">Outlined Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        This card has a transparent background.
      </Text>
    </Card>
  ),
};

export const Pressable: Story = {
  render: () => (
    <Card onPress={() => {}}>
      <Text variant="h3">Pressable Card</Text>
      <Text color="secondary" style={{ marginTop: 8 }}>
        Tap me to trigger an action.
      </Text>
    </Card>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Card padding="none">
        <View style={{ backgroundColor: '#333', padding: 16 }}>
          <Text>No padding</Text>
        </View>
      </Card>
      <Card padding="sm">
        <Text>Small padding</Text>
      </Card>
      <Card padding="md">
        <Text>Medium padding</Text>
      </Card>
      <Card padding="lg">
        <Text>Large padding</Text>
      </Card>
    </View>
  ),
};
