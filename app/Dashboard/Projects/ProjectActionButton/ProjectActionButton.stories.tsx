import type { Meta, StoryObj } from '@storybook/react';

import { ProjectActionButton } from './ProjectActionButton';

export default {
  component: ProjectActionButton,
} as Meta<typeof ProjectActionButton>;

type Story = StoryObj<typeof ProjectActionButton>;

export const Default: Story = {
  args: { to: '/' },
};
