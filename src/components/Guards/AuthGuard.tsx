import { useReactiveVar } from '@apollo/client';
import { AuthState } from '@camp/data-layer';
import { Navigate } from '@camp/router';
import { Outlet } from '@tanstack/react-location';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

export const AuthGuard = ({
  children = <Outlet />,
  to = '/auth/login',
}: Props) => {
  const authState = useReactiveVar(AuthState);

  return authState === 'Authenticated' ? children : <Navigate to={to} />;
};
