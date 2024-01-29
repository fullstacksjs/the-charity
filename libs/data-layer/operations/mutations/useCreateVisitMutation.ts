import { gql } from '@apollo/client';
import { mergeDeep } from '@apollo/client/utilities';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCreateVisitMutation,
  ApiCreateVisitMutationVariables,
} from '@camp/data-layer';
import type { StorageFile } from '@camp/design';
import type { VisitKeys, VisitListItem } from '@camp/domain';

import {
  getVisitKeys,
  getVisitListItem,
  VisitKeysFragment,
  VisitListItemFragment,
} from '../fragments';

const Document = gql`
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
  visitor?: string;
  householdId: string;
  date: Date;
  description?: string;
  documents: StorageFile[];
}

const toApiVariables = (
  variables: Variables,
): ApiCreateVisitMutationVariables => ({
  input: {
    name: variables.name,
    description: variables.description,
    visitor: variables.visitor,
    household_id: variables.householdId,
    documents: {
      data: variables.documents.map(d => ({ url: d.url, storage_id: d.id })),
    },
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

    update(cache, result, opts) {
      const newVisit = result.data?.insert_visit_one;
      if (!newVisit) return;

      cache.modify({
        fields: {
          visit(existingVisitsRefs = []) {
            const newVisitRef = cache.writeFragment({
              data: newVisit,
              fragment: gql`
                fragment NewVisit on visit {
                  ...VisitKeys
                  ...VisitListItem
                }
                ${VisitKeysFragment}
                ${VisitListItemFragment}
              `,
              fragmentName: 'NewVisit',
            });
            return [newVisitRef!, ...existingVisitsRefs];
          },
          visit_aggregate(existingAggregate) {
            return mergeDeep(existingAggregate, {
              aggregate: {
                count: existingAggregate.aggregate?.count
                  ? existingAggregate.aggregate.count + 1
                  : undefined,
              },
            });
          },
        },
      });

      return options?.update?.(cache, result, opts);
    },
  });
}
