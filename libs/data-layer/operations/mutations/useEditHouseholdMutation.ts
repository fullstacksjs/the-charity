import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiEditHouseholdMutation,
  ApiEditHouseholdMutationVariables,
  ApiHouseholdQuery,
} from '@camp/data-layer';
import type {
  HouseholdKeys,
  HouseholdListItem,
  HouseholdSeverityEnum,
} from '@camp/domain';
import { HouseholdStatusEnum } from '@camp/domain';

import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';
import { HouseholdDocument } from '../queries';

const Document = gql`
  mutation EditHousehold($id: uuid!, $update: household_set_input!) {
    update_household_by_pk(pk_columns: { id: $id }, _set: $update) {
      ...HouseholdKeys
      ...HouseholdListItem
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdListItemFragment}
`;

export interface EditHouseholdDto {
  household: (HouseholdKeys & HouseholdListItem) | undefined;
}

const toClient = (data: ApiEditHouseholdMutation | null): EditHouseholdDto => {
  const household = data?.update_household_by_pk;
  return {
    household: household
      ? {
          ...getHouseholdKeys(household),
          ...getHouseholdListItem(household),
        }
      : undefined,
  };
};

interface Variables {
  id: string;
  update: {
    name: string;
    severity: HouseholdSeverityEnum;
  };
}

const toApiVariables = (
  variables: Variables,
): ApiEditHouseholdMutationVariables => ({
  id: variables.id,
  update: {
    name: variables.update.name,
    severity: variables.update.severity,
    status: HouseholdStatusEnum.Draft,
  },
});

export function useEditHouseholdMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, result, opts) {
      const newHousehold = result.data?.update_household_by_pk;
      if (!newHousehold) return;

      const { household_by_pk: prevHousehold } =
        cache.readQuery<ApiHouseholdQuery>({
          query: HouseholdDocument,
          variables: { id: newHousehold.id },
        })!;

      cache.writeQuery<ApiHouseholdQuery>({
        query: HouseholdDocument,
        data: {
          household_by_pk: { ...prevHousehold!, ...newHousehold },
        },
      });

      return options?.update?.(cache, result, opts);
    },
  });
}
