import type {
  OperationVariables,
  QueryHookOptions as ApolloQueryHookOptions,
  QueryResult,
  TypedDocumentNode,
} from '@apollo/client';
import { useQuery as useApolloQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';

export type QueryHookOptions<
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
  TClient = any,
> = ApolloQueryHookOptions<TData, TVariables> & {
  mapper: (d: TData | null | undefined) => TClient;
};

export const useQuery = <
  Client,
  Data = any,
  Variables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<Data, Variables>,
  options: QueryHookOptions<Data, Variables, Client>,
): QueryResult<Client, Variables> => {
  const { data, ...rest } = useApolloQuery(query, options);

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
