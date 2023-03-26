import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { HouseholderIdentityForm } from './HouseholderIdentityForm';

export default {
  component: HouseholderIdentityForm,
} as ComponentMeta<typeof HouseholderIdentityForm>;

const Template: ComponentStory<typeof HouseholderIdentityForm> = () => (
  <HouseholderIdentityForm familyId="null" />
);

export const Default: ComponentStory<typeof HouseholderIdentityForm> =
  Template.bind({});
