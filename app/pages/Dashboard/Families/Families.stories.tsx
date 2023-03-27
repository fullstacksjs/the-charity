import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { Families } from './Families';

export default {
  component: Families,
  args: {
    router: {
      route: '/dashboard/families',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.families.title,
      },
    },
  },
} as Meta<typeof Families>;

type Story = StoryObj<typeof Families>;

export const Default: Story = {};
