import { StyleSheet, View, ScrollView } from "react-native";
import { MemberCard, Member } from "./MemberCard";
import { SectionHeader } from "./SectionHeader";
import { EmptyState } from "./EmptyState";
import { spacing } from "./theme";

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
  const organizers = members.filter((m) => m.isOrganizer);
  const regularMembers = members.filter((m) => !m.isOrganizer);

  if (members.length === 0) {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <EmptyState
          icon="person.2.fill"
          title="No members yet"
          description="Start building your React Native Porto community!"
          actionLabel="Add Member"
          onAction={onAddMember}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
    >
      {organizers.length > 0 && (
        <View>
          <SectionHeader title="Organizers" count={organizers.length} />
          <View style={styles.list}>
            {organizers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onPress={
                  onMemberPress ? () => onMemberPress(member) : undefined
                }
                onRemove={
                  onRemoveMember ? () => onRemoveMember(member) : undefined
                }
              />
            ))}
          </View>
        </View>
      )}

      {regularMembers.length > 0 && (
        <View>
          <SectionHeader title="Members" count={regularMembers.length} />
          <View style={styles.list}>
            {regularMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onPress={
                  onMemberPress ? () => onMemberPress(member) : undefined
                }
                onRemove={
                  onRemoveMember ? () => onRemoveMember(member) : undefined
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
  list: {
    gap: spacing.md,
  },
});
