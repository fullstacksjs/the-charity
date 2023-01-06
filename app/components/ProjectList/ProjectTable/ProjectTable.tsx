import { useProjectListQuery } from '@camp/data-layer';
import { FullPageLoader } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Table, useMantineTheme } from '@mantine/core';

import { ProjectTableRow } from './ProjectTableRow';

export const projectTableId = 'project-list-table';

export const ProjectTable = () => {
  const { colors } = useMantineTheme();
  const t = messages.projects.list.table.columns;
  const columns = t.map(column => <th key={column}>{column}</th>);
  const { data, loading, error } = useProjectListQuery();

  if (error) return <h1>{error.message}</h1>;

  if (loading) return <FullPageLoader />;

  const rows = data?.project_aggregate.nodes.map(({ id, name }, index) => (
    <ProjectTableRow key={id} name={name} order={index + 1} />
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
