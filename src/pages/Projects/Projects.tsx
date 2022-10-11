/* eslint-disable @typescript-eslint/naming-convention */
import { PackageIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useMatches } from '@tanstack/react-location';
import { useState } from 'react';

import {
  CreateProjectButton,
  CreateProjectModal,
  EmptyState,
  Header,
} from '../../components';
import type { LocationGenerics } from '../../Routes';

export const Projects = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    useState(false);
  const matches = useMatches<LocationGenerics>();
  const breadcrumbsName = matches[0]?.route.meta?.breadcrumb;
  return (
    <>
      <Header
        button={
          <CreateProjectButton
            onClick={() => setIsCreateProjectModalOpen(true)}
          />
        }
        breadcrumbsTitle={breadcrumbsName}
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
