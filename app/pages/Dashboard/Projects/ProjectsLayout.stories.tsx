import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { ProjectsLayout } from './ProjectsLayout';

export default {
  component: ProjectsLayout,
  args: {
    router: {
      route: '/projects',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.projects.title,
      },
    },
  },
} as Meta<typeof ProjectsLayout>;

type Story = StoryObj<typeof ProjectsLayout>;

export const Default: Story = {};
