import { StyleSheet, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MemberCard, Member } from './MemberCard';
import { SectionHeader } from './SectionHeader';
import { EmptyState } from './EmptyState';
import { colors, spacing } from './theme';

export interface MembersListProps {
  members: Member[];
  onMemberPress?: (member: Member) => void;
  onRemoveMember?: (member: Member) => void;
  onAddMember?: () => void;
}

export const MembersList = ({
  members,
  onMemberPress,
  onRemoveMember,
  onAddMember,
}: MembersListProps) => {
  const insets = useSafeAreaInsets();
  const organizers = members.filter((m) => m.isOrganizer);
  const regularMembers = members.filter((m) => !m.isOrganizer);

  if (members.length === 0) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <EmptyState
          icon="👥"
          title="No members yet"
          description="Start building your React Native Porto community!"
          actionLabel="Add Member"
          onAction={onAddMember}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.lg }]}
      >
        {organizers.length > 0 && (
          <View style={styles.section}>
            <SectionHeader title="Organizers" count={organizers.length} />
            <View style={styles.list}>
              {organizers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onPress={onMemberPress ? () => onMemberPress(member) : undefined}
                  onRemove={onRemoveMember ? () => onRemoveMember(member) : undefined}
                />
              ))}
            </View>
          </View>
        )}

        {regularMembers.length > 0 && (
          <View style={styles.section}>
            <SectionHeader title="Members" count={regularMembers.length} />
            <View style={styles.list}>
              {regularMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onPress={onMemberPress ? () => onMemberPress(member) : undefined}
                  onRemove={onRemoveMember ? () => onRemoveMember(member) : undefined}
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
  section: {
    marginBottom: spacing.xl,
  },
  list: {
    gap: spacing.md,
  },
});
