import { ChevronLeftIcon, HomeIcon } from '@camp/icons';
import { Link } from '@camp/router';
import { joinPath } from '@fullstacksjs/toolbox';
import type { Styles } from '@mantine/core';
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';

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
    'color': theme.colors.fgMuted[6],
    '&:hover': {
      color: theme.colors.indigo,
    },
  },
});

export const concatPathLevels = (items: BreadcrumbItem[]) => {
  return items.reduce<BreadcrumbItem[]>(
    (acc, current, level) =>
      level === 0
        ? [current]
        : [...acc, { ...current, path: acc[level - 1]!.path + current.path }],
    [],
  );
};

export const Breadcrumbs = ({ basePath = '', items }: Props) => {
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
          to={`/${joinPath(basePath, item.path)}` as AppRoute}
          component={Link}
        >
          {item.name}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
};
