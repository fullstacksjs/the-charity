import { HomeIcon } from '@camp/design';
import { Col, Grid } from '@mantine/core';

import { CreateProjectButton } from '../../CreateProjectButton';

export const Header = () => {
  return (
    <Grid>
      <Col span={10}>
        <HomeIcon w="25" h="25" />
      </Col>
      <Col span={2}>
        <CreateProjectButton />
      </Col>
    </Grid>
  );
};
