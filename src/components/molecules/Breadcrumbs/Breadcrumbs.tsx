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

const concatPathLevels = (items: BreadcrumbItem[]) => {
  const localItems: BreadcrumbItem[] = [];

  items.map((item, level) => {
    if (level === 0) return localItems.push(item);
    return localItems.push({
      ...item,
      path: localItems[level - 1]?.path + item.path,
    });
  });

  return localItems;
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
