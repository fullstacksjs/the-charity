import type { QueryResult, TypedDocumentNode } from '@apollo/client';
import { useQuery as useApolloQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';
import { useMemo } from 'react';

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
  { mapper, ...options }: InnerQueryHookOptions<TClientMapper, TVariableMapper>,
): QueryResult<ReturnType<TClientMapper>, ReturnType<TVariableMapper>> => {
  const result = useApolloQuery(query, {
    ...options,
    onCompleted: options.onCompleted
      ? d => options.onCompleted?.(mapper(d))
      : undefined,
    variables: options.mapVariables(options.variables),
  });

  const data = useMemo(() => mapper(result.data), [result.data, mapper]);
  const previousData = useMemo(
    () => mapper(result.previousData),
    [result.previousData, mapper],
  );
  // NOTE: we need to implement other functions that rely on Data type ourself
  return {
    ...result,
    data,
    previousData,
    refetch: async (variables: ReturnType<TVariableMapper>) => {
      const res = await result.refetch(options.mapVariables(variables));
      return { ...res, data: mapper(res.data) };
    },
  };
};
