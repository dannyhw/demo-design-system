import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import { LiteUI } from "@storybook/react-native-ui-lite";
import { registerRootComponent } from "expo";
import { LogBox } from "react-native";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  CustomUIComponent: LiteUI,
  enableWebsockets: true,
  onDeviceUI: true,
});

LogBox.ignoreAllLogs();
registerRootComponent(StorybookUIRoot);
