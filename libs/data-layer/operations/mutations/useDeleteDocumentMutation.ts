import { gql } from '@apollo/client';
import { mergeDeep } from '@apollo/client/utilities';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteDocumentMutation,
  ApiDeleteDocumentMutationVariables,
} from '@camp/data-layer';
import type { Document as Doc, DocumentKeys } from '@camp/domain';
import { isNull } from '@fullstacksjs/toolbox';

import {
  DocumentDetailFragment,
  DocumentKeysFragment,
  getDocumentDetail,
  getDocumentKeys,
} from '../fragments';

const Document = gql`
  mutation DeleteDocument($id: uuid!) {
    delete_document_by_pk(id: $id) {
      ...DocumentKeys
      ...DocumentDetail
    }
  }
  ${DocumentKeysFragment}
  ${DocumentDetailFragment}
`;

export interface DeleteDocument {
  document: (Doc & DocumentKeys) | undefined;
}

const toClient = (data: ApiDeleteDocumentMutation | null): DeleteDocument => {
  const deleted = data?.delete_document_by_pk;

  return {
    document: !isNull(deleted)
      ? {
          ...getDocumentDetail(deleted),
          ...getDocumentKeys(deleted),
        }
      : undefined,
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteDocumentMutationVariables => ({
  id: variables.id,
});

export const useDeleteDocumentMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }) {
      const document = data?.delete_document_by_pk;
      if (!document) return;

      cache.evict({ id: cache.identify(document) });
      cache.gc();

      cache.evict({ fieldName: 'document' });

      cache.modify({
        fields: {
          document_aggregate(existingAggregate) {
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
