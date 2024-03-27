import { useVisitDetailQuery } from '@camp/data-layer';
import {
  formatToPersian,
  FullPageLoader,
  showNotification,
} from '@camp/design';
import { CalendarIcon, FilePlusIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { Group, Stack, Text } from '@mantine/core';

import { AddHouseholderVisitButton } from '../../AddHouseholderVisit';

interface HeaderFieldProps {
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const HeaderField = ({ label, children, icon }: HeaderFieldProps) => {
  return (
    <Group spacing="xs">
      <Text color="fg.5">{icon}</Text>
      <Text color="fg.5">{label}:</Text>
      <Text weight={400}>{children}</Text>
    </Group>
  );
};

interface Props {
  id: string;
}

export const VisitDetailHeader = ({ id }: Props) => {
  const { data, loading, error } = useVisitDetailQuery({ variables: { id } });
  const t = messages.householder.visits.detail;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }

  if (loading) return <FullPageLoader />;
  const visit = data!.visit;
  return (
    <Stack spacing="30px">
      <Text>{visit!.name}</Text>
      <Stack spacing="xs">
        <HeaderField icon={<CalendarIcon />} label="تاریخ">
          {formatToPersian(visit!.date)}
        </HeaderField>
        <HeaderField icon={<FilePlusIcon />} label="توضیحات بازدید">
          {visit!.description}
        </HeaderField>
        <AddHouseholderVisitButton householdId={id} />
      </Stack>
    </Stack>
  );
};
