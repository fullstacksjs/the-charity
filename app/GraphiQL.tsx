import 'graphiql/graphiql.css';

import { config } from '@camp/config';
import { isNull } from '@fullstacksjs/toolbox';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import { useEffect } from 'react';

if (config.isDev && (isNull(config.schemaUrl) || isNull(config.hasuraSecret)))
  throw Error('Hasura Secret is needed');

const fetcher = createGraphiQLFetcher({
  url: config.schemaUrl!,
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': config.hasuraSecret!,
  },
});

const GraphiQLPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    return () => document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return <GraphiQL fetcher={fetcher} />;
};

export const routes = {
  path: '/graphiql',
  element: <GraphiQLPage />,
};
