import Apollo from '@apollo/client';

import type {
  ApiCreateFamilyMutation,
  ApiCreateFamilyMutationVariables,
} from '../../api';
import { ApiCreateFamilyDocument } from '../../api';
import { toClientMutationFn } from '../toClientMutationFn';

export interface CreateFamily {
  family: { id: string; code?: string | null; name: string };
}

const toClient = (
  data: ApiCreateFamilyMutation | null | undefined,
): CreateFamily | null =>
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
  options?: Apollo.MutationHookOptions<
    ApiCreateFamilyMutation,
    ApiCreateFamilyMutationVariables
  >,
) {
  const [m, { data, ...rest }] = Apollo.useMutation(
    ApiCreateFamilyDocument,
    options,
  );

  return [
    toClientMutationFn(m, toClient),
    { data: toClient(data), ...rest },
  ] as const;
}
