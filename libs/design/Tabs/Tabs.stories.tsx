import { Title } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
  component: Tabs,
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: args => <Tabs {...args} />,
  args: {
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
  },
};
