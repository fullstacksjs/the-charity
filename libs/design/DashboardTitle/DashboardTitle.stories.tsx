import type { Meta, StoryObj } from '@storybook/react';

import { DashboardTitle } from './DashboardTitle';

export default {
  component: DashboardTitle,
  args: {
    children: 'تیتر',
  },
} as Meta<typeof DashboardTitle>;

type Story = StoryObj<typeof DashboardTitle>;

export const Default: Story = {};
