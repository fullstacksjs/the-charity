import * as Apollo from '@apollo/client';

import type {
  ApiFamilyListQuery,
  ApiFamilyListQueryVariables,
} from '../../../api';
import { ApiFamilyDocument } from '../../../api';
import type { InformationStatus, SeverityStatus } from '../FamilyQuery';
import { toInformationStatus, toSeverityStatus } from '../FamilyQuery';

export interface FamilyListItem {
  id: string;
  name: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}

export interface FamilyList {
  families: FamilyListItem[];
}

const toClient = (data: ApiFamilyListQuery | null | undefined): FamilyList => ({
  families:
    data?.family == null
      ? []
      : data.family.map(f => ({
          id: f.id,
          name: f.name,
          severityStatus: toSeverityStatus(f.severity),
          informationStatus: toInformationStatus(f.status),
        })),
});

export function useFamilyListQuery(
  options?: Apollo.QueryHookOptions<
    ApiFamilyListQuery,
    ApiFamilyListQueryVariables
  >,
) {
  const { data, ...rest } = Apollo.useQuery(ApiFamilyDocument, options);

  return { data: toClient(data), ...rest } as const;
}
