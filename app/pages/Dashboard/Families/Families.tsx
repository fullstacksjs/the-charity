import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateFamilyButton } from '../../../components';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateFamilyButton />} />
      <Outlet />
    </>
  );
};
