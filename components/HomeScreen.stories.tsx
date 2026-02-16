import type { Meta, StoryObj } from '@storybook/react';
import { HomeScreen } from './HomeScreen';

const meta = {
  title: 'Screens/HomeScreen',
  component: HomeScreen,
  parameters: {
    noSafeArea: true,
  },
} satisfies Meta<typeof HomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

const futureDate = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(18, 30, 0, 0);
  return date;
};

const sampleEvents = [
  {
    id: '1',
    title: 'React Native Performance Workshop',
    description: 'Deep dive into performance optimization.',
    date: futureDate(7),
    location: 'Porto Tech Hub',
    attendees: [{ name: 'João' }, { name: 'Maria' }, { name: 'Pedro' }],
    maxAttendees: 30,
  },
  {
    id: '2',
    title: 'Expo SDK Deep Dive',
    description: 'Exploring the latest Expo features.',
    date: futureDate(14),
    location: 'Online',
    isOnline: true,
    attendees: [{ name: 'Ana' }, { name: 'Carlos' }],
  },
];

const sampleMembers = [
  { id: '1', name: 'Maria Santos', role: 'Community Lead', isOrganizer: true },
  { id: '2', name: 'João Silva', role: 'React Native Developer' },
  { id: '3', name: 'Pedro Costa', role: 'Mobile Engineer' },
  { id: '4', name: 'Ana Ferreira', role: 'Software Engineer' },
  { id: '5', name: 'Carlos Rodrigues', role: 'Tech Lead' },
];

export const Default: Story = {
  args: {
    upcomingEvents: sampleEvents,
    recentMembers: sampleMembers,
    totalMembers: 42,
  },
};

export const WithAllActions: Story = {
  args: {
    upcomingEvents: sampleEvents,
    recentMembers: sampleMembers,
    totalMembers: 42,
    onViewAllEvents: () => {},
    onViewAllMembers: () => {},
    onEventPress: () => {},
    onMemberPress: () => {},
    onRSVP: () => {},
    onAddMember: () => {},
  },
};

export const NoEvents: Story = {
  args: {
    upcomingEvents: [],
    recentMembers: sampleMembers,
    totalMembers: 42,
  },
};

export const NoMembers: Story = {
  args: {
    upcomingEvents: sampleEvents,
    recentMembers: [],
    totalMembers: 0,
  },
};

export const EmptyCommunity: Story = {
  args: {
    upcomingEvents: [],
    recentMembers: [],
    totalMembers: 0,
    onAddMember: () => {},
  },
};
