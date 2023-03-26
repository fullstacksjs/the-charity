import { Title } from '@mantine/core';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
      panel: 'First Panel',
      id: '1',
      isBusy: true,
      isDefault: true,
    },
    {
      tab: <Title order={5}>اعضا</Title>,
      panel: 'Second Panel',
      id: '2',
    },
  ],
};
