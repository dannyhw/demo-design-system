import { SafeAreaView } from "react-native-safe-area-context";
import StorybookUI from "../../.rnstorybook";

export default function StorybookScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <StorybookUI />
    </SafeAreaView>
  );
}
