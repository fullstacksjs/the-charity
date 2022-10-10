import { PackageIcon, PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { createStyles, Image, Stack, Text } from '@mantine/core';

import { NavLink } from '../../atoms';

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

const links = [
  {
    label: messages.families.title,
    icon: <PeopleIcon width="24" height="24" />,
    path: '/families',
  },
  {
    label: messages.projects.title,
    icon: <PackageIcon width="24" height="24" />,
    path: '/projects',
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
      <Stack spacing={20}>
        {links.map(({ icon, label, path }) => (
          <NavLink label={label} path={path} icon={icon} key={label} />
        ))}
      </Stack>
    </Stack>
  );
};
