import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { ProjectDetail } from './ProjectDetail';

export default {
  component: ProjectDetail,
  args: {
    router: {
      route: ':projectId',
      meta: {
        breadcrumb: messages.projectDetail.title,
      },
    },
  },
} as Meta<typeof ProjectDetail>;

type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {};
