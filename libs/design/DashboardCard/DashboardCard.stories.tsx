import { Button, Title } from '@mantine/core';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { DashboardCard } from './DashboardCard';

export default {
  component: DashboardCard,
} as ComponentMeta<typeof DashboardCard>;

const Template: ComponentStory<typeof DashboardCard> = args => (
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
);

export const Default = Template.bind({});
