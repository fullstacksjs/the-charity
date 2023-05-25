import { useMemberListQuery } from '@camp/data-layer';
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
  const [FormArray, setFormArray] = useState<number>(0);
  const [isMemberEmpty, setIsMemberEmpty] = useState<boolean>();
  const { data, error, loading } = useMemberListQuery({
    variables: { family_id: familyId },
  });
  const member = data?.members;

  const addNewMemberHandler = () => {
    setFormArray(prev => prev + 1);
    setIsMemberEmpty(true);
  };

  const memberForm = Array.from(Array(FormArray).keys()).map(i => (
    <MemberForm familyId={familyId} key={i} />
  ));

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
        <CreateMemberButton onClick={addNewMemberHandler} />
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
