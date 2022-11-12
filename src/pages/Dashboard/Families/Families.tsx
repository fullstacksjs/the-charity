import {
  CreateFamilyButton,
  CreateFamilyModal,
  DashboardHeader,
} from '@camp/components';
import { Outlet } from '@tanstack/react-location';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
      <CreateFamilyModal />
    </>
  );
};
