import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { type Family } from '@camp/domain';

import {
  type ApiFamilyListQuery,
  type ApiFamilyListQueryVariables,
} from '../../api';
import { toInformationStatus, toSeverityStatus } from './useFamilyQuery';

const Document = gql`
  query FamilyList {
    family {
      id
      name
      severity
      status
    }
  }
`;

export interface FamilyListDto {
  families: Pick<Family, 'id' | 'information' | 'name' | 'severity'>[];
}

const toClient = (
  data: ApiFamilyListQuery | null | undefined,
): FamilyListDto => ({
  families:
    data?.family == null
      ? []
      : data.family.map(f => ({
          id: f.id,
          name: f.name,
          severity: toSeverityStatus(f.severity),
          information: toInformationStatus(f.status),
        })),
});

export function useFamilyListQuery(
  options?: Apollo.QueryHookOptions<
    ApiFamilyListQuery,
    ApiFamilyListQueryVariables
  >,
) {
  const { data, ...rest } = Apollo.useQuery(Document, options);
  console.log('data', data);

  return { data: toClient(data), ...rest } as const;
}
