import { useProjectListQuery } from '@camp/data-layer';
import {
  DashboardCard,
  FullPageLoader,
  showNotification,
  Table,
} from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Title } from '@mantine/core';

import { CreateProjectButton } from '../CreateProject';
import { ProjectEmptyState } from '../ProjectEmptyState';
import * as ids from './ProjectList.ids';
import { ProjectTableRow } from './ProjectTableRow';

export const ProjectList = () => {
  const t = messages.projects.list;

  const { data, loading, error } = useProjectListQuery();
  const projects = data?.projects;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...createTestAttr(ids.ProjectListFailureNotification),
    });
    return null;
  }
  if (loading) return <FullPageLoader />;
  if (isNull(projects)) return null;
  if (isEmpty(projects)) return <ProjectEmptyState />;

  const rows = projects.map((project, index) => (
    <ProjectTableRow key={project.id} project={project} order={index + 1} />
  ));

  return (
    <DashboardCard
      left={<CreateProjectButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <Table
        columns={t.table.columns as unknown as string[]}
        id={ids.projectTableId}
        rows={rows}
      />
    </DashboardCard>
  );
};
