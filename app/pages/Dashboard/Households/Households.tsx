import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateHouseholdButton } from '../../../components';

export const Households = () => {
  return (
    <>
      <DashboardHeader button={<CreateHouseholdButton />} />
      <Outlet />
    </>
  );
};
