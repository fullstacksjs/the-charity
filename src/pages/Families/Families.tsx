/* eslint-disable @typescript-eslint/naming-convention */
import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useNavigate } from '@tanstack/react-location';
import { useState } from 'react';

import {
  Breadcrumbs,
  CreateFamilyButton,
  CreateFamilyModal,
  EmptyState,
  Header,
} from '../../components';

export const Families = () => {
  const [isCreateFamilyModalOpen, setIsCreateFamilyModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header
        button={
          <CreateFamilyButton
            onClick={() => setIsCreateFamilyModalOpen(true)}
          />
        }
        breadcrumbs={
          <Breadcrumbs
            breadcrumbItems={[
              {
                pathname: messages.families.path,
              },
            ]}
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
          navigate({ to: messages.families.path, replace: true });
        }}
      />
    </>
  );
};
