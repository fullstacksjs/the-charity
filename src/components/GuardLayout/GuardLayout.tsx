import { useReactiveVar } from '@apollo/client';
import { isAuthVar } from '@camp/data-layer';
import { Navigate } from '@camp/router';
import { Outlet } from '@tanstack/react-location';

export const GuardLayout = () => {
  const isAuth = useReactiveVar(isAuthVar);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
