import type * as Apollo from '@apollo/client';
import { Kind } from 'graphql';

import { CreateProjectDocument } from '../data-layer';

declare const x: Apollo.DocumentNode;

// if (x.definitions[0]?.kind === Kind.OPERATION_DEFINITION) {
//   console.log(x.definitions[0].operation);

// }
export const createSbApolloMock = () => ({
  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: [
      {
        request: {
          query: CreateProjectDocument,
          // variables: {
          //   input: {
          //     name: 'Shit',
          //   },
          // },
        },
        result: {
          data: {
            viewer: null,
          },
        },
      },
    ],
  },
});
