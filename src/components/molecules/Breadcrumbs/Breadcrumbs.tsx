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

// const concatPathLevels = (items: BreadcrumbItem[]) => {
//   // return items.map((item, level) => {
//   //   if (level >= 1) {
//   //     // item.path = localItems[level - 1]?.path.concat(item.path) ?? '';
//   //   }
//   return items.map((item, level) => {
//     if (level === 0) return item;
//     return items.reduce((acc, item, index) => {
//       console.log(index);

//       if (index <= level) {
//         return {
//           ...item,
//           path: acc.path + item.path,
//         };
//       }
//     });
//   });
// };

export const Breadcrumbs = ({ items }: Props) => {
  // console.log('items', items);
  // const transformedItems = concatPathLevels(items);
  // console.log('transformed', transformedItems);
  return (
    <MantineBreadcrumbs separator={<ChevronLeftIcon width="16" height="16" />}>
      <HomeIcon width="24" height="24" />
      {items.map(item => (
        <Anchor
          key={item.name + item.path}
          to={item.path as any}
          component={Link}
        >
          {item.name}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
};
