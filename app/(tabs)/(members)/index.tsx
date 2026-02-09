import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import { MembersList } from "../../../components";
import { members } from "../../../mocks/mock-data";
import { colors } from "../../../components/theme";
import { useState } from "react";

export default function Members() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => router.navigate("/(tabs)/(members)/add-member")}
            >
              <Image
                source="sf:person.badge.plus"
                style={{ width: 22, height: 22 }}
                tintColor={colors.accent}
              />
            </Pressable>
          ),
          headerSearchBarOptions: {
            placeholder: "Search members",
            onChangeText: (e) => setSearch(e.nativeEvent.text),

            placement: "automatic",
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
