import { Text } from '@mantine/core';

import { DetailCardField } from './DetailCardTextField';

interface Props {
  title: string;
  date?: Date;
}

const formatToPersian = (d: Date) =>
  new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(d);

export const DetailCardDateField = ({ date, title }: Props) => {
  return (
    <DetailCardField title={title}>
      {date ? formatToPersian(date) : <Text color="fg.4">تعیین نشده</Text>}
    </DetailCardField>
  );
};
