import { messages } from '@camp/messages';
import { Box, Card, Group, SimpleGrid, Stack, Title } from '@mantine/core';

import { FamilyInfo } from './FamilyInfo';

export const FamilyDetail = () => {
  return (
    <Card radius="md" withBorder px={30} py={30}>
      <Stack spacing={30}>
        <Group>
          <Title order={4} color="fgMuted" weight="bold">
            {messages.familyDetail.title}
          </Title>
          <Title order={6} color="fgSubtle" weight={500}>
            {messages.familyDetail.id}
          </Title>
        </Group>
        <SimpleGrid
          cols={3}
          spacing={50}
          verticalSpacing={20}
          sx={{ minWidth: 951 }}
        >
          <FamilyInfo
            title={messages.familyDetail.familyInfo.title('نام')}
            value={messages.familyDetail.familyInfo.title('فول استک زاده')}
          />
          <FamilyInfo
            title={messages.familyDetail.familyInfo.title('سرپرست')}
            value={messages.familyDetail.familyInfo.title(
              'جامعه فول استک زاده',
            )}
          />
          <FamilyInfo
            title={messages.familyDetail.familyInfo.title('تعداد اعضا')}
            value={messages.familyDetail.familyInfo.title('700 نفر')}
          />
          <FamilyInfo
            title={messages.familyDetail.familyInfo.title('وضعیت نیازمندی')}
            value={messages.familyDetail.familyInfo.title('بحرانی')}
            isBadge
            badgeStatus="red"
          />
          <FamilyInfo
            title={messages.familyDetail.familyInfo.title('وضعیت اطلاعات')}
            value={messages.familyDetail.familyInfo.title('تکمیل نشده')}
            isBadge
            badgeStatus="yellow"
          />
        </SimpleGrid>
      </Stack>
    </Card>
  );
};
