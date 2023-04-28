import type {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
} from '@apollo/client';
import { useQuery as ApolloUseQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';

export const useQuery = <
  Client,
  Data = any,
  Variables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<Data, Variables>,
  options: Partial<QueryHookOptions<Data, Variables>> & {
    mapper: (d: Data | null | undefined) => Client;
  },
): QueryResult<Client, Variables> => {
  const { data, ...rest } = ApolloUseQuery(query, options);
  // NOTE we need to implement other functions that rely on Data type ourself
  return {
    ...rest,
    data: options.mapper(data),
    refetch: async (variables: Variables) => {
      const res = await rest.refetch(variables);
      return { ...res, data: options.mapper(res.data) };
    },
  } as unknown as QueryResult<Client, Variables>;
};
