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
            icon: <PeopleIcon width="24" height="24" />,
            path: 'families',
          },
          {
            label: 'پروژه ها',
            icon: <PackageIcon width="24" height="24" />,
            path: 'projects',
          },
        ]}
      />
    </Box>
  );
};
