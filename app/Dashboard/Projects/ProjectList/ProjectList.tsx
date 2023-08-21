import { useProjectListQuery } from '@camp/data-layer';
import {
  DashboardCard,
  DashboardTitle,
  DateSummery,
  FullPageLoader,
  showNotification,
  SmallText,
  Table,
} from '@camp/design';
import { projectColumnHelper } from '@camp/domain';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Group } from '@mantine/core';
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { ProjectStatusBadge } from '../_components/ProjectStatusBadge';
import { CreateProjectButton } from '../CreateProject';
import { ProjectActionButton } from '../ProjectActionButton';
import { ProjectEmptyState } from '../ProjectEmptyState';
import * as ids from './ProjectList.ids';
import { ProjectTableColumn } from './ProjectTableColumn';
import { ProjectTableRow } from './ProjectTableRow';
import * as ActionIds from './ProjectTableRow.ids';

const t = messages.projects.list;

const columns = [
  projectColumnHelper.display({
    header: t.table.columns.order,
    cell: order => order.row.index + 1,
  }),
  projectColumnHelper.accessor('name', {
    header: t.table.columns.name,
    cell: name => name.getValue(),
  }),
  projectColumnHelper.accessor('description', {
    header: t.table.columns.description,
    cell: description => <SmallText>{description.getValue()}</SmallText>,
  }),
  projectColumnHelper.accessor('fullDate', {
    header: t.table.columns.fullDate,
    cell: date => (
      <DateSummery
        startDate={date.getValue()?.startDate}
        endDate={date.getValue()?.endDate}
      />
    ),
  }),
  projectColumnHelper.accessor('status', {
    header: t.table.columns.status,
    cell: props => (
      <Group position="apart">
        <ProjectStatusBadge status={props.getValue()} />
        <ProjectActionButton
          menuButtonId={ActionIds.projectTableMenuButtonId}
          menuId={ActionIds.projectTableMenuId}
          to={AppRoute.projectDetail}
          params={{ id: props.row.original.id }}
        />
      </Group>
    ),
  }),
];

export const ProjectList = () => {
  const { data, loading, error } = useProjectListQuery();
  const projects = data?.projects ?? null;

  const table = useReactTable({
    data: projects ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

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

  return (
    <DashboardCard
      left={<CreateProjectButton />}
      right={<DashboardTitle>{t.title}</DashboardTitle>}
    >
      <Table id={ids.projectTableId}>
        <thead>
          <ProjectTableColumn col={table} />
        </thead>
        <tbody>
          <ProjectTableRow rows={table} />
        </tbody>
      </Table>
    </DashboardCard>
  );
};
