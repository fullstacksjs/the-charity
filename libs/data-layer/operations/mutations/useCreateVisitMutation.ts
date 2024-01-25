import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCreateVisitMutation,
  ApiCreateVisitMutationVariables,
} from '@camp/data-layer';
import type {
  Document as FileDocument,
  VisitKeys,
  VisitListItem,
} from '@camp/domain';

import {
  getVisitKeys,
  getVisitListItem,
  VisitKeysFragment,
  VisitListItemFragment,
} from '../fragments';

export const Document = gql`
  mutation CreateVisit($input: visit_insert_input!) {
    insert_visit_one(object: $input) {
      ...VisitKeys
      ...VisitListItem
    }
  }
  ${VisitKeysFragment}
  ${VisitListItemFragment}
`;

export interface CreateVisit {
  visit: (VisitKeys & VisitListItem) | undefined;
}

const toClient = (data: ApiCreateVisitMutation | null): CreateVisit => {
  const visit = data?.insert_visit_one;

  return {
    visit: visit
      ? {
          ...getVisitKeys(visit),
          ...getVisitListItem(visit),
        }
      : undefined,
  };
};

interface Variables {
  name: string;
  vistor?: string;
  householdId: string;
  date: Date;
  description?: string;
  documents: FileDocument[];
}

const toApiVariables = (
  variables: Variables,
): ApiCreateVisitMutationVariables => ({
  input: {
    name: variables.name,
    description: variables.description,
    vistor: variables.vistor,
    household_id: variables.householdId,
    // FIXME add doc mapper
    documents: { data: variables.documents.map(d => ({ url: d.url })) },
    date: variables.date.toISOString(),
  },
});

export function useCreateVisitMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
  });
}
