import { PackageIcon, PeopleIcon } from '@camp/design';
import { Box } from '@mantine/core';

import { NavLink } from '../../atoms';

export const NavList = () => {
  return (
    <Box sx={{ width: 230 }}>
      <NavLink
        links={[
          {
            label: 'خانواده ها',
            icon: <PeopleIcon w="24" h="24" />,
            path: 'families',
          },
          {
            label: 'پروژه ها',
            icon: <PackageIcon w="24" h="24" />,
            path: 'projects',
          },
        ]}
      />
    </Box>
  );
};
