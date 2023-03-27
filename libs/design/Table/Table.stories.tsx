import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { ApiFamilyList } from '../../../.storybook/fixtures/ApiFamilyList';
import { FamilyTableRow } from '../../../app/components/FamilyList/FamilyTableRow';
import { toInformationStatus, toSeverityStatus } from '../../data-layer';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: ({ ...args }) => <Table {...args} id="table" />,
  args: {
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
  },
};
