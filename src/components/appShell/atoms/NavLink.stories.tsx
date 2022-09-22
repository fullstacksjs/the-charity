import type { Meta, Story } from '@storybook/react';

import DashboardIcon from '../icons/components/DashboardIcon';
import PeopleIcon from '../icons/components/PeopleIcon';
import NavLink from './NavLink';

export default {
  component: NavLink,
} as Meta;

const links = [
  {
    label: 'داشبورد',
    icon: <DashboardIcon w="24" h="24" />,
  },
  { label: 'خانواده ها', icon: <PeopleIcon w="24" h="24" /> },
];

const Template: Story = () => <NavLink links={links} />;

export const Default: Story = Template.bind({});