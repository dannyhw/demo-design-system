import type { Preview } from "@storybook/react-native";
import { Appearance } from "react-native";

const preview: Preview = {
  parameters: {
    layout: "padded",
    // storybookUIVisibility: "hidden",
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "dark", value: "#000" },
        light: { name: "plain", value: "#fff" },
        // 👇 Add your own
        app: { name: "app", value: "#eeeeee" },
      },
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: {
      // value: Appearance.getColorScheme() === "dark" ? "dark" : "plain",
      value: "dark",
    },
  },
};

export default preview;
