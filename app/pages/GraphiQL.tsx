import 'graphiql/graphiql.css';

import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';

const fetcher = createGraphiQLFetcher({
  url: 'https://api.fullstacksjs.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
  },
});

const GraphiQLPage = () => <GraphiQL fetcher={fetcher} />;

export const routes = {
  path: '/graphiql',
  element: <GraphiQLPage />,
};
