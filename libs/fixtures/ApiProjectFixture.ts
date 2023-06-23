import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiProjectQuery,
  ApiProjectQueryVariables,
} from '@camp/data-layer';
import { ProjectDocument } from '@camp/data-layer';
import { ProjectStatusEnum } from '@camp/domain';

import { ApiHouseholdFixture } from './ApiHouseholdFixture';

export const ApiProjectFixture: ApiProjectQuery['project_by_pk'] = {
  __typename: 'project',
  id: '1',
  name: 'پروژه اول',
  description: 'توضیحات پروژه اول',
  due_date: '2022-12-29',
  start_date: '2022-12-23',
  created_at: '2022-12-23',
  updated_at: '2022-12-23',
  status: ProjectStatusEnum.Closed,
  households: [{ household: ApiHouseholdFixture }],
};

export const projectMock: MockedResponse<
  ApiProjectQuery,
  ApiProjectQueryVariables
> = {
  request: { query: ProjectDocument },
  result: { data: { project_by_pk: ApiProjectFixture } },
};
