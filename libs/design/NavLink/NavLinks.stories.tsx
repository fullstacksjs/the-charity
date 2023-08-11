import { PackageIcon, PeopleIcon } from '@camp/icons';
import { Stack } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import type { NavLinkProps } from './NavLink';
import { NavLinks } from './NavLinks';

export default {
  component: NavLinks,
  title: 'NavLinks',
  render: args => (
    <Stack sx={{ width: 300 }}>
      <NavLinks {...args} />
    </Stack>
  ),
} as Meta<typeof NavLinks>;

type Story = StoryObj<typeof NavLinks>;

const links: NavLinkProps[] = [
  {
    label: 'خانوار',
    icon: <PeopleIcon width="24" height="24" />,
    to: '/dashboard/households',
    id: 'household',
  },
  {
    label: 'پروژه‌ها',
    icon: <PackageIcon width="24" height="24" />,
    to: '/dashboard/projects',
    id: 'projects',
  },
];

export const Default: Story = {
  args: {
    links,
  },
};
