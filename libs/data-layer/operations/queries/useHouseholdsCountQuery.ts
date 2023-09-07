import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { ApiHouseholdsCountQuery } from '@camp/data-layer';
import type { Nullish } from '@fullstacksjs/toolbox';
import { noop } from '@fullstacksjs/toolbox';

export const HouseholdsCountDocument = gql`
  query HouseholdsCount {
    household_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export interface HouseholdsCountDto {
  count: Nullish | number;
}

const toClient = (
  data: ApiHouseholdsCountQuery | Nullish,
): HouseholdsCountDto => {
  return {
    count: data?.household_aggregate.aggregate?.count,
  };
};

export const useHouseholdsCountQuery = (
  options: QueryHookOptions<typeof toClient, VoidFunction>,
) =>
  useQuery<typeof toClient, VoidFunction>(HouseholdsCountDocument, {
    ...options,
    mapper: toClient,
    // FIXME make it optional
    mapVariables: noop,
  });
