import { noop } from '@fullstacksjs/toolbox';
import { ModalsProvider } from '@mantine/modals';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { LogoutConfirm } from './LogoutConfirm';
import { openLogoutModal } from './LogoutModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: LogoutConfirm,
  decorators: [
    Story => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
  chromatic: { delay: 500 },
} as Meta<typeof LogoutConfirm>;

type Story = StoryObj<typeof LogoutConfirm>;

export const Default: Story = {
  render: () => {
    useEffect(() => {
      openLogoutModal(noop);
    }, []);

    return <></>;
  },
};
