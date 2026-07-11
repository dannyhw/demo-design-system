import { StyleSheet, View, ScrollView } from "react-native";
import { SectionList } from "@legendapp/list/section-list";
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

interface MemberSection {
  title: string;
  data: Member[];
}

export const MembersList = ({
  members,
  onMemberPress,
  onRemoveMember,
  onAddMember,
}: MembersListProps) => {
  const organizers = members.filter((m) => m.isOrganizer);
  const regularMembers = members.filter((m) => !m.isOrganizer);
  const sections: MemberSection[] = [
    ...(organizers.length > 0
      ? [{ title: "Organizers", data: organizers }]
      : []),
    ...(regularMembers.length > 0
      ? [{ title: "Members", data: regularMembers }]
      : []),
  ];

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
    <SectionList<Member, MemberSection>
      sections={sections}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      keyExtractor={(member) => member.id}
      renderSectionHeader={({ section }) => (
        <SectionHeader title={section.title} count={section.data.length} />
      )}
      renderItem={({ item: member }) => (
        <MemberCard
          member={member}
          onPress={onMemberPress ? () => onMemberPress(member) : undefined}
          onRemove={onRemoveMember ? () => onRemoveMember(member) : undefined}
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
  itemSeparator: { height: spacing.md },
  sectionSeparator: { height: spacing.xl },
});
