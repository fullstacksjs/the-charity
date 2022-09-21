import Logo from './atoms/Logo';
import PeopleIcon from './icons/components/PeopleIcon';
import EmptyState from './molecules/EmptyState';
import NavList from './molecules/NavList';

const AppShell = () => {
  return (
    <>
      <Logo />
      <NavList />
      <EmptyState
        icon={<PeopleIcon w="33" h="33" />}
        title="پروژه ای وجود ندارد!"
        message="متاسفانه لیست پروژه های شما خالی است. لطفا پروژه خود را ایجاد کنید."
      />
    </>
  );
};

export default AppShell;
