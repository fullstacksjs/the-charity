import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilySeverityEnum, FamilyStatusEnum } from '../../../data-layer';
import { FamilyTable } from './FamilyTable';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRows';

export const shortFamiliesInfo: ShortFamiliesInfo = [
  {
    id: '(F00001)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Completed,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Draft,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Normal,
    status: FamilyStatusEnum.Completed,
  },
];

export default {
  component: FamilyTable,
} as ComponentMeta<typeof FamilyTable>;

const Template: ComponentStory<typeof FamilyTable> = args => (
  <FamilyTable {...args} />
);

export const Default = Template.bind({});
Default.args = { shortFamiliesInfo };
