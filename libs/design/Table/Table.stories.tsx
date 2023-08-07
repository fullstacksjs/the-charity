import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

const data = [
  {
    id: '1',
    name: 'خانوار اول',
    code: 'F00001',
    severity: 'ضروری',
    status: 'کامل',
    createdAt: new Date('2022-12-23'),
    updatedAt: new Date('2022-12-25'),
    isCompleted: true,
  },
  {
    id: '2',
    name: 'خانوار دوم',
    code: 'F00001',
    severity: 'ضروری',
    status: 'کامل',
    isCompleted: false,
  },
  {
    id: '3',
    name: 'خانوار سوم',
    code: 'F00001',
    severity: 'معمولی',
    status: 'تکمیل نشده',
    isCompleted: true,
  },
];

export const Default: Story = {
  render: ({ ...args }) => <Table {...args} id="table" />,
  args: {
    columns: messages.households.list.table.columns,
    rows: data.map((info, i) => (
      <tr key={info.id} style={{ cursor: 'pointer' }}>
        <td>{i}</td>
        <td>{info.name}</td>
        <td>
          <Badge status="success">{info.status}</Badge>
        </td>
        <td>
          <Badge status="error">{info.severity}</Badge>
        </td>
      </tr>
    )),
  },
};
