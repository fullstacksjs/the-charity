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

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <MantineBreadcrumbs separator={<ChevronLeftIcon width="16" height="16" />}>
      <HomeIcon width="24" height="24" />
      {items.map((item, level) => {
        const composedPath = items.reduce((acc, i, index) => {
          if (index <= level) return `${acc}/${i.path}`;
          return acc;
        }, '') as any;

        return (
          <Anchor
            key={item.name + item.path}
            to={composedPath}
            component={Link}
          >
            {item.name}
          </Anchor>
        );
      })}
    </MantineBreadcrumbs>
  );
};
