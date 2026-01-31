// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

const { withRozenite } = require("@rozenite/metro");

module.exports = withRozenite(
  withStorybook(config, {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
    websockets: "auto",
    liteMode: true,
  })
);
