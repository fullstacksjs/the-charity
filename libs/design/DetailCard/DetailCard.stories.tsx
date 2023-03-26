import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../Badge';
import { DetailCard } from './DetailCard';

export default {
  component: DetailCard,
} as ComponentMeta<typeof DetailCard>;

const Template: ComponentStory<typeof DetailCard> = args => (
  <DetailCard {...args}>
    <DetailCard.BadgeField
      title="برچسب"
      badge={<Badge status="error">برچسب</Badge>}
    />
    <DetailCard.TextField title="متن">متن</DetailCard.TextField>
  </DetailCard>
);

export const Default = Template.bind({});
Default.args = {
  id: 'ID123456',
  title: 'تیتر',
};
