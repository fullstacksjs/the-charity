import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteMemberMutationMutation,
  ApiDeleteMemberMutationMutationVariables,
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '@camp/data-layer';
import type { Member, MemberKeys } from '@camp/domain';
import { isNull } from '@fullstacksjs/toolbox';

import { MemberKeysFragment } from '../fragments';
import { MemberListDocument } from '../queries';

const Document = gql`
  mutation DeleteMemberMutation($id: uuid!) {
    delete_member_by_pk(id: $id) {
      ...MemberKeys
      name
    }
  }
  ${MemberKeysFragment}
`;

export interface DeleteMember {
  member: (MemberKeys & Pick<Member, 'name'>) | undefined;
}

const toClient = (
  data: ApiDeleteMemberMutationMutation | null,
): DeleteMember => {
  const deleted = data?.delete_member_by_pk;

  return {
    member: !isNull(deleted)
      ? { id: deleted.id, name: deleted.name }
      : undefined,
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteMemberMutationMutationVariables => ({
  id: variables.id,
});

export const useDeleteMemberMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }) {
      const id = data?.delete_member_by_pk?.id;
      if (!id) return;

      cache.updateQuery<ApiMemberListQuery, ApiMemberListQueryVariables>(
        { query: MemberListDocument },
        value => {
          return {
            ...value,
            member: value?.member.filter(h => h.id !== id) ?? [],
          };
        },
      );
    },
  });
};
