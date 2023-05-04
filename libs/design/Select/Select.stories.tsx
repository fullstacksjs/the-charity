import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

export default {
  component: Select,
  args: {
    data: [
      { value: 'Item1', label: 'Item 1' },
      { value: 'Item2', label: 'Item 2' },
    ],
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
