import { gql, MutationHookOptions } from '@apollo/client';
import { Family } from '@camp/domain';

// Custom hook which handles the mapping and cache

import type {
  ApiCreateFamilyMutation,
  ApiCreateFamilyMutationVariables,
  ApiFamilyListQuery,
} from '../../api';
import { ApiFamilyListDocument } from '../../api';
import { useMutation } from './useMutation';

const Document = gql`
  mutation CreateFamily($name: String!) {
    insert_family_one(object: { name: $name }) {
      id
      code
      name
    }
  }
`;

export interface CreateFamily {
  family: Pick<Family, 'code' | 'id' | 'name'>;
}

const toClient = (
  data: ApiCreateFamilyMutation | null | undefined,
): CreateFamily | null =>
  // @ts-ignore
  data?.insert_family_one == null
    ? null
    : {
        family: {
          id: data.insert_family_one.id,
          name: data.insert_family_one.name,
          code: data.insert_family_one.code,
        },
      };

export function useCreateFamilyMutation(
  options?: MutationHookOptions<
    ApiCreateFamilyMutation,
    ApiCreateFamilyMutationVariables
  >,
) {
  return useMutation(Document, {
    ...options,
    mapper: toClient,
    update(cache, result, opts) {
      const { data: families } = result;
      const newFamilies = families?.insert_family_one;
      const prevFamiliesQuery = cache.readQuery<ApiFamilyListQuery>({
        query: ApiFamilyListDocument,
      });

      if (prevFamiliesQuery && newFamilies) {
        cache.writeQuery({
          query: ApiFamilyListDocument,
          data: {
            family: [...prevFamiliesQuery.family, newFamilies],
          },
        });
      }

      return options?.update?.(cache, result, opts)
    },
  });
}
