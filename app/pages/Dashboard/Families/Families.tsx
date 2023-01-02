import { CreateFamilyButton, DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
    </>
  );
};
