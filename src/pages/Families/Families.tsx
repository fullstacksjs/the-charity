/* eslint-disable @typescript-eslint/naming-convention */
import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useMatches } from '@tanstack/react-location';
import { useState } from 'react';

import {
  CreateFamilyButton,
  CreateFamilyModal,
  EmptyState,
  Header,
} from '../../components';
import type { LocationGenerics } from '../../Routes';

export const Families = () => {
  const [isCreateFamilyModalOpen, setIsCreateFamilyModalOpen] = useState(false);
  const matches = useMatches<LocationGenerics>();
  const breadcrumbsName = matches[0]?.route.meta?.breadcrumb;
  return (
    <>
      <Header
        button={
          <CreateFamilyButton
            onClick={() => setIsCreateFamilyModalOpen(true)}
          />
        }
        breadcrumbsTitle={breadcrumbsName}
      />
      <EmptyState
        icon={<PeopleIcon width="33" height="33" />}
        title={messages.families.empty.title}
        message={messages.families.empty.description}
      />
      <CreateFamilyModal
        opened={isCreateFamilyModalOpen}
        onClose={() => {
          setIsCreateFamilyModalOpen(false);
        }}
      />
    </>
  );
};
