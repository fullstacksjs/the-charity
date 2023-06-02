import { MockedProvider } from '@apollo/client/testing';
import { ApiHouseholdList } from './fixtures/ApiHouseholdList';
import {
  ApiCreateProjectDocument,
  ApiHouseholdDocument,
  ApiHouseholdListDocument,
  ApiHouseholdSeverityEnum,
  ApiHouseholdStatusEnum,
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
        query: ApiHouseholdDocument,
        variables: { id: undefined },
      },
      result: {
        data: {
          household_by_pk: {
            code: 'F00001',
            name: 'فول استک زاده',
            severity: ApiHouseholdSeverityEnum.Critical,
            status: ApiHouseholdStatusEnum.Completed,
          },
        },
      },
    },
    {
      request: { query: ApiHouseholdListDocument },
      result: {
        data: { household: ApiHouseholdList },
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
