import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateHouseholdButton } from '../../../components';

export const Families = () => {
  return (
    <>
      <DashboardHeader button={<CreateHouseholdButton />} />
      <Outlet />
    </>
  );
};
