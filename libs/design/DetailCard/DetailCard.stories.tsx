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
        <DetailCard.Field title="برچسب">
          <Badge status="error">برچسب</Badge>
        </DetailCard.Field>
        <DetailCard.Field title="متن">متن</DetailCard.Field>
      </DetailCard.Section>
    </DetailCard>
  ),
  args: {
    id: 'ID123456',
    title: 'تیتر',
  },
};
