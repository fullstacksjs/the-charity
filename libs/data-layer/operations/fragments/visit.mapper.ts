import type {
  ApiVisitFragment,
  ApiVisitKeysFragment,
  ApiVisitListItemFragment,
} from '@camp/data-layer';
import type { Visit, VisitKeys, VisitListItem } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getVisitKeys = (data: ApiVisitKeysFragment): VisitKeys => {
  return {
    id: data.id,
  };
};

// export const getVisit = (data: ApiVisitFragment): Visit => {
//   return {
//     date: toDate(data.date)!,
//     description: data.description ?? undefined,
//     // FIXME: nap doc here
//     documents: data.documents,
//   };
// };

export const getVisitListItem = (
  data: ApiVisitListItemFragment,
): VisitListItem => {
  return {
    date: toDate(data.date)!,
    description: data.description ?? undefined,
    // FIXME: nap doc here
    documents: data.documents,
  };
};
