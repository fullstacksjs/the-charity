import { Box } from '@mantine/core';

import { DashboardIcon } from '../appShell/icons/DashboardIcon';
import { PackageIcon } from '../appShell/icons/PackageIcon';
import { PeopleIcon } from '../appShell/icons/PeopleIcon';
import { NavLink } from '../atoms/NavLink';

export const NavList = () => {
  return (
    <Box sx={{ width: 230 }}>
      <NavLink
        links={[
          {
            label: 'داشبورد',
            icon: <DashboardIcon w="24" h="24" />,
          },
          {
            label: 'خانواده ها',
            icon: <PeopleIcon w="24" h="24" />,
          },
          {
            label: 'پروژه ها',
            icon: <PackageIcon w="24" h="24" />,
          },
        ]}
      />
    </Box>
  );
};
