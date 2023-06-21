import type { QueryResult, TypedDocumentNode } from '@apollo/client';
import { useQuery as useApolloQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';

import type { MapperFn, QueryHookOptions } from './types';

export interface InnerQueryHookOptions<
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
> extends QueryHookOptions<TClientMapper, TVariableMapper> {
  mapper: TClientMapper;
  mapVariables: TVariableMapper;
}

export const useQuery = <
  TClientMapper extends MapperFn,
  TVariableMapper extends MapperFn,
>(
  query:
    | DocumentNode
    | TypedDocumentNode<ReturnType<TClientMapper>, ReturnType<TVariableMapper>>,
  options: InnerQueryHookOptions<TClientMapper, TVariableMapper>,
): QueryResult<ReturnType<TClientMapper>, ReturnType<TVariableMapper>> => {
  const { data, ...rest } = useApolloQuery(query, {
    ...options,
    variables: options.mapVariables(options.variables),
  });

  // NOTE we need to implement other functions that rely on Data type ourself
  return {
    ...rest,
    data: options.mapper(data),
    refetch: async (variables: ReturnType<TVariableMapper>) => {
      const res = await rest.refetch(options.mapVariables(variables));
      return { ...res, data: options.mapper(res.data) };
    },
  };
};
