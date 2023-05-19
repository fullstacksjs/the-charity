import { useMemberQuery } from '@camp/data-layer';
import { FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { Center, Group, Stack, Title } from '@mantine/core';
import { useState } from 'react';

import { MemberEmptyState } from '../MemberEmptyState';
import { CreateMemberButton, MemberForm } from '../MemberForm';

interface Props {
  familyId: string;
}

const t = messages.member;

export const MemberList = ({ familyId }: Props) => {
  const [memberForm, setMemberForm] = useState<React.ReactNode[]>([]);
  const [isMemberEmpty, setIsMemberEmpty] = useState<boolean>();

  const { data, error, loading } = useMemberQuery({
    variables: { family_id: familyId },
  });
  const member = data?.members;

  const addNewMemberHandler = () => {
    setMemberForm(memberForm.concat(<MemberForm familyId={familyId} />));
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
      {member?.length === 0 && !isMemberEmpty ? (
        <Center h={400}>
          <MemberEmptyState addNewMember={addNewMemberHandler} />
        </Center>
      ) : (
        member?.map(m => (
          <MemberForm initialMember={m} key={m.id} familyId={familyId} />
        ))
      )}
      {memberForm}
    </Stack>
  );
};
