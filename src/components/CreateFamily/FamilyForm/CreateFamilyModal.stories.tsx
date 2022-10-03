import type { Meta, Story } from '@storybook/react';

import type { CreateFamilyModalProps } from './CreateFamilyModal';
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

const Template: Story<CreateFamilyModalProps> = args => {
  return <CreateFamilyModal {...args} />;
};

export const Default = Template.bind({});
