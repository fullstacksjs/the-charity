import { Button, Col, Grid } from '@mantine/core';

import HomeIcon from '../icons/components/Home';

const Header = () => {
  return (
    <Grid>
      <Col span={10}>
        <HomeIcon w="25" h="25" />
      </Col>
      <Col span={2}>
        <Button variant="outline" size="sm">
          ایجاد پروژه جدید
        </Button>
      </Col>
    </Grid>
  );
};

export default Header;
