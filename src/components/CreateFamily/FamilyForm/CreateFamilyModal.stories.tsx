import type { Meta, Story } from '@storybook/react';

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

const Template: Story<typeof CreateFamilyModal> = args => {
  return <CreateFamilyModal {...args} />;
};

export const Default = Template.bind({});
