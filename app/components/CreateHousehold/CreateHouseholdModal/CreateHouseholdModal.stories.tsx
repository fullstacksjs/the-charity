import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  CreateHouseholdModal,
  openCreateHouseholdModal,
} from './CreateHouseholdModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: CreateHouseholdModal,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
  chromatic: { delay: 500 },
} as Meta<typeof CreateHouseholdModal>;

type Story = StoryObj<typeof CreateHouseholdModal>;

export const Default: Story = {
  render: () => {
    useEffect(() => {
      openCreateHouseholdModal();
    }, []);
    return <></>;
  },
};
