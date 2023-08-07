import { Text } from '@mantine/core';

interface Props {
  startDate: Date;
  endDate?: Date;
}

const formatToPersian = (d: Date) =>
  new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(d);

export const DateSummery = ({ startDate, endDate }: Props) => {
  return (
    <Text color="secondaryDefault">
      {formatToPersian(startDate)}
      {endDate ? `- ${formatToPersian(endDate)}` : null}
    </Text>
  );
};
