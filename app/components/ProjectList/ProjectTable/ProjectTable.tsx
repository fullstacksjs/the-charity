import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Table, useMantineTheme } from '@mantine/core';

import { ProjectTableRow } from './ProjectTableRow';

export const projectTableId = 'project-list-table';

export const ProjectInfo = [
  {
    id: '1',
    name: 'خرید مدرسه',
  },
  {
    id: '2',
    name: 'خرید جهیزیه عروس',
  },
  {
    id: '3',
    name: 'خرید مک بوک برای تیم فول استکس',
  },
];

export const ProjectTable = () => {
  const { colors } = useMantineTheme();
  const t = messages.projects.list.table.columns;
  const columns = t.map(column => <th key={column}>{column}</th>);

  const rows = ProjectInfo.map((info, index) => (
    <ProjectTableRow
      key={Object.values(info).join('-')}
      name={info.name}
      order={index + 1}
    />
  ));

  return (
    <Table
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
      {...createTestAttr(projectTableId)}
    >
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody style={{ color: colors.fgMuted[6] }}>{rows}</tbody>
    </Table>
  );
};
