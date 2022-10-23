import {
  CreateProjectButton,
  CreateProjectModal,
  DashboardHeader,
  EmptyState,
} from '@camp/components';
import { PackageIcon } from '@camp/design';
import { messages } from '@camp/messages';
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
      <EmptyState
        icon={<PackageIcon width="33" height="33" />}
        title={messages.projects.empty.title}
        message={messages.projects.empty.description}
      />
      <CreateProjectModal
        opened={isCreateProjectModalOpen}
        onClose={() => {
          setIsCreateProjectModalOpen(false);
        }}
      />
    </>
  );
};
