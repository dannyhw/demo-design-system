import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { EventDetails } from "../../../components";
import { events } from "../../../mocks/mock-data";

export default function EventDetailsPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((item) => item.id === id);

  if (!event) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ title: "Event", headerLargeTitle: false }} />
      <EventDetails
        event={event}
        onAttendeePress={(memberId) =>
          router.push(`/(tabs)/(members)/${memberId}`)
        }
      />
    </>
  );
}
