import { useMemberListQuery } from '@camp/data-layer';
import { FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { Center, Group, Stack, Title } from '@mantine/core';
import { useState } from 'react';

import { MemberEmptyState } from '../MemberEmptyState';
import { CreateMemberButton, MemberForm } from '../MemberForm';

interface Props {
  householdId: string;
}

const t = messages.member;

export const MemberList = ({ householdId }: Props) => {
  const [newMembers, setNewMembers] = useState<{ id: number }[]>([]);
  const { data, error, loading } = useMemberListQuery({
    variables: { id: householdId },
  });
  const member = data?.members;
  const isMemberEmpty = member?.length === 0 && newMembers.length === 0;

  const addNewMemberHandler = () => {
    setNewMembers(arr => [...arr, { id: Math.random() }]);
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
        <CreateMemberButton onClick={addNewMemberHandler} />
      </Group>
      {isMemberEmpty ? (
        <Center h={400}>
          <MemberEmptyState addNewMember={addNewMemberHandler} />
        </Center>
      ) : (
        member?.map(m => (
          <MemberForm
            initialMember={m}
            key={m.id}
            householdId={householdId}
            memberId={m.id}
          />
        ))
      )}
      {newMembers.map(({ id }) => (
        <MemberForm
          onSuccess={() => {
            setNewMembers(arr => arr.filter(item => item.id !== id));
          }}
          householdId={householdId}
          key={id}
        />
      ))}
    </Stack>
  );
};
