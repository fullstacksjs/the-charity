import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  component: Sidebar,
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
