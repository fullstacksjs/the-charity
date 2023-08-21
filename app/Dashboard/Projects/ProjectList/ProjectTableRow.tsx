import type { ProjectKeys, ProjectListItem } from '@camp/domain';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

interface Props {
  rows?: Table<ProjectKeys & ProjectListItem>;
}

export const ProjectTableRow = ({ rows }: Props) => {
  const navigate = useNavigate();

  const gotoDetail = (ProjectId: string) => {
    navigate({ to: `/dashboard/projects/${ProjectId}` as AppRoute });
  };

  return rows?.getRowModel().rows.map(row => (
    <tr
      style={{ cursor: 'pointer' }}
      key={row.id}
      onClick={() => gotoDetail(row.original.id)}
    >
      {row.getVisibleCells().map(cell => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  ));
};
