import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { DetailCard } from './DetailCard';

export default {
  component: DetailCard,
} as Meta<typeof DetailCard>;

type Story = StoryObj<typeof DetailCard>;
export const Default: Story = {
  render: args => (
    <DetailCard {...args}>
      <DetailCard.Section>
        <DetailCard.TextField title="برچسب">
          <Badge status="error">برچسب</Badge>
        </DetailCard.TextField>
        <DetailCard.TextField title="متن">متن</DetailCard.TextField>
      </DetailCard.Section>
    </DetailCard>
  ),
  args: {
    id: 'ID123456',
    title: 'تیتر',
  },
};
