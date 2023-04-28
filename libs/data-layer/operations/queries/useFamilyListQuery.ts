import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Family } from '@camp/domain';

import type {
  ApiFamilyListQuery,
  ApiFamilyListQueryVariables,
} from '../../api';
import { toInformationStatus, toSeverityStatus } from './useFamilyQuery';
import { useQuery } from './useQuery';

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

export type FamilyListItemDto = Pick<
  Family,
  'id' | 'informationStatus' | 'name' | 'severityStatus'
>;
export interface FamilyListDto {
  families: FamilyListItemDto[];
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
          severityStatus: toSeverityStatus(f.severity),
          informationStatus: toInformationStatus(f.status),
        })),
});

export const useFamilyListQuery = (
  options?: Apollo.QueryHookOptions<
    ApiFamilyListQuery,
    ApiFamilyListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
