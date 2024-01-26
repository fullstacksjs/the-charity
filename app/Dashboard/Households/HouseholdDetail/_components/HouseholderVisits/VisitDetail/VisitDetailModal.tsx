import { CalendarIcon, FilePlusIcon } from '@camp/icons';
import { tid } from '@camp/test';
import { Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { openModal } from '@mantine/modals';

import type { VisitDetailProps } from './VisitDetail';
import { VisitDetail } from './VisitDetail';
import { visitDetailModalId as modalId } from './VisitDetailModal.ids';

export const VisitDetailModal = (props: VisitDetailProps) => (
  <VisitDetail {...props} />
);

const VisitField = ({
  label,
  children,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <Group spacing="xs">
      <Text color="fg.5">{icon}</Text>
      <Text color="fg.5">{label}:</Text>
      <Text weight={400}>{children}</Text>
    </Group>
  );
};

interface VisitModalHeaderProps {
  id: string;
}

const VisitModalHeader = ({ id }: VisitModalHeaderProps) => {
  return (
    <Stack spacing="30px">
      <Text>اسناد پروژه خرید لوازم</Text>
      <Stack>
        <VisitField icon={<CalendarIcon />} label="تاریخ">
          ۱۴۰۲/۰۷/۰۱
        </VisitField>
        <VisitField icon={<FilePlusIcon />} label="توضیحات بازدید">
          پسر میترا مریض است و برای درمان نیاز به رفتن به تهران و معالجه دارد.
        </VisitField>
      </Stack>
    </Stack>
  );
};

type Props = VisitDetailProps;

export const openVisitDetailModal = (props: Props) =>
  openModal({
    modalId,
    children: <VisitDetailModal {...props} />,
    styles: {
      header: {
        alignItems: 'flex-start',
      },
    },
    title: <VisitModalHeader id={props.id} />,

    padding: '40px',
    fullScreen: true,
    centered: true,
    ...tid(modalId),
  });
