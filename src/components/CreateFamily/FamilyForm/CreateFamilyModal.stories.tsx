import { ModalsProvider } from '@mantine/modals';
import type { Meta, Story } from '@storybook/react';

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
} as Meta;

const Template: Story<typeof CreateFamilyModal> = () => {
  return <>{openCreateFamilyModal()}</>;
};

export const Default = Template.bind({});
