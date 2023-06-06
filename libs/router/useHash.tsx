import { useNavigate } from '@tanstack/react-location';

import { useLocation } from './useLocation';

export const useHash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setHash = (hash: string) => {
    navigate({ hash });
  };

  const hash = location.current.hash;
  return [hash, setHash] as const;
};
