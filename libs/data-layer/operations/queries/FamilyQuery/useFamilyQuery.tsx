import Apollo from '@apollo/client';
import type { BadgeStatus } from '@camp/design';
import { messages } from '@camp/messages';

import type { ApiFamilyQuery, ApiFamilyQueryVariables } from '../../api';
import {
  ApiFamilyDocument,
  ApiFamilySeverityEnum,
  ApiFamilyStatusEnum,
} from '../../api';

export interface SeverityStatus {
  text: string;
  state: BadgeStatus;
}

export interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

export const toInformationStatus = (
  status: ApiFamilyStatusEnum,
): InformationStatus => {
  return status === ApiFamilyStatusEnum.Completed
    ? { text: messages.families.informationStatus.completed, state: 'success' }
    : { text: messages.families.informationStatus.draft, state: 'warning' };
};

export const toSeverityStatus = (
  severity: ApiFamilySeverityEnum,
): SeverityStatus => {
  return severity === ApiFamilySeverityEnum.Normal
    ? { text: messages.families.severityStatus.normal, state: 'warning' }
    : { text: messages.families.severityStatus.critical, state: 'error' };
};

export interface Family {
  family: {
    name: string;
    code: string;
    severity: SeverityStatus;
    status: InformationStatus;
  };
}

const toClient = (data: ApiFamilyQuery | null | undefined): Family | null =>
  data?.family_by_pk == null
    ? null
    : {
        family: {
          name: data.family_by_pk.name,
          code: data.family_by_pk.code ?? '',
          severity: toSeverityStatus(data.family_by_pk.severity),
          status: toInformationStatus(data.family_by_pk.status),
        },
      };

export function useFamilyQuery(
  options: Apollo.QueryHookOptions<ApiFamilyQuery, ApiFamilyQueryVariables>,
) {
  const { data, ...rest } = Apollo.useQuery(ApiFamilyDocument, options);

  return { data: toClient(data), ...rest } as const;
}
