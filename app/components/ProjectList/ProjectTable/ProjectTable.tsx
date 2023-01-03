import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Table, useMantineTheme } from '@mantine/core';
import { useProjectListQuery } from '../../../data-layer/operations/__generated__/typesAndHooks';

import { ProjectTableRow } from './ProjectTableRow';

export const projectTableId = 'project-list-table';

export const ProjectTable = () => {
  const { colors } = useMantineTheme();
  const t = messages.projects.list.table.columns;
  const columns = t.map(column => <th key={column}>{column}</th>);
  const { data, loading, error, refetch } = useProjectListQuery()

  if (error) console.log(error)


  if (loading) return <h1>loading...</h1>

  const rows = data?.project_aggregate.nodes.map(({ id, name }, index) => (
    <ProjectTableRow
      key={id}
      name={name}
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
