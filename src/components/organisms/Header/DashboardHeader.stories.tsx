import type { Meta, Story } from '@storybook/react';

import type { HeaderProps } from '../..';
import { DashboardHeader } from './DashboardHeader';

export default {
  component: DashboardHeader,
} as Meta;

const Template: Story<HeaderProps> = args => <DashboardHeader {...args} />;

export const Default: Story<HeaderProps> = Template.bind({});
