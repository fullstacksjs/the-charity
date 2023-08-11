import { messages } from '@camp/messages';
import { createStyles, Image, Stack, Text } from '@mantine/core';

import type { NavLinkProps } from '../NavLink';
import { NavLinks } from '../NavLink';

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

export interface SidebarProps {
  links: NavLinkProps[];
  bottom: React.ReactNode;
}

export const Sidebar = ({ links, bottom }: SidebarProps) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.root}>
      <Stack spacing={100} sx={{ flex: 1 }}>
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
        <Stack justify="space-between" sx={{ width: 234, flex: 1 }}>
          <NavLinks links={links} />
          {bottom}
        </Stack>
      </Stack>
    </Stack>
  );
};
