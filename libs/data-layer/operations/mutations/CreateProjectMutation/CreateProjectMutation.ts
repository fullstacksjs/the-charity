import Apollo from '@apollo/client';

import type {
  ApiCreateProjectMutation,
  ApiCreateProjectMutationVariables,
  ApiProjectStatusEnum,
} from '../../api';
import { ApiCreateProjectDocument } from '../../api';
import { toClientMutationFn } from '../toClientMutationFn';

export interface CreateProject {
  project: {
    id: any;
    name: string;
    description?: string | null;
    status: ApiProjectStatusEnum;
  };
}

const toClient = (
  data: ApiCreateProjectMutation | null | undefined,
): CreateProject | null =>
  data?.insert_project_one == null
    ? null
    : {
        project: {
          id: data.insert_project_one.id,
          name: data.insert_project_one.name,
          description: data.insert_project_one.description,
          status: data.insert_project_one.status,
        },
      };

export function useCreateProjectMutation(
  options?: Apollo.MutationHookOptions<
    ApiCreateProjectMutation,
    ApiCreateProjectMutationVariables
  >,
) {
  const [m, { data, ...rest }] = Apollo.useMutation(
    ApiCreateProjectDocument,
    options,
  );

  return [
    toClientMutationFn(m, toClient),
    { data: toClient(data), ...rest },
  ] as const;
}
