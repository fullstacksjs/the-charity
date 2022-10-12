import type { ComponentStory, Meta, Story } from '@storybook/react';

import { AppShell } from '../../components';
import { Projects } from './Projects';

export default {
  component: Projects,
  args: {
    router: {
      route: '/projects',
      layout: AppShell,
      meta: {
        breadcrumb: 'پروژه ها',
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Projects> = () => <Projects />;
export const Default: Story = Template.bind({});
