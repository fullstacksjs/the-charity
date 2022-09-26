import { PeopleIcon } from '@camp/design';

import { AppShell, EmptyState } from '../../components';

export const Home = () => {
  return (
    <AppShell>
      <EmptyState
        icon={<PeopleIcon w="33" h="33" />}
        title="پروژه ای وجود ندارد!"
        message="متاسفانه لیست پروژه های شما خالی است. لطفا پروژه خود را ایجاد کنید."
      />
    </AppShell>
  );
};
