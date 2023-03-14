import { DashboardCard } from '@camp/design';
import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { Button, Group, Stack, Title } from '@mantine/core';

import { InformationBadge } from '../InformationBadge';

export const MemberForm = () => {
  const t = messages.member;

  return (
    <Stack spacing={25}>
      <Group position="apart">
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<PlusIcon width="16" height="16" />}
        >
          {t.addNewMember}
        </Button>
      </Group>
      <DashboardCard
        right={
          <Group spacing={10}>
            <Title order={4} color="fgDefault" weight="bold">
              {'علی علیان'}
            </Title>
            <InformationBadge information="draft" />
          </Group>
        }
      />
    </Stack>
  );
};
