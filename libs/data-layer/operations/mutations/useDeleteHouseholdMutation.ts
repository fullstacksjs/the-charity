import { gql } from '@apollo/client';
import type { Household } from '@camp/domain';

import type {
  ApiDeleteHouseholdMutationMutation,
  ApiDeleteHouseholdMutationMutationVariables,
} from '../../api';
import { ApiDeleteHouseholdMutationDocument } from '../../api';
import type { MutationOptions } from '../../apiClient';
import { useMutation } from '../../apiClient';

const Document = gql`
  mutation DeleteHouseholdMutation($id: uuid!) {
    delete_household_by_pk(id: $id) {
      id
      name
    }
  }
`;

export interface DeleteHousehold {
  household: Pick<Household, 'id' | 'name'>;
}

const toClient = (
  data: ApiDeleteHouseholdMutationMutation | null,
): DeleteHousehold | null => {
  if (data?.delete_household_by_pk == null) return null;

  return {
    household: {
      id: data.delete_household_by_pk.id,
      name: data.delete_household_by_pk.name,
    },
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteHouseholdMutationMutationVariables => ({
  id: variables.id,
});

export const useDeleteHouseholdMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, { data: household }, { variables }) {
      const deleteHousehold = household?.delete_household_by_pk;
      const id = variables?.id;

      if (deleteHousehold) {
        cache.writeQuery({
          query: ApiDeleteHouseholdMutationDocument,
          variables: { id },
          data: {
            delete_household_by_pk: {
              ...deleteHousehold,
            },
          },
        });
      }
    },
  });
};
