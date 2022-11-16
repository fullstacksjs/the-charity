import { ModalsProvider as MantineModalsProvider } from '@mantine/modals';

import { CreateFamilyModal } from '../CreateFamily/FamilyForm/CreateFamilyModal';
import { modalNames } from './modalNames';

export const modals = {
  [modalNames.familyModal]: CreateFamilyModal,
} as const;

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  return (
    <MantineModalsProvider modals={modals}>{children}</MantineModalsProvider>
  );
};
