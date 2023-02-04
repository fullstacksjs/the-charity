import { type ApolloClient, type NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { useAuth0 } from '@camp/auth';
import { useRef } from 'react';

import { createApolloClient } from './createApolloClient';

interface Props {
  children: React.ReactNode;
}

export const ApolloProvider = ({ children }: Props) => {
  const { getAccessTokenSilently } = useAuth0();
  const clientRef = useRef<ApolloClient<NormalizedCacheObject>>();

  if (!clientRef.current) {
    clientRef.current = createApolloClient(() => getAccessTokenSilently());
    return null;
  }

  return (
    <BaseApolloProvider client={clientRef.current}>
      {children}
    </BaseApolloProvider>
  );
};
