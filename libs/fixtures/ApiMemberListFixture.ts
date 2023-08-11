import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '@camp/data-layer';
import { HouseholdListDocument } from '@camp/data-layer';
import {
  GenderEnum,
  HouseholdSeverityEnum,
  HouseholdStatusEnum,
  MemberStatus,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';

export const ApiMemberListFixture: ApiMemberListQuery = {
  member: [
    {
      id: '1',
      __typename: 'member',
      dob: '2023-07-01',
      father_name: 'صفا',
      name: 'علی',
      national_id: '2323232323',
      gender: GenderEnum.Female,
      nationality: NationalityEnum.Ir,
      religion: ReligionEnum.Islam,
      status: MemberStatus.Completed,
      surname: 'رضا',
      household_id: '52708b87-1c48-4002-8b12-b17a328c0b58',
      household: {
        id: '52708b87-1c48-4002-8b12-b17a328c0b58',
        __typename: 'household',
        name: 'Miss Joann',
        status: HouseholdStatusEnum.Draft,
        severity: HouseholdSeverityEnum.Normal,
        code: 'F02505',
        created_at: '2023-07-02T12:37:51.818303+00:00',
        updated_at: '2023-07-02T12:37:51.818303+00:00',
      },
    },
  ],
};

export const apiMemberListMock: MockedResponse<
  ApiMemberListQuery,
  ApiMemberListQueryVariables
> = {
  request: { query: HouseholdListDocument, variables: { household_id: '1' } },
  result: { data: ApiMemberListFixture },
};
