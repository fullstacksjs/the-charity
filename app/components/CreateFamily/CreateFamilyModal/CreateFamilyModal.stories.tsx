import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';

import { CreateFamilyModal, openCreateFamilyModal } from './CreateFamilyModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: CreateFamilyModal,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
  chromatic: { delay: 500 },
} as Meta<typeof CreateFamilyModal>;

type Story = StoryObj<typeof CreateFamilyModal>;

export const Default: Story = {
  render: () => {
    openCreateFamilyModal();
    return <></>;
  },
};
