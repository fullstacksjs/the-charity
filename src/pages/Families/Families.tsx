import { PeopleIcon } from '@camp/design';

import { EmptyState } from '../../components';

export const Families = () => {
  return (
    <>
      <EmptyState
        icon={<PeopleIcon width="33" height="33" />}
        title="خانواده ای وجود ندارد!"
        message="متاسفانه لیست خانواده های شما خالی است."
      />
    </>
  );
};
