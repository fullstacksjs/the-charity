import { Col, Grid } from '@mantine/core';

export interface HeaderProps {
  leftButton: React.ReactNode;
  breadcrumbs: React.ReactNode;
}

export const Header = ({ leftButton, breadcrumbs }: HeaderProps) => {
  return (
    <Grid justify="space-between">
      <Col span="auto">{breadcrumbs}</Col>
      <Col span="content">{leftButton}</Col>
    </Grid>
  );
};
