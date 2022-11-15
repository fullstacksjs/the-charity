import { noop } from '@fullstacksjs/toolbox';
import type { Meta, Story } from '@storybook/react';

import { CreateFamilyModalStateCtx } from '../../../contexts';
import { CreateFamilyModal } from './CreateFamilyModal';

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
    <CreateFamilyModalStateCtx.Provider
      value={{ isModalOpen: true, closeModal: noop, openModal: noop }}
    >
      <CreateFamilyModal />;
    </CreateFamilyModalStateCtx.Provider>
  );
};

export const Default = Template.bind({});
