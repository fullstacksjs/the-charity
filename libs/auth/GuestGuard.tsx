import { useAuth0 } from '@auth0/auth0-react';
import { debug, DebugScopes } from '@camp/debug';
import { AppRoute, Navigate, Outlet } from '@camp/router';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

const defaultChildren = <Outlet />;

export const GuestGuard = ({
  children = defaultChildren,
  to = AppRoute.dashboard,
}: Props) => {
  const { isAuthenticated } = useAuth0();
  debug.log(DebugScopes.Auth, { isAuthenticated });

  return isAuthenticated ? <Navigate to={to} /> : children;
};
