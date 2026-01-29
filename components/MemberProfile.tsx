import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar } from './Avatar';
import { Text } from './Text';
import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';
import { Divider } from './Divider';
import { SectionHeader } from './SectionHeader';
import { EventCard, Event } from './EventCard';
import { Member } from './MemberCard';
import { colors, spacing } from './theme';

export interface MemberProfileProps {
  member: Member;
  eventsAttended?: Event[];
  onEdit?: () => void;
  onRemove?: () => void;
  onEventPress?: (event: Event) => void;
}

export const MemberProfile = ({
  member,
  eventsAttended = [],
  onEdit,
  onRemove,
  onEventPress,
}: MemberProfileProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
        <Avatar
          name={member.name}
          source={member.avatar ? { uri: member.avatar } : undefined}
          size="xl"
        />
        <View style={styles.headerInfo}>
          <View style={styles.nameRow}>
            <Text variant="h2" weight="bold">
              {member.name}
            </Text>
            {member.isOrganizer && (
              <Badge variant="accent" label="Organizer" />
            )}
          </View>
          {member.role && (
            <Text variant="body" color="secondary">
              {member.role}
            </Text>
          )}
        </View>
      </View>

      {(onEdit || onRemove) && (
        <View style={styles.actions}>
          {onEdit && (
            <Button
              variant="secondary"
              size="sm"
              label="Edit Profile"
              onPress={onEdit}
            />
          )}
          {onRemove && (
            <Button
              variant="ghost"
              size="sm"
              label="Remove"
              onPress={onRemove}
            />
          )}
        </View>
      )}

      <Divider spacing="lg" />

      <Card variant="outlined" padding="md">
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text variant="h2" weight="bold">
              {eventsAttended.length}
            </Text>
            <Text variant="caption" color="secondary">
              Events Attended
            </Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text variant="h2" weight="bold">
              {member.isOrganizer ? 'Yes' : 'No'}
            </Text>
            <Text variant="caption" color="secondary">
              Organizer
            </Text>
          </View>
        </View>
      </Card>

      {eventsAttended.length > 0 && (
        <View style={styles.eventsSection}>
          <SectionHeader title="Events Attended" count={eventsAttended.length} />
          <View style={styles.eventsList}>
            {eventsAttended.slice(0, 3).map((event) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  headerInfo: {
    flex: 1,
    marginLeft: spacing.lg,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  eventsSection: {
    marginTop: spacing.xl,
  },
  eventsList: {
    gap: spacing.md,
  },
});
