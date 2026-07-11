// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const artifactsPath = path.resolve(__dirname, "artifacts");
const artifactsPattern = new RegExp(
  `${artifactsPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[/\\\\].*`,
);

config.resolver.blockList = [
  ...(Array.isArray(config.resolver.blockList)
    ? config.resolver.blockList
    : [config.resolver.blockList]),
  artifactsPattern,
];

const { withStorybook } = require("@storybook/react-native/withStorybook");

const { withRozenite } = require("@rozenite/metro");

module.exports = withRozenite(
  withStorybook(config, {
    liteMode: true,
    websockets: "auto",
    experimental_mcp: true,
  }),
);
