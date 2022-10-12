/* eslint-disable @typescript-eslint/naming-convention */
import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useState } from 'react';

import {
  CreateFamilyButton,
  CreateFamilyModal,
  DashboardHeader,
  EmptyState,
} from '../../components';

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
