import { useRouter } from "expo-router";
import { HomeScreen } from "../../components";
import { members, events } from "../../mocks/mock-data";

export default function Home() {
  const router = useRouter();

  return (
    <HomeScreen
      upcomingEvents={events}
      recentMembers={members}
      totalMembers={members.length}
      onViewAllEvents={() => router.push("/(pages)/events")}
      onViewAllMembers={() => router.push("/(pages)/members")}
      onMemberPress={(member) => router.push(`/(pages)/member/${member.id}`)}
      onAddMember={() => router.push("/(pages)/add-member")}
    />
  );
}
