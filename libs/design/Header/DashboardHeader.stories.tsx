import { messages } from '@camp/messages';
import { Button } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardHeader } from './DashboardHeader';

export default {
  component: DashboardHeader,
  args: {
    button: <Button>Button</Button>,
    router: {
      path: '/',
      meta: {
        breadcrumb: messages.households.title,
      },
    },
  },
} as Meta<typeof DashboardHeader>;

type Story = StoryObj<typeof DashboardHeader>;

export const Default: Story = {};
