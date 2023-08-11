import { DashboardHeader } from '@camp/design';
import { Outlet } from '@camp/router';

import { CreateHouseholdButton } from './_components/CreateHousehold';

const outlet = <Outlet />;

export const HouseholdsLayout = ({ children = outlet }) => {
  return (
    <>
      <DashboardHeader button={<CreateHouseholdButton />} />
      {children}
    </>
  );
};
