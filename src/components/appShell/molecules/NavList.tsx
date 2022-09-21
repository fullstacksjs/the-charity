import { Box } from '@mantine/core';

import NavLink from '../atoms/NavLink';
import DashboardIcon from '../icons/components/DashboardIcon';
import PackageIcon from '../icons/components/PackageIcon';
import PeopleIcon from '../icons/components/PeopleIcon';

const NavList = () => {
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

export default NavList;
