import { ReactLocation, Router } from '@tanstack/react-location';

import { AppShell } from '../components/appShell';
import { PeopleIcon } from '../components/appShell/icons/PeopleIcon';
import { EmptyState } from '../components/molecules';

const location = new ReactLocation();

export const App = () => {
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <AppShell>
        <EmptyState
          icon={<PeopleIcon w="33" h="33" />}
          title="پروژه ای وجود ندارد!"
          message="متاسفانه لیست پروژه های شما خالی است. لطفا پروژه خود را ایجاد کنید."
        />
      </AppShell>
    </Router>
  );
};
