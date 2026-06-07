import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Text } from './Text';

const meta = {
  title: 'Design System/Text',
  component: Text,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: {
      options: ['display', 'h1', 'h2', 'h3', 'body', 'bodySmall', 'caption', 'label'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'accent', 'error', 'success'],
      control: { type: 'radio' },
    },
    weight: {
      options: ['regular', 'medium', 'semibold', 'bold'],
      control: { type: 'radio' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    style: { table: { disable: true } },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Display Text',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text for regular content and paragraphs.',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'bodySmall',
    children: 'Smaller body text for secondary content.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text for metadata and labels.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Label Text',
  },
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text color="primary">Primary color</Text>
      <Text color="secondary">Secondary color</Text>
      <Text color="tertiary">Tertiary color</Text>
      <Text color="accent">Accent color</Text>
      <Text color="error">Error color</Text>
      <Text color="success">Success color</Text>
    </View>
  ),
};

export const Weights: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text weight="regular">Regular weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </View>
  ),
};
