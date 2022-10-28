import { ChevronLeftIcon, HomeIcon } from '@camp/design';
import { Link } from '@camp/router';
import type { Styles } from '@mantine/core';
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';

export interface BreadcrumbItem {
  path: string;
  name: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const styles: Styles<
  'breadcrumb' | 'root' | 'separator',
  Record<string, any>
> = theme => ({
  breadcrumb: {
    'color': theme.colors.fgMuted[6],
    '&:hover': {
      color: theme.colors.indigo,
    },
  },
});

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <MantineBreadcrumbs
      styles={styles}
      separator={<ChevronLeftIcon width="16" height="16" />}
    >
      <HomeIcon width="24" height="24" />
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
