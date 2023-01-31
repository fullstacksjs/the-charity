import { messages } from '@camp/messages';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { FamilyTableRow } from '../../../app/components/FamilyList/FamilyTableRow';
import { ApiFamilyList } from '../../../app/fixtures/ApiFamilyList';
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
  rows: ApiFamilyList.map((info, i) => (
    <FamilyTableRow
      key={Object.values(info).join('-')}
      family={info}
      order={i + 1}
    />
  )),
};
