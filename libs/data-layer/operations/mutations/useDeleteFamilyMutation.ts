import { gql } from '@apollo/client';
import type { Family } from '@camp/domain';

import type {
  ApiDeleteFamilyMutationMutation,
  ApiDeleteFamilyMutationMutationVariables,
} from '../../api';
import { ApiDeleteFamilyMutationDocument } from '../../api';
import type { MutationOptions } from '../../apiClient';
import { useMutation } from '../../apiClient';

const Document = gql`
  mutation DeleteFamilyMutation($id: uuid!) {
    delete_family_by_pk(id: $id) {
      id
      name
    }
  }
`;

export interface DeleteFamily {
  family: Pick<Family, 'id' | 'name'>;
}

const toClient = (
  data: ApiDeleteFamilyMutationMutation | null | undefined,
): DeleteFamily | null =>
  data?.delete_family_by_pk == null
    ? null
    : {
        family: {
          id: data.delete_family_by_pk.id,
          name: data.delete_family_by_pk.name,
        },
      };

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteFamilyMutationMutationVariables => ({
  id: variables.id,
});

export const useDeleteFamilyMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
): any => {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, { data: family }, { variables }) {
      const deleteFamily = family?.delete_family_by_pk;
      const id = variables?.id;

      if (deleteFamily) {
        cache.writeQuery({
          query: ApiDeleteFamilyMutationDocument,
          variables: { id },
          data: {
            delete_family_by_pk: {
              ...deleteFamily,
            },
          },
        });
      }
    },
  });
};
