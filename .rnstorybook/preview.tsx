import type { Preview } from "@storybook/react-native";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      options: {
        dark: { name: "dark", value: "#000" },
        light: { name: "plain", value: "#fff" },
        app: { name: "app", value: "#eeeeee" },
      },
    },
  },
  initialGlobals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export default preview;
