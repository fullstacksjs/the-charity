import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  CreateProjectDocumentModal,
  openCreateProjectDocumentModal,
} from './CreateProjectDocumentModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: CreateProjectDocumentModal,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
  chromatic: { delay: 500 },
} as Meta<typeof CreateProjectDocumentModal>;

type Story = StoryObj<typeof CreateProjectDocumentModal>;

export const Default: Story = {
  render: () => {
    useEffect(() => {
      openCreateProjectDocumentModal();
    }, []);

    return <></>;
  },
};
