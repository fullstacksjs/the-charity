import { CreateFamilyModalStateCtx } from '@camp/contexts';
import { useContext } from 'react';

export const useCreateFamilyModalState = () => {
  const ctx = useContext(CreateFamilyModalStateCtx);
  if (ctx == null)
    throw new Error('context provider for createFamilyModalState is missing');
  return ctx;
};
