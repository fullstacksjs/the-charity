import { Text } from '@mantine/core';

import { DetailCardTextField } from './DetailCardTextField';

interface Props {
  title: string;
  date?: Date;
}

export const DetailCardDateField = ({ date, title }: Props) => {
  return (
    <DetailCardTextField title={title}>
      {date ? (
        new Intl.DateTimeFormat('fa-IR', { dateStyle: 'long' }).format(date)
      ) : (
        <Text color="fgSubtle">تعیین نشده</Text>
      )}
    </DetailCardTextField>
  );
};
