import {
  CreateProjectButton,
  CreateProjectModal,
  DashboardHeader,
  ProjectEmptyState,
} from '@camp/components';
import { createTestAttr } from '@camp/utils';
import { useState } from 'react';

export const projectDashboardHeaderId = 'project-dashboard-header';

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
        {...createTestAttr(projectDashboardHeaderId)}
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
