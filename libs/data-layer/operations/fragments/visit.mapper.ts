import type {
  ApiVisitKeysFragment,
  ApiVisitListItemFragment,
} from '@camp/data-layer';
import type { VisitKeys, VisitListItem } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getVisitKeys = (data: ApiVisitKeysFragment): VisitKeys => {
  return {
    id: data.id,
    householdId: data.household_id,
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
