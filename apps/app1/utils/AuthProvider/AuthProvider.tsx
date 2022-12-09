import { useAuth0 } from '@auth0/auth0-react';

interface Props {
  children: JSX.Element;
  fallback: JSX.Element;
}

export const AuthProvider = ({ children, fallback }: Props) => {
  const { isLoading } = useAuth0();

  return isLoading ? fallback : children;
};
