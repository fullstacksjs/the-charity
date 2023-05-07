import { useAuth0 } from '@auth0/auth0-react';
import { debug, DebugScopes } from '@camp/debug';
import { AppRoute, Navigate, Outlet } from '@camp/router';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

const defaultChildren = <Outlet />;

export const AuthGuard = ({
  children = defaultChildren,
  to = AppRoute.login,
}: Props) => {
  const { isAuthenticated } = useAuth0();
  debug.log(DebugScopes.Auth, { isAuthenticated });

  return isAuthenticated ? children : <Navigate to={to} />;
};
