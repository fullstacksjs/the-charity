import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';

import { AuthState, initiateAuthState } from '../../data-layer/variables';

interface Props {
  children: JSX.Element;
  fallback: JSX.Element;
}

export const AuthProvider = ({ children, fallback }: Props) => {
  const authState = useReactiveVar(AuthState);

  useEffect(() => {
    void initiateAuthState();
  }, []);

  return authState === 'NotInitialized' ? fallback : children;
};
