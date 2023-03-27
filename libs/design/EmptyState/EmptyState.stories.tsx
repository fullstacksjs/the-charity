import { DashboardIcon, PackageIcon, PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { EmptyState } from './EmptyState';

export default {
  component: EmptyState,
  argTypes: {
    icon: {
      options: ['dashboard', 'people'],
      mapping: {
        dashboard: <DashboardIcon height="33" width="33" />,
        people: <PeopleIcon width="33" height="33" />,
      },
      control: { type: 'radio' },
    },
  },
} as Meta<typeof EmptyState>;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: messages.projects.title,
    message: messages.projects.empty.description,
    icon: <PackageIcon width="33" height="33" />,
  },
};
