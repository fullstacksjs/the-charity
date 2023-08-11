import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiHouseholdQuery,
  ApiHouseholdQueryVariables,
} from '@camp/data-layer';
import { HouseholdDocument } from '@camp/data-layer';
import { HouseholdSeverityEnum, HouseholdStatusEnum } from '@camp/domain';

export const ApiHouseholdFixture: NonNullable<
  ApiHouseholdQuery['household_by_pk']
> = {
  __typename: 'household',
  id: '1',
  name: 'خانوار اول',
  severity: HouseholdSeverityEnum.Critical,
  status: HouseholdStatusEnum.Completed,
  created_at: '2022-12-23',
  updated_at: '2022-12-23',
  code: 'P00001',
};

export const ApiDraftHouseholdFixture: NonNullable<
  ApiHouseholdQuery['household_by_pk']
> = {
  __typename: 'household',
  id: '1',
  name: 'خانوار اول',
  severity: HouseholdSeverityEnum.Critical,
  status: HouseholdStatusEnum.Draft,
  created_at: '2022-12-23',
  updated_at: '2022-12-23',
  code: 'P00001',
};

export const completeHouseholdMock: MockedResponse<
  ApiHouseholdQuery,
  ApiHouseholdQueryVariables
> = {
  request: { query: HouseholdDocument },
  result: { data: { household_by_pk: ApiHouseholdFixture } },
};

export const draftHouseholdMock: MockedResponse<
  ApiHouseholdQuery,
  ApiHouseholdQueryVariables
> = {
  request: { query: HouseholdDocument },
  result: { data: { household_by_pk: ApiDraftHouseholdFixture } },
};
