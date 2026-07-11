import { Stack, useLocalSearchParams } from "expo-router";
import { EventDetails } from "../../../components";
import { events } from "../../../mocks/mock-data";

export default function EventDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((item) => item.id === id);

  if (!event) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ title: event.title, headerLargeTitle: false }} />
      <EventDetails event={event} />
    </>
  );
}
