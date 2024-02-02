import { gql } from '@apollo/client';
import { mergeDeep } from '@apollo/client/utilities';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteVisitMutation,
  ApiDeleteVisitMutationVariables,
} from '@camp/data-layer';
import type { Visit, VisitKeys } from '@camp/domain';
import { fileStorageClient } from '@camp/file-storage-api';
import { isNull } from '@fullstacksjs/toolbox';
import Prray from 'prray';

import { getVisitKeys, VisitKeysFragment } from '../fragments';

const Document = gql`
  mutation DeleteVisit($id: uuid!) {
    delete_visit_by_pk(id: $id) {
      ...VisitKeys
      name
      documents {
        url
        id
        storage_id
      }
    }
  }
  ${VisitKeysFragment}
`;

export interface DeleteVisit {
  visit: (Pick<Visit, 'name'> & VisitKeys) | undefined;
}

const toClient = (data: ApiDeleteVisitMutation | null): DeleteVisit => {
  const deleted = data?.delete_visit_by_pk;

  return {
    visit: !isNull(deleted)
      ? {
          ...getVisitKeys(deleted),
          name: deleted.name,
        }
      : undefined,
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteVisitMutationVariables => ({
  id: variables.id,
});

export const useDeleteVisitMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    onCompleted: async (data, ctx) => {
      try {
        await Prray.from(
          data?.delete_visit_by_pk?.documents ?? [],
        ).forEachAsync(d => fileStorageClient.unUpload(d.storage_id));
      } finally {
        options?.onCompleted?.(data, ctx);
      }
    },
    update(cache, { data }) {
      const visit = data?.delete_visit_by_pk;
      if (!visit) return;

      cache.evict({ id: cache.identify(visit) });
      cache.gc();

      cache.evict({ fieldName: 'visit' });

      cache.modify({
        fields: {
          visit_aggregate(existingAggregate) {
            return mergeDeep(existingAggregate, {
              aggregate: {
                count: existingAggregate.aggregate?.count
                  ? existingAggregate.aggregate.count - 1
                  : undefined,
              },
            });
          },
        },
      });
    },
  });
};
