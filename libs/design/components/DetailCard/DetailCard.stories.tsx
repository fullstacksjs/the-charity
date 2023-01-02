import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { DetailCard } from './DetailCard';

export default {
  component: DetailCard,
} as ComponentMeta<typeof DetailCard>;

const Template: ComponentStory<typeof DetailCard> = args => (
  <DetailCard {...args}>
    <DetailCard.BadgeField status="error" title="برچسب">
      برچسب
    </DetailCard.BadgeField>
    <DetailCard.TextField title="متن">متن</DetailCard.TextField>
  </DetailCard>
);

export const Default = Template.bind({});
Default.args = {
  id: 'ID123456',
  title: 'تیتر',
};
