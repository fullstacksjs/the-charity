import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateProjectButton } from './CreateProject';

const outlet = <Outlet />;

export const ProjectsLayout = ({ children = outlet }) => {
  return (
    <>
      <DashboardHeader button={<CreateProjectButton />} />
      {children}
    </>
  );
};
