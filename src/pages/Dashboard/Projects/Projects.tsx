import { CreateProjectButton, DashboardHeader } from '@camp/components';
import { Outlet } from '@tanstack/react-location';

export const Projects = () => {
  return (
    <>
      <DashboardHeader button={<CreateProjectButton />} />
      <Outlet />
    </>
  );
};
