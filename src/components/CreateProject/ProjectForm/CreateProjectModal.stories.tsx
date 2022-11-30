import { ModalsProvider } from '@mantine/modals';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  CreateProjectModal,
  openCreateProjectModal,
} from './CreateProjectModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: CreateProjectModal,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
} as ComponentMeta<typeof CreateProjectModal>;

const Template: ComponentStory<typeof CreateProjectModal> = () => {
  return <>{openCreateProjectModal()}</>;
};

export const Default = Template.bind({});
