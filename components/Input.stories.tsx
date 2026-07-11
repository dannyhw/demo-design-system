import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { Input } from "./Input";
import { Text } from "./Text";

const meta = {
  title: "Design System/Input",
  component: Input,
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    value: { control: { type: "text" } },
    error: { control: { type: "text" } },
    hint: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    secureTextEntry: { control: { type: "boolean" } },
    multiline: { control: { type: "boolean" } },
    numberOfLines: { control: { type: "number", min: 1, max: 10, step: 1 } },
    keyboardType: {
      options: ["default", "email-address", "numeric", "phone-pad", "url"],
      control: { type: "select" },
    },
    autoCapitalize: {
      options: ["none", "sentences", "words", "characters"],
      control: { type: "select" },
    },
    prefix: {
      control: { type: "select" },
      options: ["None", "https://"],
      mapping: {
        None: undefined,
        "https://": <Text color="tertiary">https://</Text>,
      },
    },
    suffix: { table: { disable: true } },
    onClear: { table: { disable: true } },
    onChangeText: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithHint: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    hint: "Must be at least 8 characters",
    secureTextEntry: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    value: "invalid-email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "john_doe",
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    label: "Website",
    placeholder: "yoursite.com",
    prefix: "https://",
  },
};

const ClearableInputStory = () => {
  const [value, setValue] = useState("Clear me");

  return (
    <Input
      label="Search"
      placeholder="Search..."
      value={value}
      onChangeText={setValue}
      onClear={() => setValue("")}
    />
  );
};

export const WithClearButton: Story = {
  render: () => <ClearableInputStory />,
};

export const FormExample: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Input label="Full Name" placeholder="John Doe" />
      <Input
        label="Email"
        placeholder="john@example.com"
        keyboardType="email-address"
      />
      <Input
        label="Bio"
        placeholder="Tell us about yourself..."
        multiline
        numberOfLines={3}
      />
    </View>
  ),
};
