import { Stack, useRouter } from "expo-router";
import { Platform, Pressable } from "react-native";
import { Image } from "expo-image";
import { MembersList } from "../../../components";
import { members } from "../../../mocks/mock-data";
import { colors } from "../../../components/theme";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS } from "rn-icon-mapper";
import { isLiquidGlassAvailable } from "expo-glass-effect";

const isGlassAvailable = isLiquidGlassAvailable();

export default function Members() {
  const router = useRouter();
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
          headerRight: () => (
            <Pressable
              onPress={() => router.navigate("/(tabs)/(members)/add-member")}
            >
              {Platform.OS === "ios" ? (
                <Image
                  source="sf:person.badge.plus"
                  style={{ width: 22, height: 22 }}
                  tintColor={colors.foregroundSecondary}
                />
              ) : (
                <MaterialCommunityIcons
                  name={
                    SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS["person.badge.plus"]
                  }
                  size={22}
                  color={colors.foregroundSecondary}
                />
              )}
            </Pressable>
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
