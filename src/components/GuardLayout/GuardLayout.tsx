import { Navigate } from '@camp/router';
import { Outlet } from '@tanstack/react-location';

export const GuardLayout = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
