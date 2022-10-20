import { useAuth } from '@camp/hooks';
import { Navigate } from '@camp/router';
import { Outlet } from '@tanstack/react-location';

export const GuardLayout = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
