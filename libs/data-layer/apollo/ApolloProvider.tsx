import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useRef } from 'react';

import { config } from '../../config/config';
import { createApolloClient } from './createApolloClient';

interface Props {
  children: React.ReactNode;
}

export const ApolloProvider = ({ children }: Props) => {
  const { getAccessTokenSilently } = useAuth0();
  const clientRef = useRef<ApolloClient<NormalizedCacheObject>>();

  if (!clientRef.current) {
    clientRef.current = createApolloClient(() =>
      getAccessTokenSilently({
        audience: config.schemaUrl,
        scope: 'read:current_user',
      }),
    );
    return null;
  }

  return (
    <BaseApolloProvider client={clientRef.current}>
      {children}
    </BaseApolloProvider>
  );
};
