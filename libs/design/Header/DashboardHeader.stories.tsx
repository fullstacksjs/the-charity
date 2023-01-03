import { messages } from '@camp/messages';
import { Button } from '@mantine/core';
import type { ComponentMeta, Story } from '@storybook/react';

import type { HeaderProps } from './DashboardHeader';
import { DashboardHeader } from './DashboardHeader';

export default {
  component: DashboardHeader,
  args: {
    button: <Button>Button</Button>,
    router: {
      path: '/',
      meta: {
        breadcrumb: messages.families.title,
      },
    },
  },
} as ComponentMeta<typeof DashboardHeader>;

const Template: Story<HeaderProps> = args => <DashboardHeader {...args} />;

export const Default: Story<HeaderProps> = Template.bind({});
