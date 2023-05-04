import type { Meta, StoryObj } from '@storybook/react';

import { DateInput } from './DateInput';

export default {
  component: DateInput,
} as Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {};
