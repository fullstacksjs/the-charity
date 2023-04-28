import { PackageIcon, PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createStyles, Image, Stack, Text } from '@mantine/core';

import type { NavLinkProps } from '../NavLink';
import { ExitNavLink, NavLinks } from '../NavLink';
import { navLinkIds as ids } from './Sidebar.ids';

const useStyles = createStyles(theme => ({
  root: {
    width: 275,
    borderRight: '1px solid',
    borderColor: theme.colors.gray[2],
    paddingInline: 20,
    paddingBlock: 30,
  },
  logoArea: {
    backgroundColor: theme.colors.gray[0],
    paddingBlock: 20,
    borderRadius: 8,
  },
}));

export const links: NavLinkProps[] = [
  {
    label: messages.families.title,
    icon: <PeopleIcon width="24" height="24" />,
    to: '/dashboard/families',
    id: ids.families,
  },
  {
    label: messages.projects.title,
    icon: <PackageIcon width="24" height="24" />,
    to: '/dashboard/projects',
    id: ids.projects,
  },
];

export const SideBar = () => {
  const { classes } = useStyles();

  return (
    <Stack spacing={100} justify="start" className={classes.root}>
      <Stack
        spacing={10}
        align="center"
        justify="center"
        className={classes.logoArea}
      >
        <Image src="/logo.png" width={48} height={48} alt="charity logo" />
        <Text size="sm" color="fgSubtle">
          {messages.companyName}
        </Text>
      </Stack>
      <Stack justify="space-between" sx={{ height: '100%' }}>
        <NavLinks links={links} />
        <ExitNavLink />
      </Stack>
    </Stack>
  );
};
