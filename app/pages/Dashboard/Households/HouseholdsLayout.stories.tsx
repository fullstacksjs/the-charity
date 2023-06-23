import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { HouseholdsLayout } from './HouseholdsLayout';

export default {
  component: HouseholdsLayout,
  args: {
    router: {
      route: '/dashboard/households',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.households.title,
      },
    },
  },
} as Meta<typeof HouseholdsLayout>;

type Story = StoryObj<typeof HouseholdsLayout>;

export const Default: Story = {};
