import { ExitIcon, HomeIcon, UserIcon } from '@camp/icons';
import { Box } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from '../NavLink';
import { Sidebar } from './Sidebar';

const links = [
  { icon: <HomeIcon />, id: 'home', label: 'خانه', to: '/' },
  { icon: <UserIcon />, id: 'user', label: 'کاربر', to: '/user' },
];

export default {
  component: Sidebar,
  args: {
    links,
  },
  render(args) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar {...args} />
      </Box>
    );
  },
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

export const WithBottom: Story = {
  args: {
    bottom: (
      <NavLink
        variant="destructive"
        icon={<ExitIcon />}
        id="exit"
        label="خروج"
      />
    ),
  },
};
