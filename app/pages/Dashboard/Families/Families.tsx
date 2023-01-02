import { CreateFamilyButton, DashboardHeader } from '@camp/components';
import { Outlet } from '@camp/router';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
    </>
  );
};
