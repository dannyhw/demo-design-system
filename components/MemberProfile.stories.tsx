import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { MemberProfile } from './MemberProfile';

const meta = {
  title: 'Screens/MemberProfile',
  component: MemberProfile,
  parameters: {
    noSafeArea: true,
  },
  args: {
    onEdit: fn(),
    onRemove: fn(),
    onEventPress: fn(),
  },
  argTypes: {
    member: { control: { type: 'object' } },
    eventsAttended: { control: { type: 'object' } },
    onEdit: { action: 'edit' },
    onRemove: { action: 'remove' },
    onEventPress: { action: 'event pressed' },
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
    onEdit: fn(),
    onRemove: fn(),
    onEventPress: fn(),
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
    onEdit: fn(),
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
