import { CreateProjectButton, DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

export const Projects = () => {
  return (
    <>
      <DashboardHeader button={<CreateProjectButton />} />
      <Outlet />
    </>
  );
};
