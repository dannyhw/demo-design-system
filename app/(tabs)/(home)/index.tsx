import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Image } from "expo-image";
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
      onMemberPress={(member) => router.push(`/(tabs)/(members)/${member.id}`)}
    />
  );
}
