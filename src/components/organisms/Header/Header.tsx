import { HomeIcon } from '@camp/design';
import { Col, Grid } from '@mantine/core';

import { Breadcrumb } from '../../appShell/Breadcrumb';

export interface HeaderProps {
  leftButton: React.ReactNode;
}

export const Header = ({ leftButton, breadcrumbItems }: HeaderProps) => {
  return (
    <Grid>
      <Col span={10}>
        <HomeIcon w="25" h="25" />
        <Breadcrumb breadcrumbItems={} />
      </Col>
      <Col span={2}>{leftButton}</Col>
    </Grid>
  );
};
