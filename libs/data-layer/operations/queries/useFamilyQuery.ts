import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import {
  type Family,
  type InformationStatus,
  type SeverityStatus,
} from '@camp/domain';

import { type ApiFamilyQuery, type ApiFamilyQueryVariables } from '../../api';
import { ApiFamilySeverityEnum, ApiFamilyStatusEnum } from '../../api';
import { useQuery } from './useQuery';

const Document = gql`
  query Family($id: uuid!) {
    family_by_pk(id: $id) {
      id
      name
      status
      severity
      code
    }
  }
`;

export interface FamilyDto {
  family: Family;
}

export const toSeverityStatus = (
  severity: ApiFamilySeverityEnum,
): SeverityStatus =>
  severity === ApiFamilySeverityEnum.Normal ? 'normal' : 'critical';

export const toInformationStatus = (
  info: ApiFamilyStatusEnum,
): InformationStatus =>
  info === ApiFamilyStatusEnum.Completed ? 'completed' : 'draft';

const toClient = (data: ApiFamilyQuery | null | undefined): FamilyDto | null =>
  data?.family_by_pk == null
    ? null
    : {
        family: {
          id: data.family_by_pk.id,
          name: data.family_by_pk.name,
          code: data.family_by_pk.code ?? '',
          severityStatus: toSeverityStatus(data.family_by_pk.severity),
          informationStatus: toInformationStatus(data.family_by_pk.status),
        },
      };

export const useFamilyQuery = (
  options: Apollo.QueryHookOptions<ApiFamilyQuery, ApiFamilyQueryVariables>,
) => useQuery(Document, { ...options, mapper: toClient });
