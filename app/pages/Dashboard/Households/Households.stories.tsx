import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { Households } from './Households';

export default {
  component: Households,
  args: {
    router: {
      route: '/dashboard/households',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.households.title,
      },
    },
  },
} as Meta<typeof Households>;

type Story = StoryObj<typeof Households>;

export const Default: Story = {};
