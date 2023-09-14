import { messages } from '@camp/messages';
import { Text } from '@mantine/core';

interface Props {
  startDate?: Date;
  endDate?: Date;
}

const formatToPersian = (d: Date) =>
  new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(d);

export const DateSummery = ({ startDate, endDate }: Props) => {
  const t = messages.projects.list.table.rows;
  return (
    <Text color="secondary">
      {startDate ? formatToPersian(startDate) : t.unknown}
      {endDate ? `- ${formatToPersian(endDate)}` : null}
    </Text>
  );
};
