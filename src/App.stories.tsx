import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { App } from './App';

export default {
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = args => <App {...args} />;

export const Default = Template.bind({});
