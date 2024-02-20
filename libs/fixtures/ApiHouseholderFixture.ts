import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables,
} from '@camp/data-layer';
import { HouseholderDocument } from '@camp/data-layer';

import {
  GenderEnum,
  HouseholdStatusEnum,
  ReligionEnum,
} from '../domain/ApiSchema';

export const ApiHouseholderFixture: ApiHouseholderQuery['householder_by_pk'] = {
  __typename: 'householder',
  id: '1',
  name: 'محمد',
  surname: 'علیان',
  dob: '2000/01/01',
  father_name: 'علی',
  gender: GenderEnum.Male,
  national_id: '1234567890',
  religion: ReligionEnum.Islam,
  status: HouseholdStatusEnum.Completed,
};

export const householderMock: MockedResponse<
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables
> = {
  request: { query: HouseholderDocument, variables: { household_id: '1' } },
  result: { data: { householder_by_pk: ApiHouseholderFixture } },
};
