import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

export default {
  component: TextInput,
} as Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};
