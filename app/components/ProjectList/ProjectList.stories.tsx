import type { Meta, StoryObj } from '@storybook/react';

import { ProjectList } from './ProjectList';

export default {
  component: ProjectList,
} as Meta<typeof ProjectList>;

type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {};
