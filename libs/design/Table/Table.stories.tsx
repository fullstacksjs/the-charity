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
      <Table.Head>
        <Table.Row>
          {columns.map(h => (
            <Table.Head key={h}>
              <Title size="xs">{h}</Title>
            </Table.Head>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(r => (
          <Table.Row key={r.id} style={{ cursor: 'pointer' }}>
            <Table.Cell>{r.id}</Table.Cell>
            <Table.Cell>{r.name}</Table.Cell>
            <Table.Cell>
              <Badge status="success">{r.status}</Badge>
            </Table.Cell>
            <Table.Cell>
              <Badge status="error">{r.severity}</Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Skeleton: Story = {
  render: ({ ...args }) => (
    <Table {...args} id="table">
      <Table.Header>
        <Table.Row>
          {columns.map(h => (
            <Table.Head key={h}>
              <Title size="xs">{h}</Title>
            </Table.Head>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Skeleton cells={4} rows={4} />
      </Table.Body>
    </Table>
  ),
};
