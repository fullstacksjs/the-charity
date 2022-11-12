import {
  CreateProjectButton,
  CreateProjectModal,
  DashboardHeader,
  ProjectEmptyState,
} from '@camp/components';
import { useState } from 'react';

export const Projects = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    useState(false);
  return (
    <>
      <DashboardHeader
        button={
          <CreateProjectButton
            onClick={() => setIsCreateProjectModalOpen(true)}
          />
        }
      />

      <ProjectEmptyState />

      <CreateProjectModal
        opened={isCreateProjectModalOpen}
        onClose={() => {
          setIsCreateProjectModalOpen(false);
        }}
      />
    </>
  );
};
