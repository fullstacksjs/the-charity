import { Title } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

const householdRow = [
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

const householdCol = ['order', 'name', 'status', 'severity'];

export const Default: Story = {
  render: ({ ...args }) => <Table {...args} id="table" />,
  args: {
    columns: (
      <tr>
        {householdCol.map(h => (
          <th key={h}>
            <Title size="xs">{h}</Title>
          </th>
        ))}
      </tr>
    ),
    rows: (
      <>
        {householdRow.map((h, i) => (
          <tr key={h.id} style={{ cursor: 'pointer' }}>
            <td>{i}</td>
            <td>{h.name}</td>
            <td>
              <Badge status="success">{h.status}</Badge>
            </td>
            <td>
              <Badge status="error">{h.severity}</Badge>
            </td>
          </tr>
        ))}
      </>
    ),
  },
};
