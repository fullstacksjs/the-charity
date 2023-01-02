import { CreateProjectButton, DashboardHeader } from '@camp/components';
import { Outlet } from '@camp/router';

export const Projects = () => {
  return (
    <>
      <DashboardHeader button={<CreateProjectButton />} />
      <Outlet />
    </>
  );
};
