import { Stack } from "expo-router";
import { EventsList } from "../../../components";
import { events } from "../../../mocks/mock-data";
import { useState } from "react";

export default function Events() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Stack.Screen
        options={{
          title: "Events",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Search events",
            onChangeText: (e) => setSearch(e.nativeEvent.text),
          },
        }}
      />
      <EventsList
        events={events.filter((event) =>
          event.title.toLowerCase().includes(search.toLowerCase()),
        )}
      />
    </>
  );
}
