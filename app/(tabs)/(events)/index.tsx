import { Stack } from "expo-router";
import { colors, EventsList } from "../../../components";
import { events } from "../../../mocks/mock-data";
import { useState } from "react";
import { stackScreenOptions } from "../../../utils/navigation";

export default function Events() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Stack.Screen
        options={{
          ...stackScreenOptions,
          title: "Events",
          headerSearchBarOptions: {
            placeholder: "Search events",
            onChangeText: (e) => setSearch(e.nativeEvent.text),
            headerIconColor: colors.foregroundSecondary,
            textColor: colors.foreground,
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
