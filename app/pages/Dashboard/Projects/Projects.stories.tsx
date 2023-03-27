import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { Projects } from './Projects';

export default {
  component: Projects,
  args: {
    router: {
      route: '/projects',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.projects.title,
      },
    },
  },
} as Meta<typeof Projects>;

type Story = StoryObj<typeof Projects>;

export const Default: Story = {};
