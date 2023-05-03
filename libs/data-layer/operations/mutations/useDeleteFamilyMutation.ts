import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import type { Family } from '@camp/domain';

import type {
  ApiDeleteFamilyMutationMutation,
  ApiDeleteFamilyMutationMutationVariables,
} from '../../api';
import { useMutation } from './useMutation';

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
  variables?: Variables | null,
): ApiDeleteFamilyMutationMutationVariables | undefined =>
  variables == null
    ? undefined
    : {
        id: variables.id,
      };

export const useDeleteFamilyMutation = (
  options?: MutationHookOptions<
    ApiDeleteFamilyMutationMutation,
    ApiDeleteFamilyMutationMutationVariables
  >,
): any => {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
  });
};
