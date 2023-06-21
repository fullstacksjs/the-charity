import { Button } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardTitle } from '../DashboardTitle';
import { DashboardCard } from './DashboardCard';

export default {
  component: DashboardCard,
} as Meta<typeof DashboardCard>;

type Story = StoryObj<typeof DashboardCard>;

export const Default: Story = {
  render: args => (
    <DashboardCard
      {...args}
      left={<Button>Button</Button>}
      right={<DashboardTitle>تیتر</DashboardTitle>}
    >
      متن
    </DashboardCard>
  ),
};
