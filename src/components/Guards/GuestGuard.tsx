import { useReactiveVar } from '@apollo/client';
import { AuthState } from '@camp/data-layer';
import { Navigate } from '@camp/router';
import { Outlet } from '@tanstack/react-location';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

export const GuestGuard = ({
  children = <Outlet />,
  to = '/dashboard',
}: Props) => {
  const authState = useReactiveVar(AuthState);

  return authState === 'NotAuthenticated' ? children : <Navigate to={to} />;
};
