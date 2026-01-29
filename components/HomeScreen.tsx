import { StyleSheet, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppHeader } from './AppHeader';
import { SectionHeader } from './SectionHeader';
import { MemberCard, Member } from './MemberCard';
import { EventCard, Event } from './EventCard';
import { Card } from './Card';
import { Text } from './Text';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { colors, spacing } from './theme';

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
  onAddMember,
}: HomeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <AppHeader
        subtitle="Mobile Development Community"
        rightAction={
          <IconButton
            icon="+"
            size="sm"
            onPress={onAddMember}
            accessibilityLabel="Add member"
          />
        }
        />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Card variant="outlined" padding="lg" style={styles.welcomeCard}>
          <Text variant="h3" weight="semibold">
            Welcome back!
          </Text>
          <Text variant="body" color="secondary" style={styles.welcomeText}>
            {totalMembers} members strong and growing. Check out what's happening in the community.
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
          <View style={styles.section}>
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
          <View style={styles.section}>
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
                  onPress={onMemberPress ? () => onMemberPress(member) : undefined}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
  },
  welcomeCard: {
    marginBottom: spacing.xl,
  },
  welcomeText: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  welcomeActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  list: {
    gap: spacing.md,
  },
});
