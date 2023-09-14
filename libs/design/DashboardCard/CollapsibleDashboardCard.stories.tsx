import type { Meta, StoryObj } from '@storybook/react';

import { DashboardTitle } from '../DashboardTitle';
import { CollapsibleDashboardCard } from './CollapsibleDashboardCard';

export default {
  title: 'CollapsibleDashboardCard',
  component: CollapsibleDashboardCard,
} as Meta<typeof CollapsibleDashboardCard>;

type Story = StoryObj<typeof CollapsibleDashboardCard>;

export const Default: Story = {
  render: args => (
    <CollapsibleDashboardCard
      {...args}
      header="نام"
      right={<DashboardTitle>تیتر</DashboardTitle>}
    >
      متن
    </CollapsibleDashboardCard>
  ),
};
