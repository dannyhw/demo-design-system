import { StyleSheet, View, ScrollView } from "react-native";
import { SectionList } from "@legendapp/list/section-list";
import { EventCard, Event } from "./EventCard";
import { SectionHeader } from "./SectionHeader";
import { EmptyState } from "./EmptyState";
import { spacing } from "./theme";

export interface EventsListProps {
  events: Event[];
  onEventPress?: (event: Event) => void;
  onRSVP?: (event: Event) => void;
  onCreateEvent?: () => void;
}

interface EventSection {
  title: string;
  data: Event[];
}

const isUpcoming = (date: Date) => date.getTime() > Date.now();
const isPast = (date: Date) => date.getTime() <= Date.now();

export const EventsList = ({
  events,
  onEventPress,
  onRSVP,
  onCreateEvent,
}: EventsListProps) => {
  const upcomingEvents = events.filter((e) => isUpcoming(e.date));
  const pastEvents = events.filter((e) => isPast(e.date));
  const sections: EventSection[] = [
    ...(upcomingEvents.length > 0
      ? [{ title: "Upcoming", data: upcomingEvents }]
      : []),
    ...(pastEvents.length > 0
      ? [{ title: "Past Events", data: pastEvents }]
      : []),
  ];

  if (events.length === 0) {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <EmptyState
          icon="calendar"
          title="No events yet"
          description="Plan your first React Native Porto meetup!"
          actionLabel="Create Event"
          onAction={onCreateEvent}
        />
      </ScrollView>
    );
  }

  return (
    <SectionList<Event, EventSection>
      sections={sections}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      keyExtractor={(event) => event.id}
      renderSectionHeader={({ section }) => (
        <SectionHeader title={section.title} count={section.data.length} />
      )}
      renderItem={({ item: event, section }) => (
        <EventCard
          event={event}
          onPress={onEventPress ? () => onEventPress(event) : undefined}
          onRSVP={
            section.title === "Upcoming" && onRSVP
              ? () => onRSVP(event)
              : undefined
          }
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      SectionSeparatorComponent={SectionSeparator}
      stickySectionHeadersEnabled={false}
      recycleItems
    />
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;
const SectionSeparator = () => <View style={styles.sectionSeparator} />;

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
  },
  itemSeparator: { height: spacing.lg },
  sectionSeparator: { height: spacing.xl },
});
