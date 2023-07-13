import { ProjectStatusEnum } from '@camp/domain';
import type { Meta, StoryObj } from '@storybook/react';

import { ProjectStatusBadge } from './ProjectStatusBadge';

export default {
  component: ProjectStatusBadge,
} as Meta<typeof ProjectStatusBadge>;

type Story = StoryObj<typeof ProjectStatusBadge>;

export const Default: Story = {};
export const Completed: Story = {
  args: {
    status: ProjectStatusEnum.Done,
  },
};
