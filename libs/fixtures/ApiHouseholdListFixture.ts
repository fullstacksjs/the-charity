import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '@camp/data-layer';
import { HouseholdListDocument } from '@camp/data-layer';
import {
  ApiOrderBy,
  HouseholdSeverityEnum,
  HouseholdStatusEnum,
} from '@camp/domain';

export const ApiHouseholdListFixture: ApiHouseholdListQuery['household'] = [
  {
    __typename: 'household',
    id: '1',
    name: 'خانوار اول',
    severity: HouseholdSeverityEnum.Critical,
    status: HouseholdStatusEnum.Completed,
  },
  {
    __typename: 'household',
    id: '2',
    name: 'خانوار دوم',
    severity: HouseholdSeverityEnum.Critical,
    status: HouseholdStatusEnum.Draft,
  },
  {
    __typename: 'household',
    id: '3',
    name: 'خانوار سوم',
    severity: HouseholdSeverityEnum.Normal,
    status: HouseholdStatusEnum.Completed,
  },
];

export const householdListMock: MockedResponse<
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables
> = {
  request: {
    query: HouseholdListDocument,
    variables: {
      order_by: { created_at: ApiOrderBy.Desc },
      limit: 10,
      offset: 0,
    },
  },
  result: {
    data: {
      household_aggregate: {
        aggregate: { count: ApiHouseholdListFixture.length },
      },
      household: ApiHouseholdListFixture,
    },
  },
};
