import type { Meta, Story } from '@storybook/react';

import { ModalProvider } from '../../ModalProvider';
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
} as Meta;

const Template: Story<typeof CreateFamilyModal> = () => {
  return (
    <ModalProvider>
      <>{openCreateFamilyModal()}</>
    </ModalProvider>
  );
};

export const Default = Template.bind({});
