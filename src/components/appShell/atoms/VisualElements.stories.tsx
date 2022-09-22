import type { Meta, Story } from '@storybook/react';

import DashboardIcon from '../icons/components/DashboardIcon';
import PeopleIcon from '../icons/components/PeopleIcon';
import VisualElements from './VisualElements';

export default {
  component: VisualElements,
  argTypes: {
    icon: DashboardIcon,
  },
} as Meta;

const Template: Story = () => (
  <VisualElements icon={<PeopleIcon w="33" h="33" />} />
);

export const Default: Story = Template.bind({});
