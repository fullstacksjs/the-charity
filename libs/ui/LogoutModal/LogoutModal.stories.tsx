import { noop } from '@fullstacksjs/toolbox';
import { ModalsProvider } from '@mantine/modals';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof LogoutConfirm>;

const Template: ComponentStory<typeof LogoutConfirm> = () => {
  return <>{openLogoutModal(noop)}</>;
};

export const Default = Template.bind({});
