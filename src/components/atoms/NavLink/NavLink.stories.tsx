<<<<<<< HEAD
import { PeopleSvg } from '@camp/design';
=======
import { DashboardIcon } from '@camp/design';
>>>>>>> 0734b83 (restructure icons)
import type { Meta, Story } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  component: NavLink,
} as Meta;

const links = [
  {
    label: 'خانواده ها',
    icon: <PeopleSvg width="24" height="24" />,
    path: '/families',
  },
];

const Template: Story = () => <NavLink links={links} />;

export const Default: Story = Template.bind({});
