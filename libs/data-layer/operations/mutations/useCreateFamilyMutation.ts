import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import type { Family } from '@camp/domain';

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

export interface CreateFamilyDto {
  family: Pick<Family, 'code' | 'id' | 'name'>;
}

const toClient = (
  data: ApiCreateFamilyMutation | null | undefined,
): CreateFamilyDto | null =>
  // @ts-ignore the api has some issues
  data?.insert_family_one == null
    ? null
    : {
        family: {
          id: data.insert_family_one.id,
          name: data.insert_family_one.name,
          code: data.insert_family_one.code,
        },
      };

interface Variables {
  name: string;
}

const toApiVariables = (
  variables?: Variables | null,
): ApiCreateFamilyMutationVariables | undefined =>
  variables == null
    ? undefined
    : {
        name: variables.name,
      };

export function useCreateFamilyMutation(
  options?: MutationHookOptions<
    ApiCreateFamilyMutation,
    ApiCreateFamilyMutationVariables
  >,
) {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
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

      return options?.update?.(cache, result, opts);
    },
  });
}
