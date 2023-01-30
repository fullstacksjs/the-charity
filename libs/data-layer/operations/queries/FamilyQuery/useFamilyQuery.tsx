import * as Apollo from '@apollo/client';

import type { ApiFamilyQuery, ApiFamilyQueryVariables } from '../../api';
import {
  ApiFamilyDocument,
  ApiFamilySeverityEnum,
  ApiFamilyStatusEnum,
} from '../../api';

export type SeverityStatus = 'critical' | 'normal';
export type InformationStatus = 'completed' | 'draft';

export interface Family {
  family: {
    id: string;
    name: string;
    code: string;
    severity: SeverityStatus;
    information: InformationStatus;
  };
}

export const toSeverityStatus = (
  severity: ApiFamilySeverityEnum,
): SeverityStatus =>
  severity === ApiFamilySeverityEnum.Normal ? 'normal' : 'critical';

export const toInformationStatus = (
  info: ApiFamilyStatusEnum,
): InformationStatus =>
  info === ApiFamilyStatusEnum.Completed ? 'completed' : 'draft';

const toClient = (data: ApiFamilyQuery | null | undefined): Family | null =>
  data?.family_by_pk == null
    ? null
    : {
        family: {
          id: data.family_by_pk.id,
          name: data.family_by_pk.name,
          code: data.family_by_pk.code ?? '',
          severity: toSeverityStatus(data.family_by_pk.severity),
          information: toInformationStatus(data.family_by_pk.status),
        },
      };

export function useFamilyQuery(
  options: Apollo.QueryHookOptions<ApiFamilyQuery, ApiFamilyQueryVariables>,
) {
  const { data, ...rest } = Apollo.useQuery(ApiFamilyDocument, options);

  return { data: toClient(data), ...rest } as const;
}
