import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { EventCard } from './EventCard';

const meta = {
  title: 'React Native Porto/EventCard',
  component: EventCard,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof EventCard>;

const baseEvent = {
  id: '1',
  title: 'React Native Performance Workshop',
  description: 'Learn advanced techniques for optimizing your React Native apps.',
  date: new Date('2025-02-15T18:30:00'),
  location: 'Porto Tech Hub',
  attendees: [
    { name: 'João Silva' },
    { name: 'Maria Santos' },
    { name: 'Pedro Costa' },
  ],
  maxAttendees: 30,
};

export const Default: Story = {
  args: {
    event: baseEvent,
  },
};

export const WithRSVP: Story = {
  args: {
    event: baseEvent,
    onRSVP: () => {},
  },
};

export const OnlineEvent: Story = {
  args: {
    event: {
      ...baseEvent,
      id: '2',
      title: 'Building Cross-Platform Apps',
      location: 'Zoom Meeting',
      isOnline: true,
    },
    onRSVP: () => {},
  },
};

export const AlmostFull: Story = {
  args: {
    event: {
      ...baseEvent,
      id: '3',
      attendees: Array(27).fill({ name: 'Attendee' }),
      maxAttendees: 30,
    },
    onRSVP: () => {},
  },
};

export const NoDescription: Story = {
  args: {
    event: {
      id: '4',
      title: 'Monthly Meetup',
      date: new Date('2025-03-01T19:00:00'),
      location: 'Co-work Porto',
      attendees: [],
    },
  },
};

export const Pressable: Story = {
  args: {
    event: baseEvent,
    onPress: () => {},
  },
};

export const EventList: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <EventCard
        event={{
          id: '1',
          title: 'React Native Performance Workshop',
          description: 'Deep dive into performance optimization.',
          date: new Date('2025-02-15T18:30:00'),
          location: 'Porto Tech Hub',
          attendees: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
          maxAttendees: 30,
        }}
        onRSVP={() => {}}
      />
      <EventCard
        event={{
          id: '2',
          title: 'Expo SDK Deep Dive',
          description: 'Exploring the latest Expo features.',
          date: new Date('2025-03-01T19:00:00'),
          location: 'Online',
          isOnline: true,
          attendees: [{ name: 'D' }, { name: 'E' }],
        }}
        onRSVP={() => {}}
      />
    </View>
  ),
};
