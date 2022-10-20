import { Outlet } from '@tanstack/react-location';
import { useState } from 'react';

import {
  CreateFamilyButton,
  CreateFamilyModal,
  DashboardHeader,
} from '../../../components';

export const Families = () => {
  const [isCreateFamilyModalOpen, setIsCreateFamilyModalOpen] = useState(false);
  return (
    <>
      <DashboardHeader
        button={
          <CreateFamilyButton
            onClick={() => setIsCreateFamilyModalOpen(true)}
          />
        }
      />
      <Outlet />
      <CreateFamilyModal
        opened={isCreateFamilyModalOpen}
        onClose={() => {
          setIsCreateFamilyModalOpen(false);
        }}
      />
    </>
  );
};
