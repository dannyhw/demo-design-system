import { useRouter } from "expo-router";
import { HomeScreen } from "../../../components";
import { members, events } from "../../../mocks/mock-data";

export default function Home() {
  const router = useRouter();

  return (
    <HomeScreen
      upcomingEvents={events}
      recentMembers={members}
      totalMembers={members.length}
      onViewAllEvents={() => router.push("/(tabs)/(events)")}
      onViewAllMembers={() => router.push("/(tabs)/(members)")}
      onEventPress={(event) => router.push(`/(tabs)/(events)/${event.id}`)}
      onMemberPress={(member) => router.push(`/(tabs)/(members)/${member.id}`)}
    />
  );
}
