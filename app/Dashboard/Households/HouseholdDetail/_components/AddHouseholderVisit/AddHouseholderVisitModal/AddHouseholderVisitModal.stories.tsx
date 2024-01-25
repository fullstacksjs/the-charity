import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import {
  AddHouseholderVisitModal,
  openAddHouseholderVisitModal,
} from './AddHouseholderVisitModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: AddHouseholderVisitModal,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
  chromatic: { delay: 500 },
} as Meta<typeof AddHouseholderVisitModal>;

type Story = StoryObj<typeof AddHouseholderVisitModal>;

export const Default: Story = {
  render: () => {
    useEffect(() => {
      openAddHouseholderVisitModal({ householdId: 'null' });
    }, []);

    return <></>;
  },
};
