import type { Meta, StoryObj } from '@storybook/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddMemberForm } from './AddMemberForm';

const meta = {
  title: 'Screens/AddMemberForm',
  component: AddMemberForm,
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
