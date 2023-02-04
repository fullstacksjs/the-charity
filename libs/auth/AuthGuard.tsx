import { useAuth0 } from '@auth0/auth0-react';
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

  return isAuthenticated ? children : <Navigate to={to} />;
};
