import type { Meta, Story } from '@storybook/react';

import DashboardIcon from '../icons/components/DashboardIcon';
import PackageIcon from '../icons/components/PackageIcon';
import PeopleIcon from '../icons/components/PeopleIcon';
import type { EmptyStateProps } from './EmptyState';
import EmptyState from './EmptyState';

export default {
  component: EmptyState,
  argTypes: {
    icon: {
      options: ['dashboard', 'people'],
      mapping: {
        dashboard: <DashboardIcon h="33" w="33" />,
        people: <PeopleIcon w="33" h="33" />,
      },
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<EmptyStateProps> = args => <EmptyState {...args} />;

export const Default: Story<EmptyStateProps> = Template.bind({});
Default.args = {
  title: 'پروژه ها',
  message:
    'متاسفانه لیست پروژه های شما خالی است. لطفا پروژه خود را ایجاد کنید.',
  icon: <PackageIcon w="33" h="33" />,
};
