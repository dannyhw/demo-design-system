import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { Input } from './Input';
import { Text } from './Text';

const meta = {
  title: 'Design System/Input',
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    hint: 'Must be at least 8 characters',
    secureTextEntry: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    placeholder: 'yoursite.com',
    prefix: <Text color="tertiary">https://</Text>,
  },
};

export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('Clear me');
    return (
      <Input
        label="Search"
        placeholder="Search..."
        value={value}
        onChangeText={setValue}
        onClear={() => setValue('')}
      />
    );
  },
};

export const FormExample: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" placeholder="john@example.com" keyboardType="email-address" />
      <Input label="Bio" placeholder="Tell us about yourself..." multiline numberOfLines={3} />
    </View>
  ),
};
