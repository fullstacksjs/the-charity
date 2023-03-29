import { useMemberQuery } from '@camp/data-layer';
import { FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { isNull } from '@fullstacksjs/toolbox';
import { Center, Group, Stack, Title } from '@mantine/core';
import { useState } from 'react';

import { MemberEmptyState } from '../MemberEmptyState';
import { CreateMemberButton, MemberForm } from '../MemberForm';

export interface MemberProps {
  familyId: string;
}

const t = messages.member;

export const MemberList = ({ familyId }: MemberProps) => {
  const [memberForm, setMemberForm] = useState<React.ReactNode[]>([]);
  const [isMemberEmpty, setIsMemberEmpty] = useState<boolean>();

  const { data, error, loading } = useMemberQuery({
    variables: { id: familyId },
  });
  const member = data?.member;

  const addNewMemberHandler = () => {
    setMemberForm(memberForm.concat(<MemberForm key={memberForm.length} />));
    setIsMemberEmpty(true);
  };

  if (loading) return <FullPageLoader />;

  if (error) {
    showNotification({
      type: 'failure',
      title: messages.member.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }

  return (
    <Stack spacing={25} sx={{ position: 'relative' }}>
      <Group position="apart">
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
        <CreateMemberButton onAddNewMember={addNewMemberHandler} />
      </Group>
      {isNull(member) && !isMemberEmpty ? (
        <Center h={400}>
          <MemberEmptyState addNewMember={addNewMemberHandler} />
        </Center>
      ) : (
        <> {memberForm}</>
      )}
    </Stack>
  );
};
