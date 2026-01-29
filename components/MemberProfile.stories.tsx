import type { Meta, StoryObj } from '@storybook/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MemberProfile } from './MemberProfile';

const meta = {
  title: 'Screens/MemberProfile',
  component: MemberProfile,
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
} satisfies Meta<typeof MemberProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

const pastDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(18, 30, 0, 0);
  return date;
};

const sampleEvents = [
  {
    id: '1',
    title: 'React Native Performance Workshop',
    date: pastDate(30),
    location: 'Porto Tech Hub',
    attendees: [],
  },
  {
    id: '2',
    title: 'Monthly Meetup - December',
    date: pastDate(60),
    location: 'Co-work Porto',
    attendees: [],
  },
  {
    id: '3',
    title: 'Expo Workshop',
    date: pastDate(90),
    location: 'Online',
    isOnline: true,
    attendees: [],
  },
];

export const Default: Story = {
  args: {
    member: {
      id: '1',
      name: 'Maria Santos',
      role: 'Community Lead & Senior Mobile Engineer',
      isOrganizer: true,
    },
    eventsAttended: sampleEvents,
  },
};

export const WithActions: Story = {
  args: {
    member: {
      id: '2',
      name: 'João Silva',
      role: 'React Native Developer',
    },
    eventsAttended: sampleEvents.slice(0, 2),
    onEdit: () => {},
    onRemove: () => {},
    onEventPress: () => {},
  },
};

export const Organizer: Story = {
  args: {
    member: {
      id: '1',
      name: 'Maria Santos',
      role: 'Community Lead',
      isOrganizer: true,
    },
    eventsAttended: sampleEvents,
    onEdit: () => {},
  },
};

export const NewMember: Story = {
  args: {
    member: {
      id: '3',
      name: 'Pedro Costa',
      role: 'Junior Developer',
    },
    eventsAttended: [],
  },
};
