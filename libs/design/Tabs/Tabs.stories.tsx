import { Title } from '@mantine/core';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      tab: <Title order={5}>سرپرست</Title>,
      value: '1',
      isBusy: true,
    },
    { tab: <Title order={5}>اعضا</Title>, value: '2' },
  ],
  panels: [
    { panel: 'First Panel', value: '1' },
    { panel: 'Second Panel', value: '2' },
  ],
};
