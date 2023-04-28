import { Button, Title } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

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
      right={
        <Title order={4} color="fgMuted">
          تیتر
        </Title>
      }
    >
      متن
    </DashboardCard>
  ),
};
