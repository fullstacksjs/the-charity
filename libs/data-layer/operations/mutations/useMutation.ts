import {
  type ApolloCache,
  type DefaultContext,
  type DocumentNode,
  type FetchResult,
  type MutationHookOptions,
  type MutationTuple,
  type OperationVariables,
  type TypedDocumentNode,
} from '@apollo/client';
import * as Apollo from '@apollo/client';

export const useMutation = <
  Client,
  Data = any,
  Variables = OperationVariables,
  Ctx = DefaultContext,
  Cache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: DocumentNode | TypedDocumentNode<Data, Variables>,
  options: Partial<MutationHookOptions<Data, Variables, Ctx, Cache>> & {
    mapper: (d: Data | null | undefined) => Client;
  },
): MutationTuple<Client, Variables, Ctx, Cache> => {
  const [fn, { data, ...rest }] = Apollo.useMutation(mutation, options);
  const m = (
    opts?:
      | Apollo.MutationFunctionOptions<Client, Variables, Ctx, Cache>
      | undefined,
  ): Promise<FetchResult<Client>> =>
    fn({
      ...(opts as Omit<typeof opts, 'onCompleted'>),
      onCompleted: opts?.onCompleted
        ? (a, ...args) => {
            opts.onCompleted?.(options.mapper(a), ...args);
          }
        : undefined,
    }).then(({ data: res, ...rests }) => ({
      data: options.mapper(res),
      ...rests,
    }));
  return [m, { data: options.mapper(data), ...rest }];
};
