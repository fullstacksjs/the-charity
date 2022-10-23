import { messages } from '@camp/messages';
import { SimpleGrid } from '@mantine/core';

import { DashboardCard } from '../../Card/DashboardCard';
import { FamilyFields } from './FamilyFields';

export const FamilyDetail = () => {
  return (
    <>
      <DashboardCard
        title={messages.familyDetail.title}
        id={messages.familyDetail.id}
      >
        <SimpleGrid
          cols={3}
          spacing={50}
          verticalSpacing={20}
          sx={{ minWidth: 951 }}
        >
          <FamilyFields />
        </SimpleGrid>
      </DashboardCard>
    </>
  );
};
