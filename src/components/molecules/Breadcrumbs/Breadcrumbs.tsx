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

export const concatPathLevels = (items: BreadcrumbItem[]) => {
  return items.reduce<BreadcrumbItem[]>((acc, current, level) => {
    if (level === 0) return [current];
    return [
      ...acc,
      {
        ...current,
        path: acc[level - 1]!.path + current.path,
      },
    ];
  }, []);
};

export const Breadcrumbs = ({ items }: Props) => {
  const transformedItems = concatPathLevels(items);

  return (
    <MantineBreadcrumbs
      styles={styles}
      separator={<ChevronLeftIcon width="16" height="16" />}
    >
      <HomeIcon width="24" height="24" />
      {transformedItems.map(item => (
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
