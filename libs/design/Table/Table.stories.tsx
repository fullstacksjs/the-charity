import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilyTableRow } from '../../../app/components/FamilyList/FamilyTableRow';
import { ApiFamilyList } from '../../../app/fixtures/ApiFamilyList';
import { toInformationStatus, toSeverityStatus } from '../../data-layer';
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
      family={{
        id: info.id,
        informationStatus: toInformationStatus(info.status),
        severityStatus: toSeverityStatus(info.severity),
        name: info.name,
      }}
      order={i + 1}
    />
  )),
};
