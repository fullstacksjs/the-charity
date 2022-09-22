import { Center, Container, Text } from '@mantine/core';

import MainLogo from '../../../assets/image/main-logo.svg';
import Logo from '../atoms/Logo';
import NavList from '../molecules/NavList';

const SideBar = () => {
  return (
    <Container
      sx={{
        width: '22%',
        height: '98vh',
        background: '#fff',
        display: 'block',
        textAlign: 'center',
        borderRight: '1px solid #EAECF0',
      }}
    >
      <Center
        sx={{
          background: 'rgba(248, 249, 250, 0.8)',
          width: '92%',
          padding: '2rem 0',
          margin: '1rem 8px 4rem 0px',
          display: 'block',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <Logo logoSrc={MainLogo} />
        <Text color="#ADB5BD">نامی مناسب برای خیریه</Text>
      </Center>
      <NavList />
    </Container>
  );
};

export default SideBar;
