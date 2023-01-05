import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateProjectButton } from '../../../components';

export const Projects = () => {
  return (
    <>
      <DashboardHeader button={<CreateProjectButton />} />
      <Outlet />
    </>
  );
};
