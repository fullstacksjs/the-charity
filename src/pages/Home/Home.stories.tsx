import type { Meta, Story } from '@storybook/react';

import { Home } from './Home';

export default {
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <Home {...args} />;

export const Default: Story = Template.bind({});
