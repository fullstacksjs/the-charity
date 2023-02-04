import type {
  ApolloCache,
  DefaultContext,
  DocumentNode,
  FetchResult,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client';
import * as Apollo from '@apollo/client';

export const toClientMutationFn =
  <Option, Result, Client>(
    mutation: (
      o?: Apollo.MutationFunctionOptions<Option, Result>,
    ) => Promise<FetchResult<Option>>,
    toClientFn: (o: Option | null | undefined) => Client,
  ) =>
  (options?: Apollo.MutationFunctionOptions<Option, Result>) =>
    mutation(options).then(({ data, ...rest }) => ({
      data: toClientFn(data),
      ...rest,
    }));

export const useMutation = <
  TData = any,
  TVariables = OperationVariables,
  TContext = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables, TContext, TCache> & {
    mapper: any;
  },
): MutationTuple<TData, TVariables, TContext, TCache> => {
  const [fn, { data, ...rest }] = Apollo.useMutation(mutation, options);

  // FIXME: Type safety
  return [toClientMutationFn(fn), { data: options?.mapper(data), ...rest }];
};
