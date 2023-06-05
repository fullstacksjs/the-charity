import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { ApiHouseholdList } from '../../../.storybook/fixtures/ApiHouseholdList';
import { HouseholdTableRow } from '../../../app/components/HouseholdList/HouseholdTableRow';
import {
  toInformationStatus,
  toSeverityStatus,
} from '../../data-layer/mappers';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: ({ ...args }) => <Table {...args} id="table" />,
  args: {
    columns: messages.households.list.table.columns as unknown as string[],
    rows: ApiHouseholdList.map((info, i) => (
      <HouseholdTableRow
        key={Object.values(info).join('-')}
        household={{
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
