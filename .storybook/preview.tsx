import React from 'react';
import { NotificationsProvider } from '@mantine/notifications';
import {
  CreateProjectDocument,
  FamilyDocument,
  FamilyListDocument,
  FamilySeverityEnum,
  FamilyStatusEnum,
  ProjectListDocument,
} from '../libs/data-layer';
import { MockedProvider } from '@apollo/client/testing';
import {
  createMemoryHistory,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { ThemeProvider } from '../libs/design';
import { DecoratorFn, Parameters } from '@storybook/react';
import { shortFamiliesInfo } from '../app/fixtures/shortFamiliesInfo';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
    mocks: [
      {
        request: {
          query: CreateProjectDocument,
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
          query: FamilyDocument,
          variables: {
            id: undefined,
          },
        },
        result: {
          data: {
            family_by_pk: {
              code: 'F00001',
              name: 'فول استک زاده',
              severity: FamilySeverityEnum.Critical,
              status: FamilyStatusEnum.Completed,
            },
          },
        },
      },
      {
        request: {
          query: FamilyListDocument,
        },
        result: {
          data: {
            family: shortFamiliesInfo,
          },
        },
      },
      {
        request: {
          query: ProjectListDocument,
        },
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
  },
};

export const decorators: DecoratorFn[] = [
  (Story, { args }) => {
    const router = args.router;
    const { layout, ...routes } = args.router ?? {};
    const Layout = layout ?? React.Fragment;
    const location = new ReactLocation({
      history: createMemoryHistory({ initialEntries: [router?.route ?? '/'] }),
    });

    return router ? (
      <Router routes={[routes]} location={location}>
        <Layout>
          <Story />
        </Layout>
      </Router>
    ) : (
      <Router routes={[]} location={location}>
        <Story />
      </Router>
    );
  },
  Story => (
    <ThemeProvider>
      <NotificationsProvider limit={3}>
        <Story />
      </NotificationsProvider>
    </ThemeProvider>
  ),
];
