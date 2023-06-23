import { HouseholdListFixture } from '@camp/fixtures';
import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { HouseholdTableRow } from '../../../app/pages/Dashboard/Households/HouseholdList/HouseholdTableRow';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: ({ ...args }) => <Table {...args} id="table" />,
  args: {
    columns: messages.households.list.table.columns,
    rows: HouseholdListFixture.map((info, i) => (
      <HouseholdTableRow
        key={Object.values(info).join('-')}
        household={{
          id: info.id,
          status: info.status,
          severity: info.severity,
          name: info.name,
          isCompleted: info.isCompleted,
        }}
        order={i + 1}
      />
    )),
  },
};
