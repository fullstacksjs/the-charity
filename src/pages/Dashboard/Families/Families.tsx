import {
  CreateFamilyButton,
  CreateFamilyModal,
  DashboardHeader,
} from '@camp/components';
import { Outlet } from '@tanstack/react-location';
import { useState } from 'react';

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
