import { useRouter } from "expo-router";
import { MembersList } from "../../components";
import { members } from "../../mocks/mock-data";

export default function Members() {
  const router = useRouter();

  return (
    <MembersList
      members={members}
      onMemberPress={(member) => router.push(`/(pages)/member/${member.id}`)}
      onAddMember={() => router.push("/(pages)/add-member")}
    />
  );
}
