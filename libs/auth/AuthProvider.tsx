import { Auth0Provider } from '@auth0/auth0-react';
import { config } from '@camp/config';

interface Props {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain={config.auth0.domain}
      clientId={config.auth0.clientId}
      redirectUri={window.location.origin}
      audience={config.auth0.audience}
      scope={config.auth0.scope}
      cacheLocation={config.auth0.cacheLocation}
    >
      {children}
    </Auth0Provider>
  );
};
