import { Logo, PackageIcon, PeopleIcon } from '@camp/design';
import { Center, Container, Text } from '@mantine/core';

import { NavLink } from '../../atoms';

const links = [
  {
    label: 'خانواده ها',
    icon: <PeopleIcon width="24" height="24" />,
    path: '/families',
  },
  {
    label: 'پروژه ها',
    icon: <PackageIcon width="24" height="24" />,
    path: '/projects',
  },
];

export const SideBar = () => {
  return (
    <Container
      sx={{
        width: 275,
        height: 768,
        marginRight: '2rem',
        display: 'block',
        textAlign: 'center',
        borderRight: '1px solid #EAECF0',
      }}
    >
      <Center
        sx={theme => ({
          background: theme.colors.secondarySubtle[6],
          padding: '2rem 0',
          margin: '1rem 8px 4rem 0px',
          display: 'block',
          textAlign: 'center',
          borderRadius: '8px',
        })}
      >
        <Logo />
        <Text color="fgSubtle">نامی مناسب برای خیریه</Text>
      </Center>
      {links.map(({ icon, label, path }) => (
        <NavLink label={label} path={path} icon={icon} key={label} />
      ))}
    </Container>
  );
};
