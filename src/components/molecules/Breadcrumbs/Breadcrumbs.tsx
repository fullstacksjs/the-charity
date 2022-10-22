import { ChevronLeftIcon, HomeIcon } from '@camp/design';
import { Link } from '@camp/router';
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';

export interface BreadcrumbItem {
  path: string;
  name: string;
}

interface Props {
  items: BreadcrumbItem[];
}

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
  console.log(transformedItems);

  return (
    <MantineBreadcrumbs separator={<ChevronLeftIcon width="16" height="16" />}>
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
