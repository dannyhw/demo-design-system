import type { Member } from "../components/MemberCard";
import type { Event } from "../components/EventCard";

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

export const members: Member[] = [
  { id: "1", name: "Maria Santos", role: "Community Lead", isOrganizer: true },
  {
    id: "2",
    name: "João Silva",
    role: "Senior Mobile Engineer",
    isOrganizer: true,
  },
  { id: "3", name: "Pedro Costa", role: "React Native Developer" },
  { id: "4", name: "Ana Ferreira", role: "Software Engineer" },
  { id: "5", name: "Carlos Rodrigues", role: "Tech Lead" },
  { id: "6", name: "Sofia Martins", role: "Mobile Developer" },
];

export const events: Event[] = [
  {
    id: "1",
    title: "React Native Performance Workshop",
    description: "Deep dive into performance optimization techniques.",
    date: futureDate(7),
    location: "Porto Tech Hub",
    attendees: [{ name: "João" }, { name: "Maria" }, { name: "Pedro" }],
    maxAttendees: 30,
  },
  {
    id: "2",
    title: "Expo SDK 54 Deep Dive",
    description: "Exploring the latest Expo features and best practices.",
    date: futureDate(14),
    location: "Online",
    isOnline: true,
    attendees: [{ name: "Ana" }, { name: "Carlos" }],
  },
  {
    id: "3",
    title: "Monthly Meetup - January",
    description: "Our first meetup of the year!",
    date: pastDate(15),
    location: "Co-work Porto",
    attendees: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
  },
  {
    id: "4",
    title: "React Native Animation Workshop",
    date: pastDate(45),
    location: "Porto Tech Hub",
    attendees: [{ name: "X" }, { name: "Y" }],
  },
];

export const eventsAttendedByMember: Record<string, Event[]> = {
  "1": [events[2], events[3]],
  "2": [events[2]],
  "3": [events[3]],
  "4": [],
  "5": [events[2], events[3]],
  "6": [],
};
