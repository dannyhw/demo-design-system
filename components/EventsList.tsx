import { StyleSheet, View, ScrollView } from "react-native";
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
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      {upcomingEvents.length > 0 && (
        <View>
          <SectionHeader title="Upcoming" count={upcomingEvents.length} />
          <View style={styles.list}>
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onPress={onEventPress ? () => onEventPress(event) : undefined}
                onRSVP={onRSVP ? () => onRSVP(event) : undefined}
              />
            ))}
          </View>
        </View>
      )}

      {pastEvents.length > 0 && (
        <View>
          <SectionHeader title="Past Events" count={pastEvents.length} />
          <View style={styles.list}>
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onPress={onEventPress ? () => onEventPress(event) : undefined}
              />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    gap: spacing.xl,
  },
  list: {
    gap: spacing.lg,
  },
});
