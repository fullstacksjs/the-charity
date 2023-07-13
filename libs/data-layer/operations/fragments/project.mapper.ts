import type {
  ApiProjectDetailFragment,
  ApiProjectKeysFragment,
  ApiProjectListItemFragment,
} from '@camp/data-layer';
import type { ProjectDetail, ProjectKeys, ProjectListItem } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getProjectKeys = (data: ApiProjectKeysFragment): ProjectKeys => {
  return {
    id: data.id,
  };
};

export const getProjectDetail = (
  data: ApiProjectDetailFragment,
): ProjectDetail => {
  return {
    name: data.name,
    status: data.status,
    description: data.description ?? undefined,
    endDate: toDate(data.due_date),
    startDate: toDate(data.start_date),
    createdAt: toDate(data.created_at)!,
    updatedAt: toDate(data.updated_at)!,
  };
};

export const getProjectListItem = (
  data: ApiProjectListItemFragment,
): ProjectListItem => {
  return {
    name: data.name,
    status: data.status,
    description: data.description ?? undefined,
    endDate: toDate(data.due_date),
    startDate: toDate(data.start_date),
    createdAt: toDate(data.created_at)!,
    updatedAt: toDate(data.updated_at)!,
  };
};
