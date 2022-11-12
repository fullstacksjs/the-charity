import {
  CreateFamilyButton,
  CreateFamilyModal,
  DashboardHeader,
} from '@camp/components';
import { useCreateFamilyModalState } from '@camp/hooks';
import { Outlet } from '@tanstack/react-location';

export const Families = () => {
  const { isModalOpen, closeModal } = useCreateFamilyModalState();
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
      <CreateFamilyModal opened={isModalOpen} onClose={closeModal} />
    </>
  );
};
