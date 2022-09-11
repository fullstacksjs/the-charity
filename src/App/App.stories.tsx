import type { Meta, Story } from '@storybook/react';

import { App } from './App';

export default {
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <App {...args} />;

export const Default: Story = Template.bind({});
