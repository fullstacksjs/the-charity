import type { Project } from '@camp/domain';

import type { ApiProject } from '../api';
import { toProjectStatus } from './toProjectStatus';

export const toProject = (
  project: Omit<
    ApiProject,
    | '__typename'
    | 'created_at'
    | 'households_aggregate'
    | 'households'
    | 'updated_at'
  >,
): Project => {
  return {
    id: project.id,
    name: project.name,
    status: toProjectStatus(project.status),
    description: project.description ?? undefined,
    endDate: project.due_date == null ? undefined : new Date(project.due_date),
    startDate:
      project.start_date == null ? undefined : new Date(project.start_date),
  };
};
