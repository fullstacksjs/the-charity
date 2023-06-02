import { gql } from '@apollo/client';
import type { Household } from '@camp/domain';

import type {
  ApiCreateHouseholdMutation,
  ApiCreateHouseholdMutationVariables,
  ApiHouseholdListQuery,
} from '../../api';
import { ApiHouseholdListDocument } from '../../api';
import type { MutationOptions } from '../../apiClient/types';
import { useMutation } from '../../apiClient/useMutation';

const Document = gql`
  mutation CreateHousehold($name: String!) {
    insert_household_one(object: { name: $name }) {
      id
      code
      name
    }
  }
`;

export interface CreateHouseholdDto {
  household: Pick<Household, 'code' | 'id' | 'name'>;
}

const toClient = (
  data: ApiCreateHouseholdMutation | null,
): CreateHouseholdDto | null => {
  if (data?.insert_household_one?.code == null) return null;

  return {
    household: {
      id: data.insert_household_one.id,
      name: data.insert_household_one.name,
      code: data.insert_household_one.code,
    },
  };
};

interface Variables {
  name: string;
}

const toApiVariables = (
  variables: Variables,
): ApiCreateHouseholdMutationVariables => ({
  name: variables.name,
});

export function useCreateHouseholdMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, result, opts) {
      const { data: families } = result;
      const newFamilies = families?.insert_household_one;
      const prevFamiliesQuery = cache.readQuery<ApiHouseholdListQuery>({
        query: ApiHouseholdListDocument,
      });

      if (prevFamiliesQuery && newFamilies) {
        cache.writeQuery({
          query: ApiHouseholdListDocument,
          data: {
            household: [...prevFamiliesQuery.household, newFamilies],
          },
        });
      }

      return options?.update?.(cache, result, opts);
    },
  });
}
