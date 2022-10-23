import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { DashboardCard } from './DashboardCard';

export default {
  component: DashboardCard,
} as ComponentMeta<typeof DashboardCard>;

const Template: ComponentStory<typeof DashboardCard> = args => (
  <DashboardCard {...args}>
    <DashboardCard.BadgeField status="error" title="برچسب">
      برچسب
    </DashboardCard.BadgeField>
    <DashboardCard.TextField title="متن">متن</DashboardCard.TextField>
  </DashboardCard>
);

export const Default = Template.bind({});
Default.args = {
  id: 'ID123456',
  title: 'تیتر',
};
