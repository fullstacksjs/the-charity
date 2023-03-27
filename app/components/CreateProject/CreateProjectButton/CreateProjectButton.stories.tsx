import type { Meta, StoryObj } from '@storybook/react';

import { CreateProjectButton } from './CreateProjectButton';

export default {
  component: CreateProjectButton,
} as Meta<typeof CreateProjectButton>;

type Story = StoryObj<typeof CreateProjectButton>;

export const Default: Story = {};
