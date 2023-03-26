import 'graphiql/graphiql.css';

import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';

const fetcher = createGraphiQLFetcher({
  url: 'https://api.fullstacksjs.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
  },
});

export const GraphiQLPage = () => <GraphiQL fetcher={fetcher} />;
