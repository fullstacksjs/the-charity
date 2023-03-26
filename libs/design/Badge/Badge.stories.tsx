import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from './Badge';

export default {
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Default: ComponentStory<typeof Badge> = Template.bind({});
Default.args = {
  children: 'این نباید باشه',
};
export const Success: ComponentStory<typeof Badge> = Template.bind({});
Success.args = {
  status: 'success',
  children: 'تکمیل شده',
};
export const Warning: ComponentStory<typeof Badge> = Template.bind({});
Warning.args = {
  status: 'warning',
  children: 'عادی',
};
export const Error: ComponentStory<typeof Badge> = Template.bind({});
Error.args = {
  status: 'error',
  children: 'اضطراری',
};
