import { ChevronLeftIcon, HomeIcon } from '@camp/icons';
import type { AppRoute } from '@camp/router';
import { Link } from '@camp/router';
import type { Styles } from '@mantine/core';
import {
  Anchor,
  Breadcrumbs as MantineBreadcrumbs,
  useMantineTheme,
} from '@mantine/core';

export interface BreadcrumbItem {
  path: string;
  name: string;
}

interface Props {
  items: BreadcrumbItem[];
  basePath?: string;
}

const styles: Styles<
  'breadcrumb' | 'root' | 'separator',
  Record<string, any>
> = theme => ({
  breadcrumb: {
    'color': theme.colors.fg[6],
    '&:hover': {
      color: theme.colors.primary[6],
    },
  },
});

export const Breadcrumbs = ({ items }: Props) => {
  const theme = useMantineTheme();
  return (
    <MantineBreadcrumbs
      styles={styles}
      separator={<ChevronLeftIcon width="16" height="16" />}
    >
      <HomeIcon color={theme.colors.fg[4]} width="24" height="24" />
      {items.map(item => (
        <Anchor
          key={item.name + item.path}
          to={item.path as AppRoute}
          component={Link}
        >
          {item.name}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
};
