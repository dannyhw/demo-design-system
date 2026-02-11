import { Stack } from "expo-router";
import { colors, EventsList } from "../../../components";
import { events } from "../../../mocks/mock-data";
import { useState } from "react";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Platform } from "react-native";

const isGlassAvailable = isLiquidGlassAvailable();

export default function Events() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: Platform.OS === "ios" && isGlassAvailable,
          headerShadowVisible: false,
          headerLargeTitleShadowVisible: false,
          headerLargeStyle:
            Platform.OS === "ios" && isGlassAvailable
              ? { backgroundColor: "transparent" }
              : { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.foreground },
          headerLargeTitle: true,
          contentStyle: { backgroundColor: colors.background },
          headerBlurEffect: "prominent",
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
