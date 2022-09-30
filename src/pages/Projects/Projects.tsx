import { PackageIcon } from '@camp/design';

import { EmptyState } from '../../components';

export const Projects = () => {
  return (
    <EmptyState
      icon={<PackageIcon width="33" height="33" />}
      title="پروژه ای وجود ندارد!"
      message="متاسفانه لیست پروژه های شما خالی است."
    />
  );
};
