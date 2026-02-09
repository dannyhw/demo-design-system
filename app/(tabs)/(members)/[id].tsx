import { useLocalSearchParams } from "expo-router";
import { MemberProfile } from "../../../components";
import { members, eventsAttendedByMember } from "../../../mocks/mock-data";

export default function MemberProfilePage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const member = members.find((m) => m.id === id);

  if (!member) {
    return null;
  }

  return (
    <MemberProfile
      member={member}
      eventsAttended={eventsAttendedByMember[member.id] ?? []}
    />
  );
}
