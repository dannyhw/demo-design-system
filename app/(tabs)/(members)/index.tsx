import { Stack, useRouter } from "expo-router";
import { Button, MembersList } from "../../../components";
import { members } from "../../../mocks/mock-data";
import { colors } from "../../../components/theme";
import { useState } from "react";
import { stackScreenOptions } from "../../../utils/navigation";

export default function Members() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <>
      <Stack.Screen
        options={{
          ...stackScreenOptions,
          headerRight: () => (
            <Button
              variant="ghost"
              size="sm"
              label="Add"
              onPress={() => router.navigate("/(tabs)/(members)/add-member")}
            />
          ),
          headerSearchBarOptions: {
            placeholder: "Search members",
            onChangeText: (e) => setSearch(e.nativeEvent.text),

            placement: "automatic",
            headerIconColor: colors.foregroundSecondary,
            textColor: colors.foreground,
          },
        }}
      />
      <MembersList
        members={members.filter((member) =>
          member.name.toLowerCase().includes(search.toLowerCase()),
        )}
        onMemberPress={(member) =>
          router.push(`/(tabs)/(members)/${member.id}`)
        }
      />
    </>
  );
}
