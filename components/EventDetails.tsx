import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Card } from "./Card";
import type { Event } from "./EventCard";
import { SectionHeader } from "./SectionHeader";
import { Text } from "./Text";
import { spacing } from "./theme";

export interface EventDetailsProps {
  event: Event;
  onAttendeePress?: (memberId: string) => void;
}

export const EventDetails = ({ event, onAttendeePress }: EventDetailsProps) => {
  const attendeeCount = event.attendees?.length ?? 0;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      <View style={styles.titleRow}>
        <Text variant="h1" numberOfLines={2}>
          {event.title}
        </Text>
        {event.isOnline && <Badge variant="accent" label="Online" />}
      </View>

      <Text color="secondary">
        {event.date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        {` at ${event.date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })}`}
      </Text>
      <Text color="secondary" style={styles.location}>
        {event.location}
      </Text>

      {event.description && (
        <Card variant="outlined" padding="lg">
          <Text>{event.description}</Text>
        </Card>
      )}

      <View style={styles.attendeesSection}>
        <SectionHeader title="Attendees" count={attendeeCount} />
        <View style={styles.attendees}>
          {event.attendees?.map((attendee, index) => (
            <View key={`${attendee.name}-${index}`} style={styles.attendee}>
              <Pressable
                accessibilityRole={attendee.id ? "link" : undefined}
                accessibilityLabel={
                  attendee.id ? `View ${attendee.name}'s profile` : undefined
                }
                disabled={!attendee.id || !onAttendeePress}
                onPress={() => {
                  if (attendee.id) onAttendeePress?.(attendee.id);
                }}
                style={({ pressed }) => pressed && styles.avatarPressed}
              >
                <Avatar
                  name={attendee.name}
                  source={
                    attendee.avatar ? { uri: attendee.avatar } : undefined
                  }
                  size="md"
                />
              </Pressable>
              <Text>{attendee.name}</Text>
            </View>
          ))}
          {attendeeCount === 0 && (
            <Text color="secondary">No attendees yet.</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: { padding: spacing.lg, gap: spacing.lg },
  titleRow: { gap: spacing.sm },
  location: { marginTop: -spacing.sm },
  attendeesSection: { marginTop: spacing.sm },
  attendees: { gap: spacing.md },
  attendee: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  avatarPressed: { opacity: 0.7 },
});
