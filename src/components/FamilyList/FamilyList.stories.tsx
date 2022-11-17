import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilyList } from './FamilyList';

export default {
  component: FamilyList,
} as ComponentMeta<typeof FamilyList>;

const Template: ComponentStory<typeof FamilyList> = () => <FamilyList />;

export const Default = Template.bind({});
