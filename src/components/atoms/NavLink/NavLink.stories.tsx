import { DashboardIcon } from '@camp/design';
import type { Meta, Story } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  component: NavLink,
} as Meta;

const links = [
  {
    label: 'داشبورد',
    icon: <DashboardIcon w="24" h="24" />,
  },
];

const Template: Story = () => <NavLink links={links} />;

export const Default: Story = Template.bind({});
