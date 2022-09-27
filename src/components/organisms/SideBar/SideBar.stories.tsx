import type { Meta, Story } from '@storybook/react';

import { SideBar } from './SideBar';

export default {
  component: SideBar,
} as Meta;

const Template: Story = () => <SideBar />;

export const Default: Story = Template.bind({});
