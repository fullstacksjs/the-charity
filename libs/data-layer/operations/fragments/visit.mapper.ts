import type {
  ApiVisitDetailFragment,
  ApiVisitKeysFragment,
  ApiVisitListItemFragment,
} from '@camp/data-layer';
import type { VisitDetail, VisitKeys, VisitListItem } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getVisitKeys = (data: ApiVisitKeysFragment): VisitKeys => {
  return {
    id: data.id,
    householdId: data.household_id,
  };
};

export const getVisitDetail = (data: ApiVisitDetailFragment): VisitDetail => {
  return {
    name: data.name,
    status: data.status,
    date: toDate(data.date)!,
    description: data.description ?? undefined,
    documents: data.documents.map(d => ({
      storageId: d.id,
      url: d.url,
      id: d.id,
    })),
  };
};

export const getVisitListItem = (
  data: ApiVisitListItemFragment,
): VisitListItem => {
  return {
    date: toDate(data.date)!,
    description: data.description ?? undefined,
    documents: data.documents.map(d => ({
      storageId: d.id,
      url: d.url,
      id: d.id,
    })),
  };
};
