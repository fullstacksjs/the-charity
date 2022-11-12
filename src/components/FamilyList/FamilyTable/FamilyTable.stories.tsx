import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { shortFamiliesInfo } from '../FamilyList';
import { FamilyTable } from './FamilyTable';

export default {
  component: FamilyTable,
} as ComponentMeta<typeof FamilyTable>;

const Template: ComponentStory<typeof FamilyTable> = args => (
  <FamilyTable {...args} />
);

export const Default = Template.bind({});
Default.args = { shortFamiliesInfo };
