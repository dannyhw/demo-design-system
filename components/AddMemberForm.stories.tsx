import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { AddMemberForm } from './AddMemberForm';

const meta = {
  title: 'Screens/AddMemberForm',
  component: AddMemberForm,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AddMemberForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Submit:', data),
  },
};

export const WithCancel: Story = {
  args: {
    onSubmit: (data) => console.log('Submit:', data),
    onCancel: () => console.log('Cancel'),
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (data) => console.log('Submit:', data),
    onCancel: () => console.log('Cancel'),
    isLoading: true,
  },
};
