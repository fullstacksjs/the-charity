import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { HouseholdDetail } from './HouseholdDetail';

export default {
  component: HouseholdDetail,
  args: {
    router: {
      route: ':householdId',
      meta: {
        breadcrumb: messages.householdDetail.title,
      },
    },
  },
} as Meta<typeof HouseholdDetail>;

type Story = StoryObj<typeof HouseholdDetail>;

export const Default: Story = {};
