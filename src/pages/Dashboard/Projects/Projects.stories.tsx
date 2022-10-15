import { messages } from '@camp/messages';
import type { ComponentStory, Meta, Story } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';
import { Projects } from './Projects';

export default {
  component: Projects,
  args: {
    router: {
      route: '/projects',
      layout: DashboardLayout,
      meta: {
        breadcrumb: messages.projects.title,
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Projects> = () => <Projects />;
export const Default: Story = Template.bind({});
