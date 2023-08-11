import type { MockedResponse } from '@apollo/client/testing';
import type {
  ApiProjectListQuery,
  ApiProjectListQueryVariables,
} from '@camp/data-layer';
import { ProjectListDocument } from '@camp/data-layer';
import { ProjectStatusEnum } from '@camp/domain';

export const ApiProjectListFixture: ApiProjectListQuery['project_aggregate']['nodes'] =
  [
    {
      __typename: 'project',
      id: '1',
      name: 'پروژه اول',
      created_at: '2022-12-23',
      updated_at: '2022-12-23',
      status: ProjectStatusEnum.Closed,
    },
    {
      __typename: 'project',
      id: '2',
      name: 'پروژه دوم',
      created_at: '2022-12-23',
      updated_at: '2022-12-23',
      status: ProjectStatusEnum.Done,
    },
    {
      __typename: 'project',
      id: '3',
      name: 'پروژه سوم',
      created_at: '2022-12-23',
      updated_at: '2022-12-23',
      status: ProjectStatusEnum.InProgress,
    },
    {
      __typename: 'project',
      id: '4',
      name: 'پروژه چهارم',
      created_at: '2022-12-23',
      updated_at: '2022-12-23',
      status: ProjectStatusEnum.Planning,
    },
    {
      __typename: 'project',
      id: '5',
      name: 'پروژه پنجم',
      created_at: '2022-12-23',
      updated_at: '2022-12-23',
      status: ProjectStatusEnum.Suspended,
    },
  ];

export const projectListMock: MockedResponse<
  ApiProjectListQuery,
  ApiProjectListQueryVariables
> = {
  request: { query: ProjectListDocument },
  result: { data: { project_aggregate: { nodes: ApiProjectListFixture } } },
};
