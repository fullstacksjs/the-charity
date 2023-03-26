import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilyActionButton } from './FamilyActionButton';

export default {
  component: FamilyActionButton,
} as ComponentMeta<typeof FamilyActionButton>;

const Template: ComponentStory<typeof FamilyActionButton> = args => (
  <FamilyActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
};
