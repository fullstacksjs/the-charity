import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiUpsertHouseholderMutation,
  ApiUpsertHouseholderMutationVariables,
} from '@camp/data-layer';
import type {
  AccommodationTypeEnum,
  CityEnum,
  GenderEnum,
  Householder,
  HouseholderKeys,
  NationalityEnum,
  ProvinceEnum,
  ReligionEnum,
} from '@camp/domain';

import {
  getHouseholder,
  getHouseholderKeys,
  HouseholderFragment,
  HouseholderKeysFragment,
} from '../fragments';
import { HouseholderDocument } from '../queries';

const Document = gql`
  mutation UpsertHouseholder($input: householder_insert_input!) {
    insert_householder_one(
      object: $input
      on_conflict: {
        constraint: householder_household_id_key
        update_columns: [
          gender
          dob
          father_name
          name
          religion
          surname
          national_id
          city
          province
          nationality
          accommodation_type
          neighborhood
          address
          zip_code
          prior_accommodation_address
          health_description
        ]
      }
    ) {
      ...HouseholderKeys
      ...Householder
    }
  }
  ${HouseholderFragment}
  ${HouseholderKeysFragment}
`;

export interface UpsertHouseholder {
  householder: (Householder & HouseholderKeys) | undefined;
}

const toClient = (
  data: ApiUpsertHouseholderMutation | null,
): UpsertHouseholder => {
  const householder = data?.insert_householder_one;

  return {
    householder: householder
      ? ({
          ...getHouseholderKeys(householder),
          ...getHouseholder(householder),
        } as Householder)
      : undefined,
  };
};

interface Variables {
  householdId: string;
  name?: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date | null;
  religion?: ReligionEnum;
  gender?: GenderEnum;
  issuedAt?: CityEnum;
  province?: ProvinceEnum;
  nationality?: NationalityEnum;
  cityOfBirth?: CityEnum;
  accommodationType?: AccommodationTypeEnum;
  neighborhood?: string;
  address?: string;
  zipCode?: string;
  priorAccommodationAddress?: string;
  healthDescription?: string;
}

const toApiVariables = (
  variables: Variables,
): ApiUpsertHouseholderMutationVariables => ({
  input: {
    name: variables.name,
    household_id: variables.householdId,
    national_id: variables.nationalId,
    father_name: variables.fatherName,
    surname: variables.surname,
    nationality: variables.nationality,
    religion: variables.religion,
    gender: variables.gender,
    dob: variables.dob?.toISOString(),
    province: variables.province,
    city: variables.cityOfBirth,
    accommodation_type: variables.accommodationType,
    neighborhood: variables.neighborhood,
    address: variables.address,
    zip_code: variables.zipCode,
    prior_accommodation_address: variables.priorAccommodationAddress,
    health_description: variables.healthDescription,
  },
});

export function useUpsertHouseholderMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }, { variables }) {
      const newHouseholder = data?.insert_householder_one;
      const householdId = variables?.input.household_id;

      if (newHouseholder) {
        cache.writeQuery({
          query: HouseholderDocument,
          variables: { household_id: householdId },
          data: {
            householder_by_pk: {
              ...newHouseholder,
            },
          },
        });
      }
    },
  });
}
