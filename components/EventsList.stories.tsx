import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { EventsList } from './EventsList';

const meta = {
  title: 'Screens/EventsList',
  component: EventsList,
  parameters: {
    noSafeArea: true,
  },
  args: {
    onEventPress: fn(),
    onRSVP: fn(),
    onCreateEvent: fn(),
  },
  argTypes: {
    events: { control: { type: 'object' } },
    onEventPress: { action: 'event pressed' },
    onRSVP: { action: 'rsvp' },
    onCreateEvent: { action: 'create event' },
  },
} satisfies Meta<typeof EventsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const futureDate = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(18, 30, 0, 0);
  return date;
};

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
    description: 'Deep dive into performance optimization techniques.',
    date: futureDate(7),
    location: 'Porto Tech Hub',
    attendees: [{ name: 'João' }, { name: 'Maria' }, { name: 'Pedro' }],
    maxAttendees: 30,
  },
  {
    id: '2',
    title: 'Expo SDK 54 Deep Dive',
    description: 'Exploring the latest Expo features and best practices.',
    date: futureDate(14),
    location: 'Online',
    isOnline: true,
    attendees: [{ name: 'Ana' }, { name: 'Carlos' }],
  },
  {
    id: '3',
    title: 'Monthly Meetup - January',
    description: 'Our first meetup of the year!',
    date: pastDate(15),
    location: 'Co-work Porto',
    attendees: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }],
  },
  {
    id: '4',
    title: 'React Native Animation Workshop',
    date: pastDate(45),
    location: 'Porto Tech Hub',
    attendees: [{ name: 'X' }, { name: 'Y' }],
  },
];

export const Default: Story = {
  args: {
    events: sampleEvents,
  },
};

export const WithActions: Story = {
  args: {
    events: sampleEvents,
    onEventPress: fn(),
    onRSVP: fn(),
  },
};

export const OnlyUpcoming: Story = {
  args: {
    events: sampleEvents.filter((e) => e.date.getTime() > Date.now()),
    onRSVP: fn(),
  },
};

export const OnlyPast: Story = {
  args: {
    events: sampleEvents.filter((e) => e.date.getTime() <= Date.now()),
  },
};

export const Empty: Story = {
  args: {
    events: [],
    onCreateEvent: fn(),
  },
};
