/* eslint-disable @typescript-eslint/naming-convention */
import { PackageIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useNavigate } from '@tanstack/react-location';
import { useState } from 'react';

import {
  Breadcrumbs,
  CreateProjectButton,
  CreateProjectModal,
  EmptyState,
  Header,
} from '../../components';

export const Projects = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header
        button={
          <CreateProjectButton
            onClick={() => setIsCreateProjectModalOpen(true)}
          />
        }
        breadcrumbs={
          <Breadcrumbs
            breadcrumbItems={[
              {
                pathname: messages.projects.title,
              },
            ]}
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
          navigate({ to: messages.projects.path, replace: true });
        }}
      />
    </>
  );
};
