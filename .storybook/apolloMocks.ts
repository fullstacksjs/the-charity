import { MockedProvider } from '@apollo/client/testing';
import { ApiFamilyList } from './fixtures/ApiFamilyList';
import {
  ApiCreateProjectDocument,
  ApiFamilyDocument,
  ApiFamilyListDocument,
  ApiFamilySeverityEnum,
  ApiFamilyStatusEnum,
  ApiProjectListDocument,
} from '../libs/data-layer/api';

export const apolloMocks = {
  MockedProvider,
  mocks: [
    {
      request: {
        query: ApiCreateProjectDocument,
        variables: {
          input: {
            name: 'guy',
            description: 'description',
          },
        },
      },
      result: {
        data: {
          name: 'guy',
          description: 'description',
        },
      },
    },
    {
      request: {
        query: ApiFamilyDocument,
        variables: { id: undefined },
      },
      result: {
        data: {
          family_by_pk: {
            code: 'F00001',
            name: 'فول استک زاده',
            severity: ApiFamilySeverityEnum.Critical,
            status: ApiFamilyStatusEnum.Completed,
          },
        },
      },
    },
    {
      request: { query: ApiFamilyListDocument },
      result: {
        data: { family: ApiFamilyList },
      },
    },
    {
      request: { query: ApiProjectListDocument },
      result: {
        data: {
          project_aggregate: {
            nodes: [
              { name: 'name 1', id: '1' },
              { name: 'name 2', id: '2' },
              { name: 'name 3', id: '3' },
            ],
          },
        },
      },
    },
  ],
};
