import { Text } from '@mantine/core';

import { DetailCardTextField } from './DetailCardTextField';

interface Props {
  title: string;
  date?: Date;
}

const formatToPersian = (d: Date) =>
  new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(d);

export const DetailCardDateField = ({ date, title }: Props) => {
  return (
    <DetailCardTextField title={title}>
      {date ? formatToPersian(date) : <Text color="fgSubtle">تعیین نشده</Text>}
    </DetailCardTextField>
  );
};
