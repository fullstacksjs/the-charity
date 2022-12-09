import { CreateFamilyButton, DashboardHeader } from '@camp/ui';
import { Outlet } from '@tanstack/react-location';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
    </>
  );
};
