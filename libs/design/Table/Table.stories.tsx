import { Title } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Table } from './Table';

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

const rows = [
  {
    id: '1',
    name: 'خانوار اول',
    severity: 'ضروری',
    status: 'کامل',
  },
  {
    id: '2',
    name: 'خانوار دوم',
    severity: 'ضروری',
    status: 'کامل',
  },
  {
    id: '3',
    name: 'خانوار سوم',
    severity: 'معمولی',
    status: 'تکمیل نشده',
  },
];

const columns = ['شماره', 'نام', 'وضعیت', 'نیازمندی'];

export const Default: Story = {
  render: ({ ...args }) => (
    <Table {...args} id="table">
      <thead>
        <tr>
          {columns.map(h => (
            <th key={h}>
              <Title size="xs">{h}</Title>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(h => (
          <tr key={h.id} style={{ cursor: 'pointer' }}>
            <td>{h.id}</td>
            <td>{h.name}</td>
            <td>
              <Badge status="success">{h.status}</Badge>
            </td>
            <td>
              <Badge status="error">{h.severity}</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
};
