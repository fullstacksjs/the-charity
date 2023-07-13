import type { Meta, StoryObj } from '@storybook/react';

import { DateSummery } from './DateSummery';

export default {
  component: DateSummery,
  args: {
    endDate: undefined,
    startDate: new Date,
  },
} as Meta<typeof DateSummery>;

type Story = StoryObj<typeof DateSummery>;

export const Default: Story = {};

export const WithEndDate: Story = {
  args: {
    endDate: new Date,
  },
};
