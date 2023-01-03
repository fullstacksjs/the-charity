import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from '@camp/router';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

export const AuthGuard = ({
  children = <Outlet />,
  to = '/auth/login',
}: Props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to={to} />;
};
