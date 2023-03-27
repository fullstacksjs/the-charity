import type { ComponentStory, Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { DetailCard } from './DetailCard';

export default {
  component: DetailCard,
} as Meta<typeof DetailCard>;

type Story = StoryObj<typeof DetailCard>;
export const Default: Story = {
  render: args => (
    <DetailCard {...args}>
      <DetailCard.BadgeField
        title="برچسب"
        badge={<Badge status="error">برچسب</Badge>}
      />
      <DetailCard.TextField title="متن">متن</DetailCard.TextField>
    </DetailCard>
  ),
  args: {
    id: 'ID123456',
    title: 'تیتر',
  },
};
