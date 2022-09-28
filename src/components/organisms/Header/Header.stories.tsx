import type { Meta, Story } from '@storybook/react';

import type { HeaderProps } from '../..';
import { Header } from './Header';

export default {
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default: Story<HeaderProps> = Template.bind({});
