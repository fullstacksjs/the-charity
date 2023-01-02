import { messages } from '@camp/messages';
import type { Meta, Story } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { Families } from './Families';

export default {
  component: Families,
  args: {
    router: {
      route: '/dashboard/families',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.families.title,
      },
    },
  },
} as Meta;

const Template: Story = () => <Families />;

export const Default: Story = Template.bind({});
