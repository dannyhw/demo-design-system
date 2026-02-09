import { StyleSheet, View, ScrollView } from "react-native";
import { SectionHeader } from "./SectionHeader";
import { MemberCard, Member } from "./MemberCard";
import { EventCard, Event } from "./EventCard";
import { Card } from "./Card";
import { Text } from "./Text";
import { Button } from "./Button";
import { spacing } from "./theme";

export interface HomeScreenProps {
  upcomingEvents: Event[];
  recentMembers: Member[];
  totalMembers: number;
  onViewAllEvents?: () => void;
  onViewAllMembers?: () => void;
  onEventPress?: (event: Event) => void;
  onMemberPress?: (member: Member) => void;
  onRSVP?: (event: Event) => void;
  onAddMember?: () => void;
}

export const HomeScreen = ({
  upcomingEvents,
  recentMembers,
  totalMembers,
  onViewAllEvents,
  onViewAllMembers,
  onEventPress,
  onMemberPress,
  onRSVP,
}: HomeScreenProps) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      <Card variant="outlined" padding="lg">
        <Text variant="h3" weight="semibold">
          Welcome back!
        </Text>
        <Text variant="body" color="secondary" style={styles.welcomeText}>
          {totalMembers} members strong and growing. Check out what's
          happening in the community.
        </Text>
        <View style={styles.welcomeActions}>
          <Button
            variant="primary"
            size="sm"
            label="View Events"
            onPress={onViewAllEvents}
          />
          <Button
            variant="secondary"
            size="sm"
            label="Browse Members"
            onPress={onViewAllMembers}
          />
        </View>
      </Card>

      {upcomingEvents.length > 0 && (
        <View>
          <SectionHeader
            title="Upcoming Events"
            count={upcomingEvents.length}
            action="View All"
            onAction={onViewAllEvents}
          />
          <View style={styles.list}>
            {upcomingEvents.slice(0, 2).map((event) => (
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

      {recentMembers.length > 0 && (
        <View>
          <SectionHeader
            title="Recent Members"
            count={recentMembers.length}
            action="View All"
            onAction={onViewAllMembers}
          />
          <View style={styles.list}>
            {recentMembers.slice(0, 3).map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onPress={
                  onMemberPress ? () => onMemberPress(member) : undefined
                }
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
  welcomeText: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  welcomeActions: {
    flexDirection: "row",
    gap: spacing.md,
  },
  list: {
    gap: spacing.md,
  },
});
