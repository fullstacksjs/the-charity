import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { toShortFamilyInfoTableRows } from '../../../app/components';
import { FamilyTableRow } from '../../../app/components/FamilyList/FamilyTableRow';
import { shortFamiliesInfo } from '../../../app/fixtures/FakeShortFamiliesInfo';
import { Table } from './Table';

export default {
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => (
  <Table {...args} id="table" />
);

export const Default = Template.bind({});
Default.args = {
  columns: messages.families.list.table.columns as unknown as string[],
  rows: toShortFamilyInfoTableRows(shortFamiliesInfo).map(info => (
    <FamilyTableRow
      key={Object.values(info).join('-')}
      shortFamilyInfoTableRow={info}
    />
  )),
};
