import { HomeIcon } from '@camp/design';
import { Col, Grid } from '@mantine/core';

export interface HeaderProps {
  leftButton: React.ReactNode;
  breadcrumbs: React.ReactNode;
}

export const Header = ({ leftButton, breadcrumbs }: HeaderProps) => {
  return (
    <Grid>
      <Col span={10}>{breadcrumbs}</Col>
      <Col span={2}>{leftButton}</Col>
    </Grid>
  );
};
