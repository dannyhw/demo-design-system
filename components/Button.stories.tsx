import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Continue',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Learn More',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Cancel',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Delete',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="danger" label="Danger" />
    </View>
  ),
};
