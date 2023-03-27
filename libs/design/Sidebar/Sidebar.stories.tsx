import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from './Sidebar';

export default {
  component: SideBar,
} as Meta<typeof SideBar>;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};
