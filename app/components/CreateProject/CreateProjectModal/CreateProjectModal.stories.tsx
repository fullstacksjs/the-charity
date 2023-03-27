import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';

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
} as Meta<typeof CreateProjectModal>;

type Story = StoryObj<typeof CreateProjectModal>;

export const Default: Story = {
  render: () => {
    openCreateProjectModal();
    return <></>;
  },
};
