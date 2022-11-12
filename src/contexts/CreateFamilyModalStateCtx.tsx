import { useBoolean } from 'ahooks';
import { createContext, useMemo } from 'react';

interface CreateFamilyModalStateCtx {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const CreateFamilyModalStateCtx =
  createContext<CreateFamilyModalStateCtx | null>(null);

export const CreateFamilyModalStateCtxProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isModalOpen, { setFalse: closeModal, setTrue: openModal }] =
    useBoolean(false);

  const ctx: CreateFamilyModalStateCtx = useMemo(
    () => ({
      isModalOpen,
      closeModal,
      openModal,
    }),
    [isModalOpen, closeModal, openModal],
  );
  return (
    <CreateFamilyModalStateCtx.Provider value={ctx}>
      {children}
    </CreateFamilyModalStateCtx.Provider>
  );
};
